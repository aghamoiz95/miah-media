import BrandLogo from "./BrandLogo";

export default function FinalCTA() {
  return (
    <section className="relative py-48 px-6 flex items-center justify-center overflow-hidden bg-[#121214]" id="commission">
      <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
        <img
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80"
          alt="Texture"
          className="h-full w-full object-cover grayscale"
        />
      </div>
      
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <BrandLogo className="mb-12" />
        <h2 className="font-serif text-4xl text-[#f8f8f6] md:text-6xl mb-6">
          Commission the <span className="italic text-[#e0c88f]">Studio</span>
        </h2>
        <p className="font-sans text-sm font-light text-[#f8f8f6]/60 leading-relaxed mb-12">
          We accept a curated number of commercial projects and private commissions each quarter to ensure uncompromising editorial excellence. Contact us to discuss your vision.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="mailto:hello@miahmedia.co.uk" className="w-full sm:w-auto border border-[#e0c88f] bg-[#e0c88f] px-10 py-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#0a0a0b] transition-all hover:bg-transparent hover:text-[#e0c88f] text-center">
            Submit Enquiry
          </a>
          <a href="mailto:hello@miahmedia.co.uk?subject=Brochure%20Request" className="w-full sm:w-auto border border-[#f8f8f6]/20 bg-transparent px-10 py-4 font-sans text-xs uppercase tracking-[0.2em] text-[#f8f8f6] text-center transition-all hover:border-[#e0c88f] hover:text-[#e0c88f]">
            View Brochure
          </a>
        </div>
      </div>
    </section>
  );
}

