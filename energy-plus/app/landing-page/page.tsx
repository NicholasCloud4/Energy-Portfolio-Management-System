import CssBaseline from "@mui/material/CssBaseline";
import AppTheme from "../../theme/AppTheme";
import AppBar from "../global-components/AppAppBar";
import Footer from "../global-components/Footer";

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
