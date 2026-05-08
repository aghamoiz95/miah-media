import { PropsWithChildren } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-[#0a0a0b] font-sans selection:bg-[#e0c88f] selection:text-[#0a0a0b]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

