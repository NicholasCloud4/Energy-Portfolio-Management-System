import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "../global-components/AppAppBar";
import Footer from "../global-components/Footer";
import HeroSection from "@/app/landing-page/components/HeroSection";
import {FeatureSection} from "@/app/landing-page/components/FeatureSection";

export default function MarketingPage() {
    return (
        <>
            <CssBaseline enableColorScheme />
            <AppBar />
            <HeroSection />
            <FeatureSection />
            <div>
                <Footer />
            </div>
        </>
    );
}