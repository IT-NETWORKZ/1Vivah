import HeroSlider from "../../components/public/HeroSlider/HeroSlider";
import Navbar from "../../components/public/Navbar/Navbar";
import Footer from "../../components/common/Footer/Footer";
import AboutUs from "../../components/public/AboutUs/AboutUs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <AboutUs />
      <h1 className="mb-3">Welcome</h1>
      <p className="text-muted">This is the public home page.</p>
      <Footer />
    </div>
  )
}
