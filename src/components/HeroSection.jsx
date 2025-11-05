import { Phone, ShieldCheck, Star, BadgeCheck, Sparkles } from "lucide-react";

const HeroSection = () => {
  const handleQuoteClick = () => {
    const el = document.getElementById("quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden bg-blue-950 text-white">
      {/* Background image with subtle overlay */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIyNjIzMTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')",
        }}
        role="img"
        aria-label="Professional pressure washing result on driveway, clean reflective surface"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-950/70 to-blue-950/95" aria-hidden="true" />

      {/* Decorative water spray effect */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute right-40 top-20 h-40 w-40 rotate-12 rounded-full bg-sky-200/10 blur-2xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-10 sm:pt-36">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-sky-300" />
            <span>Serving DC • Maryland • Northern Virginia</span>
          </div>
          <h1 className="font-bold leading-tight tracking-tight text-white drop-shadow-sm md:text-6xl text-4xl">
            Bring Your Property Back to Life with Professional Pressure Washing
          </h1>
          <p className="mt-4 text-lg text-blue-100 md:text-xl">
            Top-Rated Exterior Cleaning Service in Washington, DC. Fast, affordable, and fully insured.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={handleQuoteClick}
              className="rounded-md bg-gradient-to-r from-sky-200 to-white px-6 py-3 font-semibold text-blue-950 shadow-lg shadow-sky-200/30 transition hover:from-sky-300 hover:to-white"
              aria-label="Get a Free Quote"
            >
              Get a Free Quote
            </button>
            <a
              href="tel:+12025550123"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-6 py-3 font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
              aria-label="Call Now"
            >
              <Phone className="h-5 w-5" /> Call Now
            </a>
          </div>

          {/* Trust badges (icons remain green by request) */}
          <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-blue-100 sm:flex sm:flex-wrap sm:gap-4">
            <div className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10">
              <ShieldCheck className="h-4 w-4 text-lime-400" /> Licensed & Insured
            </div>
            <div className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10">
              <Star className="h-4 w-4 text-lime-400" /> 5-Star Rated
            </div>
            <div className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10">
              <BadgeCheck className="h-4 w-4 text-lime-400" /> 100% Satisfaction Guarantee
            </div>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className="mt-12 rounded-xl bg-white/10 p-4 ring-1 ring-white/20 backdrop-blur">
          <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
            <div>
              <div className="text-3xl font-extrabold text-white">1,200+</div>
              <div className="mt-1 text-blue-100">Homes Cleaned</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white">450+</div>
              <div className="mt-1 text-blue-100">5-Star Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white">10</div>
              <div className="mt-1 text-blue-100">Years Serving DC</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white">24 hr</div>
              <div className="mt-1 text-blue-100">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
