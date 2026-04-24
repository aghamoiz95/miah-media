import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0b]">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1920&q=80"
          alt="Cinematic High-End Photography"
          className="h-full w-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[#0a0a0b]" />
      </motion.div>

      <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-[#e0c88f]"></div>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#e0c88f]">
              Premium Media Studio • United Kingdom
            </p>
          </div>
          
          <h1 className="font-serif text-5xl leading-[1.05] text-[#f8f8f6] md:text-7xl lg:text-8xl">
            Cinematic Polish. <br />
            <span className="text-[#e0c88f] italic">Strategic</span> Presentation.
          </h1>
          
          <p className="mt-8 max-w-xl font-sans text-sm font-light leading-relaxed text-[#f8f8f6]/80 md:text-base">
            Miah Media is a luxury visual house architecting refined imagery across real estate, product commercialization, and intimate private portraiture. We do not just capture—we elevate.
          </p>
          
          <div className="mt-12 flex items-center gap-8">
            <a href="#services" className="group flex items-center gap-4 border-b border-[#e0c88f] pb-2 font-sans text-xs uppercase tracking-widest text-[#f8f8f6] transition-colors hover:text-[#e0c88f]">
              <span>Explore The Disciplines</span>
            </a>
            <a href="#commission" className="flex h-14 w-14 items-center justify-center rounded-full border border-[#f8f8f6]/20 text-[#f8f8f6] transition-all hover:border-[#e0c88f] hover:bg-[#e0c88f]/10">
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-12 left-6 md:left-16 lg:left-24 z-10 flex items-center gap-4">
        <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#f8f8f6]/40">Scroll to discover</p>
        <div className="h-12 w-[1px] bg-gradient-to-b from-[#f8f8f6]/40 to-transparent"></div>
      </div>
    </section>
  );
}

