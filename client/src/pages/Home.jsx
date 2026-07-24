import DashboardHeader from "../components/DashboardHeader";
import QuickActions from "../components/QuickActions";
import Analytics from "../components/Analytics";
import Footer from "../components/Footer";

import "../styles/Home.css";

function Home() {
  return (
    <>
      <DashboardHeader />

      <QuickActions />

      <Analytics />

      <Footer />
    </>
  );
}

export default Home;