import FinalCTA from "../components/FinalCTA";
import Portfolio from "../components/Portfolio";
import ServicePackages from "../components/ServicePackages";

export default function ServiceProductCommerce() {
  return (
    <>
      <ServicePackages
        heading="Product & Commerce Packages"
        packages={[
          {
            name: "Catalog",
            price: "£15 – £35 / image",
            features: [
              "Clean white‑background or lifestyle product shots",
              "Up to 30 products photographed per session",
              "Basic retouching and colour correction",
              "Web‑optimised and high‑resolution deliverables",
            ],
          },
          {
            name: "Campaign",
            price: "£1,500 – £3,500",
            features: [
              "Creative‑directed hero images for seasonal or launch campaigns",
              "Multiple angles, packshots, and contextual lifestyle set‑ups",
              "Art direction, styling, and set design included",
              "Delivery schedule aligned to your launch timeline",
            ],
          },
          {
            name: "Launch Bundle",
            price: "£3,000 – £6,000",
            features: [
              "Complete brand asset package: product, lifestyle, and behind‑the‑scenes",
              "Web, social, and print‑ready formats",
              "Selection and refinement session included",
              "Deposit secures your date — balance due on delivery",
            ],
          },
          {
            name: "Signature Commerce",
            price: "Custom quotation",
            features: [
              "Premium scaled deliverables across multiple product lines",
              "Priority scheduling and dedicated shoot days",
              "Bespoke editorial set with art direction from our creative team",
              "Ongoing partnership with quarterly content refresh options",
            ],
          },
        ]}
        depositNote={
          <>
            A <strong>50% deposit</strong> is required before each shoot day.
            Final pricing is based on the number of products, set complexity,
            and delivery timeline. All images are supplied with full commercial
            usage rights.
          </>
        }
      />
      <FinalCTA />
    </>
  );
}