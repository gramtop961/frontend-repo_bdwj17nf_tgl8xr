import { Star, MapPin, Clock, Phone, ShieldCheck } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    name: "Alicia R.",
    text:
      "Incredible difference on our siding and walkway. Showed up on time and finished same day. Highly recommend!",
    rating: 5,
    source: "Google",
  },
  {
    name: "Mason K.",
    text:
      "Booked a roof soft wash—no damage and the black streaks are gone. Upfront pricing and super friendly crew.",
    rating: 5,
    source: "Facebook",
  },
  {
    name: "Priya D.",
    text:
      "They handled our commercial storefront and sidewalks. Night-and-day improvement. Fast response!",
    rating: 5,
    source: "Yelp",
  },
];

const faqs = [
  {
    q: "Do you damage siding?",
    a: "No. We use a controlled soft-wash process on siding that relies on low pressure and the right detergents to gently remove organic growth without etching or forcing water behind the panels.",
  },
  {
    q: "How long does it take?",
    a: "Most residential jobs take 1–3 hours depending on size and scope. We provide arrival windows and keep you updated throughout.",
  },
  {
    q: "Is pressure washing safe for roofs?",
    a: "We never use high pressure on shingles. Roofs are treated with an approved soft-wash application that eliminates algae and moss safely.",
  },
  {
    q: "Do I need to be home?",
    a: "No. As long as we have exterior access and payment is arranged, you don’t need to be home. We’ll send photos upon completion.",
  },
  {
    q: "What’s the difference between soft wash & pressure wash?",
    a: "Soft wash uses low pressure with specialized solutions for delicate surfaces (siding, roofs). Pressure washing uses higher pressure to deep-clean durable surfaces (concrete, brick).",
  },
];

const ReviewCard = ({ name, text, rating, source }) => (
  <div className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-5">
    <div>
      <div className="flex items-center gap-1 text-yellow-400" aria-label={`${rating} star rating`}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mt-3 text-slate-700">“{text}”</p>
    </div>
    <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
      <span className="font-medium text-slate-700">{name}</span>
      <span className="rounded-md bg-slate-100 px-2 py-1">{source}</span>
    </div>
  </div>
);

const AccordionItem = ({ q, a, isOpen, onToggle }) => (
  <div className="rounded-lg border border-slate-200 bg-white">
    <button onClick={onToggle} className="flex w-full items-center justify-between p-4 text-left">
      <span className="font-medium text-blue-950">{q}</span>
      <span className="text-slate-500">{isOpen ? "–" : "+"}</span>
    </button>
    {isOpen && <div className="border-t border-slate-200 p-4 text-slate-600">{a}</div>}
  </div>
);

