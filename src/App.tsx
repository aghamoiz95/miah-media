import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TrustCredibility from "./components/TrustCredibility";
import Portfolio from "./components/Portfolio";
import BrandStory from "./components/BrandStory";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] font-sans selection:bg-[#e0c88f] selection:text-[#0a0a0b]">
      <Navbar />
      <Hero />
      <Services />
      <TrustCredibility />
      <Portfolio />
      <BrandStory />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
