import { useState, useEffect } from "react";
import { Instagram, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import BrandLogo from "./BrandLogo";

const NAV_LINKS = ["Services", "Portfolio", "Studio", "The Standard", "Commission"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled ? "bg-[#0a0a0b]/90 py-4 backdrop-blur-md border-b border-[#f8f8f6]/5" : "bg-transparent py-8"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-16 lg:px-24">
          <a href="#" className="z-50 group">
            <BrandLogo />
          </a>

          <div className="hidden lg:flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#f8f8f6]/80 transition-colors hover:text-[#e0c88f]"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#f8f8f6]/80 hover:text-[#e0c88f] transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#commission" className="border border-[#e0c88f] px-6 py-2.5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e0c88f] transition-colors hover:bg-[#e0c88f] hover:text-[#0a0a0b]">
              Enquire
            </a>
          </div>

          <button 
            className="z-50 lg:hidden text-[#f8f8f6]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <motion.div 
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 z-40 bg-[#0a0a0b] flex flex-col items-center justify-center gap-10"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={() => setMobileMenuOpen(false)}
            className="font-serif text-3xl text-[#f8f8f6] hover:text-[#e0c88f] transition-colors"
          >
            {link}
          </a>
        ))}
        <a href="#commission" onClick={() => setMobileMenuOpen(false)} className="mt-8 border border-[#e0c88f] px-10 py-4 font-sans text-xs uppercase tracking-[0.2em] text-[#e0c88f]">
          Enquire
        </a>
      </motion.div>
    </>
  );
}

