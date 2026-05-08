import Portfolio from "../components/Portfolio";
import ServicePackages from "../components/ServicePackages";
import TrustCredibility from "../components/TrustCredibility";

export default function ServiceRealEstate() {
  return (
    <>
      <TrustCredibility />
      <Portfolio />
      <ServicePackages
        heading="Real Estate packages"
        packages={[
          {
            name: "Starter",
            price: "£TBC",
            features: [
              "Placeholder: interior highlights + selected details",
              "Placeholder: turnaround and delivery format",
              "Placeholder: marketing-ready crop variations",
            ],
          },
          {
            name: "Editorial",
            price: "£TBC",
            features: [
              "Placeholder: full room coverage + exterior coordination",
              "Placeholder: mood set + styling guidance",
              "Placeholder: fast review workflow",
            ],
          },
          {
            name: "Premium",
            price: "£TBC",
            features: [
              "Placeholder: on-site guidance + expanded editorial set",
              "Placeholder: priority scheduling",
              "Placeholder: feature pack for listings",
            ],
          },
          {
            name: "Showcase",
            price: "£TBC",
            features: [
              "Placeholder: large property coverage and scaled deliverables",
              "Placeholder: marketing assets bundling",
              "Placeholder: deposit-to-booking confirmation",
            ],
          },
        ]}
      />
    </>
  );
}



