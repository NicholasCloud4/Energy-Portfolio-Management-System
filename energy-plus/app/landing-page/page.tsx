import CssBaseline from "@mui/material/CssBaseline";
import AppTheme from "../../theme/AppTheme";
import AppBar from "./components/AppAppBar";
import Footer from "./components/Footer";

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppBar />
      <div>
        <Footer />
      </div>
    </AppTheme>
  );
}
