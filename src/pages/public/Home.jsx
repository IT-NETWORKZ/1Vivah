import HeroSlider from "../../components/public/HeroSlider/HeroSlider";
import Navbar from "../../components/public/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <h1 className="mb-3">Welcome</h1>
      <p className="text-muted">This is the public home page.</p>
    </div>
  )
}
