import FinalCTA from "../components/FinalCTA";
import ServicePackages from "../components/ServicePackages";
import TrustCredibility from "../components/TrustCredibility";

export default function ServiceBabyFaceless() {
  return (
    <>
      <TrustCredibility />
      <FinalCTA />
      <ServicePackages
        heading="Baby & faceless packages"
        packages={[
          {
            name: "Gentle Session",
            price: "£TBC",
            features: [
              "Placeholder: soothing, minimal-stress session flow",
              "Placeholder: faceless/covered compositions",
              "Placeholder: curated select delivery",
            ],
          },
          {
            name: "Family Story",
            price: "£TBC",
            features: [
              "Placeholder: guided family positioning",
              "Placeholder: styling notes + session preparation",
              "Placeholder: expanded deliverables",
            ],
          },
          {
            name: "Keepsake",
            price: "£TBC",
            features: [
              "Placeholder: premium editorial set",
              "Placeholder: priority scheduling",
              "Placeholder: deposit to secure your date",
            ],
          },
          {
            name: "Signature",
            price: "£TBC",
            features: [
              "Placeholder: scaled session + curated story set",
              "Placeholder: optional add-ons (TBC)",
              "Placeholder: final refinement + delivery",
            ],
          },
        ]}
      />
    </>
  );
}



