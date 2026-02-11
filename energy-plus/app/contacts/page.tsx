import { Toolbar } from "@mui/material";
import AppAppBar from "../global-components/AppAppBar";
import Contacts from "./Contacts";

export default function Page() {
    return (
        <>
            <AppAppBar />
            <Toolbar /> {/* <-- pushes main content below AppBar (Spacing) */}
            <Contacts />
        </>
    );
}
