import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Instagram, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import BrandLogo from "./BrandLogo";

const NAV_LINKS: Array<{ label: string; to: string }> = [
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Studio", to: "/studio" },
  { label: "The Standard", to: "/services#the-standard" },
  { label: "Commission", to: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
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
          <Link
            to="/"
            className="z-50 group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <BrandLogo />
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#f8f8f6]/80 transition-colors hover:text-[#e0c88f]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="https://instagram.com/miahmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f8f8f6]/80 hover:text-[#e0c88f] transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="border border-[#e0c88f] px-6 py-2.5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e0c88f] transition-colors hover:bg-[#e0c88f] hover:text-[#0a0a0b]"
            >
              Enquire
            </Link>
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
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setMobileMenuOpen(false)}
            className="font-serif text-3xl text-[#f8f8f6] hover:text-[#e0c88f] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </motion.div>
    </>
  );
}