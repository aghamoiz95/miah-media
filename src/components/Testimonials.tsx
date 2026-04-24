import { useState } from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const reviews = [
    {
      quote: "The way they capture light and shadow transformed our luxury property listing into a masterpiece. A vital commercial partner.",
      name: "Eleanor Vance",
      role: "Sotheby's International Realty"
    },
    {
      quote: "Breathtakingly tasteful. They captured the quiet beauty of our newborn in a way that feels like high-fashion art, while completely respecting our privacy.",
      name: "The Harrison Family",
      role: "Private Client, London"
    },
    {
      quote: "Our brand's visual identity has been elevated entirely. Their product photography doesn't just show the item, it commands attention.",
      name: "Aura Cosmetics",
      role: "Creative Director"
    }
  ];

  return (
    <section className="bg-[#0a0a0b] py-32 flex items-center justify-center text-center px-6">
      <div className="max-w-4xl w-full">
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#e0c88f] mb-12">Client Perspectives</p>
        
        <div className="relative h-72 md:h-48 flex items-center justify-center">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: activeIdx === idx ? 1 : 0,
                y: activeIdx === idx ? 0 : 10,
                pointerEvents: activeIdx === idx ? "auto" : "none"
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-x-0 top-0"
            >
              <p className="font-serif text-2xl md:text-4xl leading-relaxed text-[#f8f8f6]">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="mt-12">
                <p className="font-sans text-sm font-medium text-[#f8f8f6] tracking-wider">{review.name}</p>
                <p className="mt-2 font-sans text-[10px] text-[#e0c88f] tracking-widest uppercase">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`h-1 transition-all duration-500 ${activeIdx === idx ? 'w-12 bg-[#e0c88f]' : 'w-4 bg-[#f8f8f6]/20'}`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

