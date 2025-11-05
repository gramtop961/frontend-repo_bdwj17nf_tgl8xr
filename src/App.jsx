import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ShowcaseSection from "./components/ShowcaseSection";
import SocialProofSection from "./components/SocialProofSection";

function App() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ProEdge Services",
    image:
      "https://images.unsplash.com/photo-1602101022020-386a2a06b46c?q=80&w=1600&auto=format&fit=crop",
    url: "https://proedgeservices.example.com",
    telephone: "+1-202-555-0123",
    description:
      "ProEdge Services provides premium pressure washing, house washing, roof cleaning, driveway pressure wash, and commercial power washing across Washington, DC, Maryland, and Northern Virginia.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "Washington",
      addressRegion: "DC",
      postalCode: "20001",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Washington, DC" },
      { "@type": "City", name: "Arlington, VA" },
      { "@type": "City", name: "Alexandria, VA" },
      { "@type": "City", name: "Bethesda, MD" },
      { "@type": "City", name: "Silver Spring, MD" },
      { "@type": "City", name: "Rockville, MD" },
      { "@type": "County", name: "Montgomery County" },
      { "@type": "County", name: "Prince George's County" },
    ],
    sameAs: [
      "https://www.google.com/maps",
      "https://facebook.com",
      "https://yelp.com",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pressure Washing Washington DC",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "House Washing" },
      },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Driveway Pressure Wash" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Power Washing" } },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <HeroSection />
      <ServicesSection />
      <ShowcaseSection />
      <SocialProofSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}

export default App;
