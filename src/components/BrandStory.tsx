import { motion } from "framer-motion";
import BrandLogo from "./BrandLogo";

export default function BrandStory() {
  return (
    <section className="bg-[#121214] px-6 py-32 md:px-16 lg:px-24" id="studio">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-32 items-center">
        <div className="relative order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="aspect-[3/4] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1556157382-97edd2f9e1a7?w=800&q=80"
              alt="Miah Media Director"
              className="h-full w-full object-cover grayscale opacity-80"
            />
          </motion.div>
          
          <div className="absolute top-1/2 -right-6 md:-right-12 -translate-y-1/2 bg-[#0a0a0b] p-8 md:p-12 shadow-2xl border border-[#f8f8f6]/10 max-w-xs">
            <BrandLogo className="items-start" />
            <p className="mt-6 font-sans text-xs uppercase tracking-widest text-[#e0c88f]">Director & Founder</p>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#e0c88f]">The Studio</span>
          <h2 className="mt-8 font-serif text-4xl leading-tight text-[#f8f8f6] md:text-5xl lg:text-6xl">
            A boutique visual house dedicated to <span className="italic text-[#e0c88f]">uncompromising</span> refinement.
          </h2>
          
          <div className="mt-12 space-y-6">
            <p className="font-sans text-sm font-light leading-relaxed text-[#f8f8f6]/70">
              Miah Media is a premium photography studio born in the UK, established on the belief that visual media is the ultimate luxury asset. Whether we are styling an architectural space, or documenting the quiet dawn of a newborn, our approach remains singular: meticulous, moody, and undeniably cinematic.
            </p>
            <p className="font-sans text-sm font-light leading-relaxed text-[#f8f8f6]/70">
              We bridge the gap between intimate storytelling and high-end commercial presentation, serving a discerning clientele who demand that their imagery feels more like a magazine editorial than a standard photograph.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

