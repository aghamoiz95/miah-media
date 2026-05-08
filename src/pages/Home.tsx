import Hero from "../components/Hero";
import Services from "../components/Services";
import TrustCredibility from "../components/TrustCredibility";
import Portfolio from "../components/Portfolio";
import BrandStory from "../components/BrandStory";
import Testimonials from "../components/Testimonials";
import FinalCTA from "../components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <TrustCredibility />
      <Portfolio />
      <BrandStory />
      <Testimonials />
      <FinalCTA />
    </>
  );
}

