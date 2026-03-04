import OverviewContent from "@/app/dashboard/overview/Overview";
import RadialDial from "./components/RadialDial";

export default function OverviewPage() {
    return (
        <>
            <OverviewContent />
            <RadialDial value={45} />
        </>
    );
}
