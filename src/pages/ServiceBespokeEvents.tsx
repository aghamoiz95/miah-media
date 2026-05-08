import Services from "../components/Services";
import ServicePackages from "../components/ServicePackages";
import Testimonials from "../components/Testimonials";

export default function ServiceBespokeEvents() {
  return (
    <>
      <Services />
      <Testimonials />
      <ServicePackages
        heading="Bespoke events packages"
        packages={[
          {
            name: "Planning Support",
            price: "£TBC",
            features: [
              "Placeholder: concept + shot planning",
              "Placeholder: availability and timings guidance",
              "Placeholder: curated editorial coverage plan",
            ],
          },
          {
            name: "Full Event Coverage",
            price: "£TBC",
            features: [
              "Placeholder: multi-phase coverage",
              "Placeholder: highlight delivery timeline",
              "Placeholder: editorial selection workflow",
            ],
          },
          {
            name: "Brand-led",
            price: "£TBC",
            features: [
              "Placeholder: brand consistency + creative direction",
              "Placeholder: campaign-ready deliverables",
              "Placeholder: optional extras (TBC)",
            ],
          },
          {
            name: "Signature Commission",
            price: "£TBC",
            features: [
              "Placeholder: premium bespoke editorial package",
              "Placeholder: priority scheduling",
              "Placeholder: deposit secures your booking",
            ],
          },
        ]}
      />
    </>
  );
}



