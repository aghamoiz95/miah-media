import FinalCTA from "../components/FinalCTA";
import ServicePackages from "../components/ServicePackages";
import TrustCredibility from "../components/TrustCredibility";

export default function ServiceBabyFaceless() {
  return (
    <>
      <TrustCredibility />
      <ServicePackages
        heading="Baby & Faceless Packages"
        packages={[
          {
            name: "Gentle Session",
            price: "£350 – £550",
            features: [
              "30–45 minute in‑home session",
              "15–20 edited faceless and wrapped compositions",
              "Curated selection delivered within 7 days",
              "Online gallery with download and sharing options",
            ],
          },
          {
            name: "Family Story",
            price: "£600 – £900",
            features: [
              "60 minute guided family session",
              "30–40 edited images including candids and posed portraits",
              "Styling guidance and preparation notes included",
              "Priority booking and flexible rescheduling",
            ],
          },
          {
            name: "Keepsake",
            price: "£1,200 – £1,800",
            features: [
              "90 minute premium editorial session",
              "60+ final images with colour grading and retouching",
              "Print‑ready files and optional album layout",
              "Priority scheduling with early‑morning or golden‑hour options",
            ],
          },
          {
            name: "Signature",
            price: "£2,000 – £3,000",
            features: [
              "Full day coverage (up to 6 hours) from birth to first bath",
              "80+ curated images in a bespoke story sequence",
              "Dedicated pre‑session consultation and mood board",
              "Printed heirloom album and framed gallery piece",
            ],
          },
        ]}
        depositNote={
          <>
            A non‑refundable <strong>50% deposit</strong> secures your session
            date. Newborn sessions are best booked 4–6 weeks in advance. The
            remaining balance is due 48 hours before the session.
          </>
        }
      />
      <FinalCTA />
    </>
  );
}