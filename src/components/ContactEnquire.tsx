import BrandLogo from "./BrandLogo";

const PHONE_E164 = "447388447167";
const WHATSAPP_URL = `https://wa.me/${PHONE_E164}`;

export default function ContactEnquire() {
  return (
    <section className="relative py-24 px-6 md:px-16 lg:px-24 bg-[#0a0a0b]">
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80"
          alt="Texture"
          className="h-full w-full object-cover grayscale"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center">
          <BrandLogo className="mx-auto mb-10" />
          <h1 className="font-serif text-4xl text-[#f8f8f6] md:text-6xl mb-6">Enquire</h1>
          <p className="font-sans text-sm font-light text-[#f8f8f6]/70 leading-relaxed max-w-2xl mx-auto">
            For all commissions and enquiries, we’ll respond with availability and next steps. A 50% deposit secures your booking.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-xl border border-[#f8f8f6]/10 bg-[#121214]/60 backdrop-blur p-6">
            <h2 className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f8f8f6] mb-6">Direct contact</h2>

            <div className="flex flex-col gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 border border-[#e0c88f] bg-[#e0c88f] px-6 py-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#0a0a0b] transition-all hover:bg-transparent hover:text-[#e0c88f]"
              >
                WhatsApp 07388 447 167
              </a>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:info@miahmedia.co.uk?subject=Enquiry%20-%20Miah%20Media"
                  className="w-full inline-flex items-center justify-center border border-[#f8f8f6]/20 bg-transparent px-6 py-4 font-sans text-xs uppercase tracking-[0.2em] text-[#f8f8f6] transition-all hover:border-[#e0c88f] hover:text-[#e0c88f]"
                >
                  Email info@miahmedia.co.uk
                </a>
                <a
                  href="mailto:hello@miahmedia.co.uk?subject=Brochure%20Request"
                  className="w-full inline-flex items-center justify-center border border-[#f8f8f6]/20 bg-transparent px-6 py-4 font-sans text-xs uppercase tracking-[0.2em] text-[#f8f8f6] transition-all hover:border-[#e0c88f] hover:text-[#e0c88f]"
                >
                  View brochure
                </a>
              </div>
            </div>

            <div className="mt-8 border-t border-[#f8f8f6]/10 pt-6">
              <p className="font-sans text-xs text-[#f8f8f6]/60 leading-relaxed">
                <span className="text-[#f8f8f6]/80">Address:</span> Harpal House 14 Holyhead Road, Handsworth, Birmingham, West Midlands, England, B21 0LT
              </p>
              <p className="mt-3 font-sans text-xs text-[#f8f8f6]/60 leading-relaxed">
                <span className="text-[#f8f8f6]/80">Deposit:</span> 50% to secure your date. The remainder is due ahead of delivery.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-[#f8f8f6]/10 bg-[#121214]/60 backdrop-blur p-6">
            <h2 className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f8f8f6] mb-6">Contact form</h2>

            <form
              className="flex flex-col gap-4"
              action="mailto:info@miahmedia.co.uk"
              method="post"
              encType="text/plain"
            >
              <label className="flex flex-col gap-2">
                <span className="font-sans text-xs text-[#f8f8f6]/70">Your name</span>
                <input
                  name="name"
                  required
                  className="w-full rounded-lg border border-[#f8f8f6]/15 bg-transparent px-4 py-3 text-sm text-[#f8f8f6] outline-none focus:border-[#e0c88f]"
                  placeholder="Full name"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-sans text-xs text-[#f8f8f6]/70">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-[#f8f8f6]/15 bg-transparent px-4 py-3 text-sm text-[#f8f8f6] outline-none focus:border-[#e0c88f]"
                  placeholder="name@email.com"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-sans text-xs text-[#f8f8f6]/70">Project type</span>
                <select
                  name="project"
                  className="w-full rounded-lg border border-[#f8f8f6]/15 bg-transparent px-4 py-3 text-sm text-[#f8f8f6] outline-none focus:border-[#e0c88f]"
                  defaultValue="Real Estate"
                >
                  <option value="Real Estate">Real Estate</option>
                  <option value="Baby & Faceless">Baby & Faceless</option>
                  <option value="Bespoke Events">Bespoke Events</option>
                  <option value="Product & Commerce">Product & Commerce</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-sans text-xs text-[#f8f8f6]/70">What do you need?</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-[#f8f8f6]/15 bg-transparent px-4 py-3 text-sm text-[#f8f8f6] outline-none focus:border-[#e0c88f]"
                  placeholder="Tell us about your location, timing, and style..."
                />
              </label>

              <p className="font-sans text-[11px] leading-relaxed text-[#f8f8f6]/55">
                Submitting opens your email client to send your enquiry to <span className="text-[#e0c88f]">info@miahmedia.co.uk</span>.
                Booking is secured with a <span className="text-[#e0c88f]">50% deposit</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center border border-[#e0c88f] bg-[#e0c88f] px-6 py-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#0a0a0b] transition-all hover:bg-transparent hover:text-[#e0c88f]"
                >
                  Send enquiry
                </button>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center border border-[#f8f8f6]/20 bg-transparent px-6 py-4 font-sans text-xs uppercase tracking-[0.2em] text-[#f8f8f6] transition-all hover:border-[#e0c88f] hover:text-[#e0c88f]"
                >
                  Or message on WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