const SocialProofSection = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-white py-16" aria-labelledby="reviews">
      <div className="mx-auto max-w-7xl px-6">
        {/* Reviews */}
        <header className="mx-auto max-w-3xl text-center">
          <h2 id="reviews" className="text-3xl font-bold tracking-tight text-blue-950 md:text-4xl">
            Rated #1 in Washington, DC for Exterior Cleaning
          </h2>
          <p className="mt-2 text-slate-600">
            Real customers. Real results. See why homeowners and businesses choose ProEdge Services.
          </p>
        </header>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>

        {/* Service Area SEO */}
        <div className="mt-14 grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-blue-950">Proudly Serving DC, MD & Northern VA</h3>
            <p className="mt-2 text-slate-600">
              Proudly pressure washing homes & businesses in Washington, DC, Arlington, Alexandria, Bethesda, Silver Spring, Rockville, Fairfax, Reston, Tysons, Prince George’s County, Montgomery County, and more.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-600 sm:grid-cols-3">
              {[
                "Washington, DC",
                "Arlington, VA",
                "Alexandria, VA",
                "Bethesda, MD",
                "Silver Spring, MD",
                "Rockville, MD",
                "Fairfax, VA",
                "Reston, VA",
                "Tysons, VA",
                "Prince George’s County",
                "Montgomery County",
                "Alexandria City",
              ].map((city) => (
                <li key={city} className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-700" /> {city}
                </li>
              ))}
            </ul>
          </div>
          {/* Simple coverage illustration */}
          <div className="relative h-64 w-full rounded-xl bg-blue-50 p-4 ring-1 ring-blue-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-40 w-40 rounded-full bg-blue-200/60" aria-hidden />
              <div className="absolute h-56 w-56 rounded-full border-2 border-blue-300/60" aria-hidden />
              <div className="absolute h-72 w-72 rounded-full border border-blue-300/40" aria-hidden />
              <div className="absolute text-center">
                <div className="text-sm text-slate-600">Coverage Radius</div>
                <div className="text-2xl font-bold text-blue-900">DC Metro</div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-blue-950">Frequently Asked Questions</h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {faqs.map((item, idx) => (
              <AccordionItem
                key={item.q}
                {...item}
                isOpen={open === idx}
                onToggle={() => setOpen(open === idx ? null : idx)}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div id="quote" className="mt-16 rounded-2xl bg-blue-950 p-8 text-white ring-1 ring-white/10">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold">Ready to Make Your Property Look New Again?</h3>
              <p className="mt-2 text-blue-100">
                Request a free quote. Same-day estimates. 100% satisfaction guaranteed.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-blue-100">
                <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1 ring-1 ring-white/10"><Clock className="h-4 w-4" /> 24-Hour Response</span>
                <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1 ring-1 ring-white/10"><ShieldCheck className="h-4 w-4" /> Licensed & Insured</span>
              </div>
            </div>
            {/* Simple inline form (front-end only) */}
            <form className="space-y-3">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input id="name" type="text" placeholder="Your name" className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-2 placeholder-blue-200/80 text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-sky-300" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <input type="tel" placeholder="Phone" className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-2 placeholder-blue-200/80 text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-sky-300" />
                <input type="email" placeholder="Email" className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-2 placeholder-blue-200/80 text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-sky-300" />
              </div>
              <input type="text" placeholder="Service address / city" className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-2 placeholder-blue-200/80 text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-sky-300" />
              <select className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-2 text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-sky-300">
                <option className="text-blue-900">Select service</option>
                <option className="text-blue-900">House Washing</option>
                <option className="text-blue-900">Driveway & Concrete Cleaning</option>
                <option className="text-blue-900">Roof Soft Washing</option>
                <option className="text-blue-900">Deck, Fence & Patio</option>
                <option className="text-blue-900">Commercial Power Washing</option>
                <option className="text-blue-900">Gutter Brightening + Rust/Stain Removal</option>
              </select>
              <button type="button" className="w-full rounded-md bg-gradient-to-r from-sky-200 to-white px-4 py-2 font-semibold text-blue-950 shadow-lg shadow-sky-200/30 transition hover:from-sky-300 hover:to-white">
                Request a Free Quote
              </button>
              <div className="text-xs text-blue-200">By submitting, you agree to our terms. We’ll never share your info.</div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-slate-200 pt-8 text-sm">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="text-xl font-bold text-blue-950">ProEdge Services</div>
              <p className="mt-2 text-slate-600">Premium exterior cleaning across DC, MD & Northern VA.</p>
              <div className="mt-3 flex items-center gap-3 text-slate-600">
                <a href="tel:+12025550123" className="inline-flex items-center gap-2 rounded-md bg-slate-100 px-3 py-1 font-medium text-blue-900">
                  <Phone className="h-4 w-4" /> (202) 555-0123
                </a>
              </div>
            </div>
            <div>
              <div className="font-semibold text-blue-950">Quick Links</div>
              <ul className="mt-2 space-y-1 text-slate-600">
                <li><a href="#quote" className="hover:text-blue-900">Booking</a></li>
                <li><a href="#" className="hover:text-blue-900">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-900">Terms</a></li>
                <li><a href="#" className="hover:text-blue-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-blue-950">Credentials</div>
              <ul className="mt-2 space-y-1 text-slate-600">
                <li>Licensed & Insured</li>
                <li>100% Satisfaction Guarantee</li>
                <li>Same-Week Appointments</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-slate-500">© {new Date().getFullYear()} ProEdge Services. All rights reserved.</div>
        </footer>
      </div>
    </section>
  );
};

export default SocialProofSection;
