import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 px-6 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-start gap-16 border-b border-[#f8f8f6]/10 pb-16">
        <div className="max-w-sm">
          <BrandLogo className="items-start" />
          <p className="mt-8 font-sans text-xs text-[#f8f8f6]/50 leading-relaxed">
            Premium editorial photography and visual media. Based in the United Kingdom, available for select commissions globally.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-16 md:gap-24">
          <div className="flex flex-col gap-5">
            <h4 className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f8f8f6] mb-2">Disciplines</h4>
            {[
              { label: "Real Estate", to: "/services/real-estate" },
              { label: "Baby & Faceless", to: "/services/baby-faceless" },
              { label: "Bespoke Events", to: "/services/bespoke-events" },
              { label: "Product & Commerce", to: "/services/product-commerce" },
            ].map(({ label, to }) => (
              <Link key={label} to={to} className="font-sans text-xs text-[#f8f8f6]/60 transition-colors hover:text-[#e0c88f]">
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f8f8f6] mb-2">Studio</h4>
            {[
              { label: "The Standard", to: "/#the-standard" },
              { label: "Archive", to: "/#portfolio" },
              { label: "About Miah", to: "/#studio" },
              { label: "Commission", to: "/#commission" },
            ].map(({ label, to }) => (
              <Link key={label} to={to} className="font-sans text-xs text-[#f8f8f6]/60 transition-colors hover:text-[#e0c88f]">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-sans text-[10px] uppercase tracking-widest text-[#f8f8f6]/40">
          © {new Date().getFullYear()} Miah Media. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a
            href="https://instagram.com/miahmedia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f8f8f6]/40 hover:text-[#e0c88f] transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <Link to="/privacy" className="font-sans text-[10px] uppercase tracking-widest text-[#f8f8f6]/40 hover:text-[#e0c88f] transition-colors">
            Privacy
          </Link>
          <Link to="/terms" className="font-sans text-[10px] uppercase tracking-widest text-[#f8f8f6]/40 hover:text-[#e0c88f] transition-colors">
            Terms
          </Link>
        </div>

      </div>
    </footer>
  );
}

