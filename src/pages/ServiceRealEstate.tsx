import Portfolio from "../components/Portfolio";
import ServicePackages from "../components/ServicePackages";
import TrustCredibility from "../components/TrustCredibility";

export default function ServiceRealEstate() {
  return (
    <>
      <TrustCredibility />
      <Portfolio />
      <ServicePackages
        heading="Real Estate Packages"
        packages={[
          {
            name: "Essential",
            price: "£850 – £1,200",
            features: [
              "12–15 edited images, delivered in 5–7 business days",
              "Full room coverage with key feature highlights",
              "Horizontal and vertical crops for listings and portals",
              "Online gallery for easy download and sharing",
            ],
          },
          {
            name: "Professional",
            price: "£1,500 – £2,500",
            features: [
              "20–30 edited images with twilight and lifestyle shots",
              "Mood styling consultation prior to shoot",
              "Priority 48-hour turnaround available",
              "Social media–ready formats and marketing crops",
            ],
          },
          {
            name: "Premium",
            price: "£2,800 – £4,000",
            features: [
              "40–60 images including aerial, dusk, and detail close‑ups",
              "On‑site styling and art direction",
              "Dedicated project manager and priority scheduling",
              "Full usage rights and bespoke deliverable packages",
            ],
          },
          {
            name: "Bespoke",
            price: "Custom quotation",
            features: [
              "Tailored coverage for large estates or commercial developments",
              "Multi‑day shoots with video walkthroughs available",
              "Brand‑aligned marketing asset bundles",
              "Deposit secures your date — balance due before delivery",
            ],
          },
        ]}
        depositNote={
          <>
            A <strong>50% deposit</strong> is required to secure your date. Final
            pricing is confirmed after an on‑site assessment and project scope
            discussion. All deliverables are supplied in high‑resolution JPEG and
            web‑optimised formats.
          </>
        }
      />
    </>
  );
}