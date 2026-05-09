import { useState, useCallback } from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleDotClick = useCallback((idx: number) => {
    setActiveIdx(idx);
  }, []);

  const reviews = [
    {
      quote:
        "The way they capture light and shadow transformed our luxury property listing into a masterpiece. A vital commercial partner.",
      name: "Eleanor Vance",
      role: "Sotheby's International Realty",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      alt: "Eleanor Vance",
    },
    {
      quote:
        "Breathtakingly tasteful. They captured the quiet beauty of our newborn in a way that feels like high-fashion art, while completely respecting our privacy.",
      name: "The Harrison Family",
      role: "Private Client, London",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      alt: "The Harrison Family",
    },
    {
      quote:
        "Our brand's visual identity has been elevated entirely. Their product photography doesn't just show the item, it commands attention.",
      name: "Aura Cosmetics",
      role: "Creative Director — Sophie Chen",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80",
      alt: "Sophie Chen, Aura Cosmetics",
    },
  ];

  return (
    <section className="bg-[#0a0a0b] py-32 flex items-center justify-center text-center px-6" id="testimonials">
      <div className="max-w-4xl w-full">
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#e0c88f] mb-4">
          Client Perspectives
        </p>

        <div className="relative h-72 md:h-48 flex items-center justify-center">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: activeIdx === idx ? 1 : 0,
                y: activeIdx === idx ? 0 : 10,
                pointerEvents: activeIdx === idx ? "auto" : "none",
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-x-0 top-0"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <img
                  src={review.image}
                  alt={review.alt}
                  className="h-10 w-10 rounded-full object-cover border border-[#f8f8f6]/20"
                  loading="lazy"
                />
                <div className="text-left">
                  <p className="font-sans text-sm font-medium text-[#f8f8f6]">
                    {review.name}
                  </p>
                  <p className="font-sans text-[10px] text-[#e0c88f] tracking-widest uppercase">
                    {review.role}
                  </p>
                </div>
              </div>
              <p className="font-serif text-xl md:text-3xl leading-relaxed text-[#f8f8f6] px-4">
                &ldquo;{review.quote}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              aria-label={`Go to review ${idx + 1}`}
              className={`h-1 transition-all duration-500 ${
                activeIdx === idx
                  ? "w-12 bg-[#e0c88f]"
                  : "w-4 bg-[#f8f8f6]/20 hover:bg-[#e0c88f]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}