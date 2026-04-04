'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import ForgotPassword from './components/ForgotPassword';
import AppTheme from "../../theme/AppTheme";
import ColorModeSwitch from "@/theme/ColorModeSwitch";
import SitemarkIcon from '../global-components/SitemarkIcon';
import { supabaseClient } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: { maxWidth: '450px' },
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
    height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
    minHeight: "100%",
    padding: theme.spacing(2),
    [theme.breakpoints.up("sm")]: { padding: theme.spacing(4) },
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
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [rememberMe, setRememberMe] = React.useState(true);

    const router = useRouter();
    const emailRef = React.useRef<HTMLInputElement>(null);
    const passwordRef = React.useRef<HTMLInputElement>(null);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Load saved email from localStorage on client
    React.useEffect(() => {
        if (typeof window !== "undefined") {
            const savedEmail = localStorage.getItem("savedEmail");
            if (savedEmail && emailRef.current) {
                emailRef.current.value = savedEmail;
            }
        }
    }, []);

    const validateInputs = () => {
        const email = emailRef.current;
        const password = passwordRef.current;
        let isValid = true;

        if (!email?.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Please enter a valid email address.');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        return isValid;
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!validateInputs()) return;

        const email = emailRef.current?.value ?? "";
        const password = passwordRef.current?.value ?? "";

        try {
            const { data: authData, error: signInError } =
                await supabaseClient.auth.signInWithPassword({
                    email,
                    password,
                });

            if (signInError) {
                setEmailError(true);
                setEmailErrorMessage(signInError.message);
                return;
            }

            if (typeof window !== "undefined") {
                if (rememberMe) localStorage.setItem("savedEmail", email);
                else localStorage.removeItem("savedEmail");
            }

            if (!authData.user) return;

            const { data: profile, error: profileError } = await supabaseClient
                .from("profiles")
                .select("account_type")
                .eq("id", authData.user.id)
                .single();

            if (profileError) {
                setEmailError(true);
                setEmailErrorMessage("Could not load user profile.");
                return;
            }

            if (profile?.account_type === "admin") {
                router.push("/dashboard/users");
            } else if (profile?.account_type === "auditor") {
                router.push("/dashboard/auditor");
            } else {
                router.push("/dashboard/overview");
            }
        } catch (err: any) {
            setEmailError(true);
            setEmailErrorMessage(err.message || "An unexpected error occurred");
        }
    };

    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />
            <SignInContainer direction="column" justifyContent="space-between">
                <ColorModeSwitch sx={{ position: "fixed", top: "1.1rem", right: "1rem" }} />
                <Card variant="outlined">
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <SitemarkIcon />
                    </Box>

                    <Typography component="h1" variant="h4" sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
                        Sign in
                    </Typography>

                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
                    >
                        <FormControl>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <TextField
                                error={emailError}
                                helperText={emailErrorMessage}
                                id="email"
                                inputRef={emailRef}
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                autoComplete="email"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                color={emailError ? 'error' : 'primary'}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <TextField
                                error={passwordError}
                                helperText={passwordErrorMessage}
                                id="password"
                                type="password"
                                name="password"
                                placeholder="••••••"
                                autoComplete="current-password"
                                required
                                fullWidth
                                variant="outlined"
                                inputRef={passwordRef}
                                color={passwordError ? 'error' : 'primary'}
                            />
                        </FormControl>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    color="primary"
                                />
                            }
                            label="Remember me"
                        />
                        <ForgotPassword open={open} handleClose={handleClose} />

                        <Button type="submit" fullWidth variant="contained">
                            Sign in
                        </Button>

                        <Link
                            component="button"
                            type="button"
                            onClick={handleClickOpen}
                            variant="body2"
                            sx={{ alignSelf: 'center' }}
                        >
                            Forgot your password?
                        </Link>
                    </Box>

                    <Divider>or</Divider>

                    <Typography sx={{ textAlign: 'center' }}>
                        Don&apos;t have an account?{' '}
                        <Link href="/sign-up" variant="body2">
                            Sign up
                        </Link>
                    </Typography>
                </Card>
            </SignInContainer>
        </AppTheme>
    );
}