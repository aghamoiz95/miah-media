import { motion } from "framer-motion";

export default function TrustCredibility() {
  return (
    <section className="bg-[#121214] py-32 px-6 md:px-16 lg:px-24" id="the-standard">
      <div className="max-w-4xl mb-16">
        <h2 className="font-serif text-3xl md:text-5xl text-[#f8f8f6]">
          The Miah Media <span className="italic text-[#e0c88f]">Standard</span>
        </h2>
        <p className="mt-6 font-sans text-sm font-light text-[#f8f8f6]/60 max-w-xl leading-relaxed">
          While our disciplines are varied, our standard is singular. Every client benefits from an overarching methodology rooted in high-end editorial principles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 border-t border-[#f8f8f6]/10 pt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#e0c88f] text-[10px] uppercase tracking-[0.3em]">Pillar I</span>
          <h3 className="text-xl font-serif text-[#f8f8f6] mt-4 mb-4">Complete Discretion</h3>
          <p className="text-[#f8f8f6]/60 text-sm font-sans font-light leading-relaxed">
            For private clients, safety and intimacy are paramount. We operate with absolute sensitivity, particularly with our newborn and family sessions, ensuring complete digital privacy.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-[#e0c88f] text-[10px] uppercase tracking-[0.3em]">Pillar II</span>
          <h3 className="text-xl font-serif text-[#f8f8f6] mt-4 mb-4">Commercial Precision</h3>
          <p className="text-[#f8f8f6]/60 text-sm font-sans font-light leading-relaxed">
            For B2B clients, we understand that imagery must drive revenue. We deliver exceptionally polished assets with the speed and reliability required for real estate listings and product launches.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="text-[#e0c88f] text-[10px] uppercase tracking-[0.3em]">Pillar III</span>
          <h3 className="text-xl font-serif text-[#f8f8f6] mt-4 mb-4">Cinematic Pedigree</h3>
          <p className="text-[#f8f8f6]/60 text-sm font-sans font-light leading-relaxed">
            We reject the generic "bright and airy" template. Our signature is a moody, elegant, and atmospheric aesthetic that positions your property, product, or memory as a luxury asset.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

