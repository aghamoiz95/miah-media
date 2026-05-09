import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import useScrollToHash from "./hooks/useScrollToHash";

import Home from "./pages/Home";
import Studio from "./pages/Studio";
import Services from "./pages/Services";

import ServiceRealEstate from "./pages/ServiceRealEstate";
import ServiceBabyFaceless from "./pages/ServiceBabyFaceless";
import ServiceBespokeEvents from "./pages/ServiceBespokeEvents";
import ServiceProductCommerce from "./pages/ServiceProductCommerce";

import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

export default function App() {
  useScrollToHash();

  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/studio" element={<Studio />} />
        <Route path="/services" element={<Services />} />

        <Route path="/services/real-estate" element={<ServiceRealEstate />} />
        <Route path="/services/baby-faceless" element={<ServiceBabyFaceless />} />
        <Route path="/services/bespoke-events" element={<ServiceBespokeEvents />} />
        <Route path="/services/product-commerce" element={<ServiceProductCommerce />} />

        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonials />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </DefaultLayout>
  );
}


