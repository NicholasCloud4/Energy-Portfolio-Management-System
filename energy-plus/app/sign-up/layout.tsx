"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import AppTheme from "../../theme/AppTheme";
import SitemarkIcon from "../global-components/SitemarkIcon";
import { supabaseClient } from "@/lib/supabaseClient";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/navigation";
import ColorModeSwitch from "@/theme/ColorModeSwitch";

const Card = styled(MuiCard)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    width: "100%",
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: "auto",
    boxShadow:
        "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
    [theme.breakpoints.up("sm")]: {
        width: "450px",
    },
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
    height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
    minHeight: "100%",
    padding: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(4),
    },
    "&::before": {
        content: '""',
        display: "block",
        position: "absolute",
        zIndex: -1,
        inset: 0,
        backgroundImage:
            "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
        backgroundRepeat: "no-repeat",
        ...theme.applyStyles("dark", {
            backgroundImage:
                "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
        }),
    },
}));

export default function Layout(props: { disableCustomTheme?: boolean }) {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);
    const [successOpen, setSuccessOpen] = React.useState(false);
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        const form = event.currentTarget;
        const username = (form.elements.namedItem("username") as HTMLInputElement).value;
        const firstName = (form.elements.namedItem("firstName") as HTMLInputElement).value;
        const lastName = (form.elements.namedItem("lastName") as HTMLInputElement).value;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const password = (form.elements.namedItem("password") as HTMLInputElement).value;
        const confirmPassword = (form.elements.namedItem("confirmPassword") as HTMLInputElement).value;

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            setLoading(false);
            return;
        }

        const { data: authData, error: signUpError } = await supabaseClient.auth.signUp({ email, password });

        if (signUpError) {
            setError(signUpError.message);
            setLoading(false);
            return;
        }

        const userId = authData.user?.id;
        if (!userId) {
            setError("User creation failed.");
            setLoading(false);
            return;
        }

        try {
            // Include email when creating the profile
            const res = await fetch("/api/profiles", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: userId, username, first_name: firstName, last_name: lastName, email }), // Add email here
            });

            const json = await res.json();
            if (!res.ok) throw new Error(json.error || "Failed to create profile");

            setSuccessOpen(true);
            setTimeout(() => {
                setSuccessOpen(false);
                router.push("/sign-in");
            }, 6000);

        } catch (err: any) {
            setError(err.message);
        }

        setLoading(false);
    };


    return (
        <AppTheme {...props}>
            <Snackbar open={successOpen} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
                <Alert severity="success" variant="filled">
                    Your account has been created. Please check your email to confirm.
                </Alert>
            </Snackbar>

            <CssBaseline enableColorScheme />
            <ColorModeSwitch sx={{ position: "fixed", top: "1.1rem", right: "1rem" }} />

            <SignUpContainer direction="column" justifyContent="space-between">
                <Card variant="outlined">
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <SitemarkIcon />
                    </Box>

                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
                    >
                        Sign up
                    </Typography>

                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                        <FormControl>
                            <FormLabel>Username</FormLabel>
                            <TextField name="username" required fullWidth />
                        </FormControl>

                        <FormControl>
                            <FormLabel>First name</FormLabel>
                            <TextField name="firstName" required fullWidth />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Last name</FormLabel>
                            <TextField name="lastName" required fullWidth />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <TextField name="email" type="email" required fullWidth />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <TextField name="password" type="password" required fullWidth />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Re-enter Password</FormLabel>
                            <TextField name="confirmPassword" type="password" required fullWidth />
                        </FormControl>

                        {error && (
                            <Typography color="error" variant="body2">
                                {error}
                            </Typography>
                        )}

                        <Button type="submit" fullWidth variant="contained" disabled={loading}>
                            {loading ? "Creating account..." : "Sign up"}
                        </Button>
                    </Box>

                    <Divider>
                        <Typography sx={{ color: "text.secondary" }}>or</Typography>
                    </Divider>

                    <Typography sx={{ textAlign: "center" }}>
                        Already have an account?{" "}
                        <Link href="/sign-in" variant="body2">
                            Sign in
                        </Link>
                    </Typography>
                </Card>
            </SignUpContainer>
        </AppTheme>
    );
}
