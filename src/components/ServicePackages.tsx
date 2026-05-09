import { ReactNode } from "react";

type Package = {
  name: string;
  price: ReactNode;
  features: string[];
};

type ServicePackagesProps = {
  heading?: string;
  packages: Package[];
  depositNote?: ReactNode;
};

export default function ServicePackages({
  heading = "Packages & Pricing",
  packages,
  depositNote = (
    <>
      A <strong>50% deposit</strong> secures your date. Final pricing is
      confirmed after availability and project scope discussion.
    </>
  ),
}: ServicePackagesProps) {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#0a0a0b]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-[#f8f8f6]">
            {heading}
          </h2>
          <p className="mt-4 font-sans text-sm text-[#f8f8f6]/60 max-w-2xl mx-auto leading-relaxed">
            Pricing varies by project scope, timeline, and usage rights. All
            packages include professionally edited, high-resolution images.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="rounded-xl border border-[#f8f8f6]/10 bg-[#121214]/60 backdrop-blur p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-[#f8f8f6]">
                  {pkg.name}
                </h3>
                <div className="font-serif text-xl text-[#e0c88f]">
                  {pkg.price}
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {pkg.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-[#f8f8f6]/70 leading-relaxed"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#e0c88f] shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-[#f8f8f6]/10 pt-6 text-center">
          <p className="font-sans text-xs text-[#f8f8f6]/60 leading-relaxed">
            {depositNote}
          </p>
        </div>
      </div>
    </section>
  );
}