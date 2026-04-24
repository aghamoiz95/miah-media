import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section className="bg-[#0a0a0b] py-32 text-[#f8f8f6]" id="services">
      <div className="px-6 md:px-16 lg:px-24 mb-32">
        <h2 className="font-serif text-4xl md:text-6xl max-w-2xl leading-tight">
          A Master Brand of <br />
          <span className="italic text-[#e0c88f]">Four Distinct</span> Disciplines.
        </h2>
      </div>

      <div className="flex flex-col gap-48">
        {/* Service 1: Real Estate */}
        <div className="relative w-full px-6 md:px-16 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4 relative"
            >
              <div className="aspect-[16/9] lg:aspect-[21/9] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80"
                  alt="Luxury Real Estate"
                  className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-full lg:w-1/3 lg:absolute lg:-bottom-12 lg:right-24 bg-[#121214] p-8 md:p-12 shadow-2xl border-l border-[#e0c88f]/20"
            >
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#e0c88f]">01 — Spaces</span>
              <h3 className="mt-4 font-serif text-3xl md:text-4xl">Real Estate</h3>
              <p className="mt-6 font-sans text-sm font-light leading-relaxed text-[#f8f8f6]/70">
                Designed for discerning agents and developers. We deliver professional, rapid, and repeatable architectural captures that elevate property presentation and drive definitive business outcomes.
              </p>
              <a href="#portfolio" className="mt-8 inline-flex items-center gap-3 font-sans text-xs uppercase tracking-widest text-[#e0c88f] hover:text-[#f8f8f6] transition-colors">
                View Architectural Work <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Service 2: Baby */}
        <div className="px-6 md:px-16 lg:px-24 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-32">
          <div className="w-full lg:w-1/2 lg:pl-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#e0c88f]">02 — Lineage</span>
              <h3 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">Baby & <br />Faceless Portraiture</h3>
              <div className="mt-8 h-[1px] w-full bg-[#f8f8f6]/10" />
              <p className="mt-8 font-sans text-sm font-light leading-relaxed text-[#f8f8f6]/70">
                Intimate, safe, and profoundly moving. We specialize in privacy-conscious, faceless photography that preserves the emotional truth of your family&apos;s earliest chapters. 
              </p>
              <p className="mt-6 font-sans text-sm font-light leading-relaxed text-[#f8f8f6]/70">
                Every session is conducted with complete discretion and maternal care, creating timeless heirlooms without compromising your child&apos;s digital privacy.
              </p>
              <a href="#commission" className="mt-10 inline-block border border-[#e0c88f] px-8 py-4 font-sans text-xs uppercase tracking-widest text-[#e0c88f] hover:bg-[#e0c88f] hover:text-[#0a0a0b] transition-all">
                Discover The Approach
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-5/12"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-t-full">
              <img
                src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80"
                alt="Intimate Baby Photography"
                className="h-full w-full object-cover opacity-80 transition-transform duration-1000 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        {/* Service 3: Party */}
        <div className="w-full">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="aspect-[16/9] lg:aspect-[24/9] overflow-hidden relative"
          >
            <img
              src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1600&q=80"
              alt="Luxury Event Atmosphere"
              className="h-full w-full object-cover opacity-60 transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent" />
          </motion.div>
          <div className="px-6 md:px-16 lg:px-24 -mt-24 lg:-mt-32 relative z-10 text-center max-w-3xl mx-auto">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#e0c88f]">03 — Celebration</span>
            <h3 className="mt-4 font-serif text-4xl md:text-6xl text-[#f8f8f6] drop-shadow-2xl">Bespoke Events</h3>
            <p className="mt-6 font-sans text-sm font-light leading-relaxed text-[#f8f8f6]/80 bg-[#0a0a0b]/40 backdrop-blur-sm p-6 rounded-lg">
              Kinetic, warm, and highly atmospheric. We document your most cherished celebrations, capturing the true mood, the champagne toasts, and the fleeting moments—ensuring your memories outlive the night.
            </p>
          </div>
        </div>

        {/* Service 4: Product */}
        <div className="px-6 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-3/5 order-2 lg:order-1">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#e0c88f]">04 — Commerce</span>
            <h3 className="mt-4 font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-[#f8f8f6]">
              <span className="italic text-[#e0c88f]">Commercial</span> <br />
              Precision.
            </h3>
            <div className="mt-12 flex gap-8 items-start border-t border-[#f8f8f6]/10 pt-8">
              <p className="max-w-sm font-sans text-sm font-light leading-relaxed text-[#f8f8f6]/70">
                Sharp, minimalist, and impeccably styled. We craft ecommerce-ready imagery that elevates brand perception and provides the polished commercial support your sales demand.
              </p>
              <a href="#portfolio" className="flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-full border border-[#f8f8f6]/20 transition-all hover:border-[#e0c88f] hover:bg-[#e0c88f] hover:text-[#0a0a0b]">
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-2/5 order-1 lg:order-2"
          >
            <div className="aspect-[4/5] overflow-hidden bg-[#121214] p-12 lg:p-16 flex items-center justify-center border border-[#f8f8f6]/5">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
                alt="Commercial Product Photography"
                className="w-full h-full object-cover shadow-2xl transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

