import Services from "../components/Services";
import ServicePackages from "../components/ServicePackages";
import Testimonials from "../components/Testimonials";

export default function ServiceBespokeEvents() {
  return (
    <>
      <Services />
      <ServicePackages
        heading="Bespoke Events Packages"
        packages={[
          {
            name: "Planning Support",
            price: "£750 – £1,500",
            features: [
              "Venue scouting and shot‑list planning",
              "Timeline creation and coordination with vendors",
              "Pre‑event concept mood board and visual storyboard",
              "Up to 2 hours of on‑the‑day coordination",
            ],
          },
          {
            name: "Full Coverage",
            price: "£2,500 – £5,000",
            features: [
              "Multi‑phase coverage: ceremony, reception, details, and candid moments",
              "4–6 hours of shooting with a second shooter available",
              "Highlight reel and 200+ edited images",
              "Online gallery with private sharing portal for guests",
            ],
          },
          {
            name: "Brand‑Led",
            price: "£5,000 – £10,000",
            features: [
              "Full creative direction aligned to brand guidelines",
              "Campaign‑ready hero images for marketing and PR",
              "Content strategy session and social media asset planning",
              "Bespoke post‑production, retouching, and colour grading",
            ],
          },
          {
            name: "Signature Commission",
            price: "Custom quotation",
            features: [
              "Tailored luxury editorial package for milestone celebrations",
              "Multi‑day coverage available for festivals or destination events",
              "Printed coffee‑table book and exhibition‑grade prints",
              "A dedicated creative partner from concept to final delivery",
            ],
          },
        ]}
        depositNote={
          <>
            A <strong>40% retainer</strong> is required to confirm your event date
            and begin planning. Remaining fees are due 14 days before the event.
            Travel charges may apply for events outside the West Midlands.
          </>
        }
      />
      <Testimonials />
    </>
  );
}