import HeroSlider from "../../components/public/HeroSlider/HeroSlider";
import Navbar from "../../components/public/Navbar/Navbar";
import Footer from "../../components/common/Footer/Footer";
import AboutUs from "../../components/public/AboutUs/AboutUs";
import HowItWorks from "../../components/public/HowItWorks/HowItWorks"
import GuestMessages from "../../components/public/GuestMessages/GuestMessages";
import QuickSearch from "../../components/public/QuickSearch/QuickSearch";
import PFooter from "../../components/public/PFooter/PFooter";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <AboutUs />
      <HowItWorks />
      {/* <h1 className="mb-3">Welcome</h1>
      <p className="text-muted">This is the public home page.</p> */}
      <GuestMessages />
      <QuickSearch />
      <PFooter />
      <Footer />
    </div>
  )
}
