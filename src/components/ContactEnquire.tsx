import { useState } from "react";
import BrandLogo from "./BrandLogo";

const PHONE_E164 = "447388447167";
const WHATSAPP_URL = `https://wa.me/${PHONE_E164}`;
const FORMSPREE_ID = "mqzzqjwl";

export default function ContactEnquire() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "Real Estate",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            project: formData.project,
            message: formData.message,
          }),
        }
      );

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", project: "Real Estate", message: "" });
      } else {
        const data = await response.json().catch(() => ({}));
        setError(data?.errors?.[0]?.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <section className="relative py-24 px-6 md:px-16 lg:px-24 bg-[#0a0a0b]">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <BrandLogo className="mx-auto mb-10" />
          <h1 className="font-serif text-4xl text-[#f8f8f6] md:text-6xl mb-6">
            Thank You
          </h1>
          <p className="font-sans text-sm font-light text-[#f8f8f6]/70 leading-relaxed max-w-xl mx-auto">
            Your enquiry has been sent successfully. We&apos;ll respond within
            24 hours with availability and next steps. A 50% deposit secures
            your booking.
          </p>
          <a
            href="/contact"
            className="inline-block mt-10 border border-[#e0c88f] px-8 py-3 font-sans text-xs uppercase tracking-widest text-[#e0c88f] hover:bg-[#e0c88f] hover:text-[#0a0a0b] transition-all"
          >
            Send Another Message
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 px-6 md:px-16 lg:px-24 bg-[#0a0a0b]">
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80"
          alt="Miah Media Contact"
          className="h-full w-full object-cover grayscale"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center">
          <BrandLogo className="mx-auto mb-10" />
          <h1 className="font-serif text-4xl text-[#f8f8f6] md:text-6xl mb-4">
            Enquire
          </h1>
          <p className="font-sans text-sm font-light text-[#f8f8f6]/70 leading-relaxed max-w-2xl mx-auto">
            For all commissions and enquiries, we&rsquo;ll respond within 24
            hours with availability and next steps. A 50% deposit secures your
            booking.
          </p>
        </div>

        {error && (
          <div className="mt-6 bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-center">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-xl border border-[#f8f8f6]/10 bg-[#121214]/60 backdrop-blur p-6">
            <h2 className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f8f8f6] mb-6">
              Direct contact
            </h2>

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
                <span className="text-[#f8f8f6]/80">Address:</span>{" "}
                Harpal House, 14 Holyhead Road, Handsworth, Birmingham, West
                Midlands, England, B21 0LT
              </p>
              <p className="mt-3 font-sans text-xs text-[#f8f8f6]/60 leading-relaxed">
                <span className="text-[#f8f8f6]/80">Deposit:</span> 50% to
                secure your date. The remainder is due ahead of delivery.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-[#f8f8f6]/10 bg-[#121214]/60 backdrop-blur p-6">
            <h2 className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f8f8f6] mb-6">
              Contact form
            </h2>

            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <label className="flex flex-col gap-2">
                <span className="font-sans text-xs text-[#f8f8f6]/70">
                  Your name
                </span>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-[#f8f8f6]/15 bg-transparent px-4 py-3 text-sm text-[#f8f8f6] outline-none focus:border-[#e0c88f]"
                  placeholder="Full name"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-sans text-xs text-[#f8f8f6]/70">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-[#f8f8f6]/15 bg-transparent px-4 py-3 text-sm text-[#f8f8f6] outline-none focus:border-[#e0c88f]"
                  placeholder="name@email.com"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-sans text-xs text-[#f8f8f6]/70">
                  Service type
                </span>
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#f8f8f6]/15 bg-transparent px-4 py-3 text-sm text-[#f8f8f6] outline-none focus:border-[#e0c88f]"
                >
                  <option value="Real Estate">Real Estate</option>
                  <option value="Baby &amp; Faceless">Baby & Faceless</option>
                  <option value="Bespoke Events">Bespoke Events</option>
                  <option value="Product & Commerce">
                    Product &amp; Commerce
                  </option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-sans text-xs text-[#f8f8f6]/70">
                  Message
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-[#f8f8f6]/15 bg-transparent px-4 py-3 text-sm text-[#f8f8f6] outline-none focus:border-[#e0c88f]"
                  placeholder="Tell us about your location, timing, and style..."
                />
              </label>

              <p className="font-sans text-[11px] leading-relaxed text-[#f8f8f6]/55">
                Submitting sends your enquiry directly to{" "}
                <span className="text-[#e0c88f]">
                  info@miahmedia.co.uk
                </span>
                . Booking is secured with a{" "}
                <span className="text-[#e0c88f]">50% deposit</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center border border-[#e0c88f] bg-[#e0c88f] px-6 py-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#0a0a0b] transition-all hover:bg-transparent hover:text-[#e0c88f] disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
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