import { Home, Construction, Building2, Droplets, Sparkles, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "House Washing",
    icon: Home,
    desc: "Gentle soft-wash removes algae and grime without damaging siding.",
    keywords: "house washing, soft wash siding, exterior cleaning",
  },
  {
    title: "Driveway & Concrete Cleaning",
    icon: Construction,
    desc: "Lift oil stains and restore bright, safe concrete and pavers.",
    keywords: "driveway pressure wash, concrete cleaning, paver cleaning",
  },
  {
    title: "Roof Soft Washing",
    icon: ShieldCheck,
    desc: "Safe, low-pressure treatment kills moss and streaks without damage.",
    keywords: "roof cleaning, soft wash roof, no damage",
  },
  {
    title: "Deck, Fence & Patio",
    icon: Droplets,
    desc: "Refresh wood and composite surfaces for a like-new outdoor space.",
    keywords: "deck cleaning, fence wash, patio power washing",
  },
  {
    title: "Commercial Power Washing",
    icon: Building2,
    desc: "Professional curb appeal for storefronts, walkways, and facades.",
    keywords: "commercial power washing, storefront cleaning",
  },
  {
    title: "Gutter Brightening + Rust/Stain Removal",
    icon: Sparkles,
    desc: "Erase tiger stripes, rust, and oxidation for a crisp, clean finish.",
    keywords: "gutter brightening, rust removal, stain removal",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-16" aria-labelledby="services">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mx-auto max-w-2xl text-center">
          <h2 id="services" className="text-3xl font-bold tracking-tight text-blue-950 md:text-4xl">
            Exterior Cleaning Services That Add Instant Curb Appeal
          </h2>
          <p className="mt-2 text-slate-600">
            From homes to commercial properties, ProEdge Services delivers spotless results with eco-safe methods and professional-grade equipment.
          </p>
        </header>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, icon: Icon, desc, keywords }) => (
            <article
              key={title}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-50 p-3 text-blue-700 ring-1 ring-blue-100">
                  <Icon aria-hidden className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-blue-950">{title}</h3>
              </div>
              <p className="mt-3 text-slate-600">{desc}</p>
              <p className="sr-only">{keywords}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
