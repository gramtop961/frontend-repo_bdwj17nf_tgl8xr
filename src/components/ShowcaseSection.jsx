import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

const BeforeAfterSlider = () => {
  const [value, setValue] = useState(50);
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
      <div className="relative h-72 sm:h-96">
        <img
          src="https://images.unsplash.com/photo-1565514158740-064f34bd6c99?q=80&w=2069&auto=format&fit=crop"
          alt="Before pressure washing — discolored, stained concrete driveway"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden transition-[width] duration-200 ease-out"
          style={{ width: `${value}%` }}
        >
          <img
            src="https://images.unsplash.com/photo-1602101022020-386a2a06b46c?q=80&w=2070&auto=format&fit=crop"
            alt="After pressure washing — bright, restored concrete driveway"
            className="h-full w-full object-cover"
          />
        </div>
        {/* Divider */}
        <div
          className="absolute top-0 h-full w-0.5 bg-white/80 transition-[left] duration-200 ease-out"
          style={{ left: `${value}%` }}
        />
        {/* Slider */}
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          aria-label="Before and after comparison slider"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 appearance-none rounded-full bg-white/70 px-2 py-1 backdrop-blur"
          style={{ width: "60%" }}
        />
      </div>
      <div className="flex items-center justify-between border-t border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
        <span>Real Results. Real Difference.</span>
        <span className="font-medium text-blue-900">Drag to Compare</span>
      </div>
    </div>
  );
};

const reasons = [
  "Licensed & Fully Insured",
  "Eco-Safe Cleaning Solutions",
  "Same-Week Appointments",
  "Veteran-Owned / Locally Operated",
  "No Hidden Fees — Upfront Pricing",
  "Professional Grade Equipment",
];

const ShowcaseSection = () => {
  return (
    <section className="bg-slate-50 py-16" aria-labelledby="showcase">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <header className="mb-4">
              <h2 id="showcase" className="text-3xl font-bold tracking-tight text-blue-950 md:text-4xl">
                Before & After: The ProEdge Difference
              </h2>
              <p className="mt-2 text-slate-600">
                High-contrast transformations that instantly elevate curb appeal and property value.
              </p>
            </header>
            <BeforeAfterSlider />
          </div>
          <div>
            <header className="mb-4">
              <h3 className="text-2xl font-semibold text-blue-950">Why Choose ProEdge Services</h3>
              <p className="mt-2 text-slate-600">
                Trusted by homeowners and businesses across the DC, MD & Northern VA area for reliable, long-lasting results.
              </p>
            </header>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3 rounded-lg bg-white p-4 ring-1 ring-slate-200 transition hover:shadow-md hover:ring-sky-200/60">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-sky-600" />
                  <span className="text-slate-700">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
