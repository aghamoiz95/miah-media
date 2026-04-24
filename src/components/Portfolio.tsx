import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <section className="bg-[#0a0a0b] py-32" id="portfolio">
      <div className="px-6 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#e0c88f]">The Archive</p>
            <h2 className="mt-4 font-serif text-4xl text-[#f8f8f6] md:text-5xl">Selected Works</h2>
          </div>
          <span className="border-b border-[#e0c88f] pb-1 font-sans text-xs uppercase tracking-[0.2em] text-[#f8f8f6]">
            View Full Archive
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 lg:gap-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-7 group cursor-pointer"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80"
                alt="Editorial Work"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-0" />
            </div>
            <div className="mt-6 flex justify-between items-center">
              <p className="font-serif text-xl text-[#f8f8f6]">The Silk Series</p>
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#f8f8f6]/50">Editorial / Commercial</p>
            </div>
          </motion.div>

          <div className="md:col-span-5 flex flex-col gap-12 lg:gap-24 md:pt-32">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
                  alt="Gallery Work"
                  className="h-full w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 flex justify-between items-center">
                <p className="font-serif text-lg text-[#f8f8f6]">Nocturne</p>
                <p className="font-sans text-[10px] uppercase tracking-widest text-[#f8f8f6]/50">Spaces / Atmosphere</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="group cursor-pointer md:ml-12"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80"
                  alt="Fashion Model"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 flex justify-between items-center">
                <p className="font-serif text-lg text-[#f8f8f6]">Monochrome Muse</p>
                <p className="font-sans text-[10px] uppercase tracking-widest text-[#f8f8f6]/50">Private Portraiture</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

