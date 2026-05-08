import FinalCTA from "../components/FinalCTA";
import Portfolio from "../components/Portfolio";
import ServicePackages from "../components/ServicePackages";

export default function ServiceProductCommerce() {
  return (
    <>
      <Portfolio />
      <FinalCTA />
      <ServicePackages
        heading="Product & commerce packages"
        packages={[
          {
            name: "Catalog",
            price: "£TBC",
            features: [
              "Placeholder: product-focused editorial coverage",
              "Placeholder: clean backgrounds + variations",
              "Placeholder: listing and marketing crops",
            ],
          },
          {
            name: "Campaign",
            price: "£TBC",
            features: [
              "Placeholder: campaign set with creative direction",
              "Placeholder: multiple angles + styling",
              "Placeholder: delivery schedule for launches",
            ],
          },
          {
            name: "Launch Bundle",
            price: "£TBC",
            features: [
              "Placeholder: bundle assets for web + social",
              "Placeholder: selection + refinement process",
              "Placeholder: deposit-to-booking confirmation",
            ],
          },
          {
            name: "Signature Commerce",
            price: "£TBC",
            features: [
              "Placeholder: premium scaled deliverables",
              "Placeholder: priority scheduling",
              "Placeholder: bespoke editorial set",
            ],
          },
        ]}
      />
    </>
  );
}



