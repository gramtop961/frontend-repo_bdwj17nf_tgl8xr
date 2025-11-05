import { Phone, ShieldCheck, Star, BadgeCheck, Sparkles, Droplets } from "lucide-react";
import Spline from "@splinetool/react-spline";
import { useEffect, useRef, useState } from "react";

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const HeroSection = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const [waterfallOpacity, setWaterfallOpacity] = useState(0);

  useEffect(() => {
    // Parallax on scroll (subtle) + waterfall overlay intensity
    const onScroll = () => {
      const y = window.scrollY;
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${y * 0.12}px)`;
      }
      const t = clamp(y / (window.innerHeight * 0.8), 0, 1);
      setWaterfallOpacity(t * 0.55); // peak at ~55%
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Animate in headline and CTAs with a clean/spray style reveal
    const el = heroRef.current;
    if (!el) return;
    const items = el.querySelectorAll("[data-reveal]");
    items.forEach((node, i) => {
      node.style.animationDelay = `${i * 120}ms`;
      node.classList.add("animate-reveal-clean");
    });
  }, []);

  const handleQuoteClick = () => {
    const el = document.getElementById("quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Water ripple + haptic feedback on buttons
  const addRipple = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const circle = document.createElement("span");
    const d = Math.max(rect.width, rect.height);
    circle.style.width = circle.style.height = `${d}px`;
    circle.style.left = `${e.clientX - rect.left - d / 2}px`;
    circle.style.top = `${e.clientY - rect.top - d / 2}px`;
    circle.className = "ripple";
    const ripple = target.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();
    target.appendChild(circle);
    // Haptic
    if ("vibrate" in navigator) {
      try { navigator.vibrate([20, 30]); } catch {}
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50 to-sky-100 text-blue-950">
      {/* Spline animation background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>

      {/* White/blue gradient veil to keep brand theme over Spline */}
      <div
        ref={bgRef}
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/90 via-sky-50/85 to-sky-100/90"
        aria-hidden
      />

      {/* Waterfall overlay with blend for neuro-design association */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: waterfallOpacity,
          mixBlendMode: "overlay",
          background: "radial-gradient(1200px 500px at 50% -10%, rgba(147,197,253,.6), transparent 60%), linear-gradient(180deg, rgba(59,130,246,.18), transparent)"
        }}
        aria-hidden
      />

      {/* Light blobs for depth */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute left-10 top-20 h-40 w-40 rotate-12 rounded-full bg-sky-200/30 blur-2xl" aria-hidden />

      {/* Subtle droplet particles */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40" aria-hidden>
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="absolute bottom-0 h-1.5 w-1.5 rounded-full bg-sky-400/70"
            style={{
              left: `${(i * 100) / 12}%`,
              animation: `droplet ${4 + (i % 5) * 0.4}s ease-in infinite`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes droplet { 0% { transform: translateY(0); opacity: .0 } 10% { opacity: .9 } 100% { transform: translateY(-140px); opacity: 0 } }
        @keyframes reveal-clean { 0% { clip-path: inset(0 100% 0 0); filter: blur(6px); opacity: 0 } 60% { filter: blur(0); } 100% { clip-path: inset(0 0 0 0); opacity: 1 } }
        .animate-reveal-clean { animation: reveal-clean .9s ease forwards }
        .btn-sheen::after { content: ""; position: absolute; inset: 0; transform: translateX(-120%) rotate(6deg); background: linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent); }
        .btn-sheen:hover::after { animation: sheen 1.2s ease; }
        @keyframes sheen { 0% { transform: translateX(-120%) rotate(6deg) } 60%,100% { transform: translateX(220%) rotate(6deg) } }
        .ripple { position: absolute; border-radius: 50%; transform: scale(0); background: rgba(56, 189, 248, .35); animation: ripple .6s linear; pointer-events: none; }
        @keyframes ripple { to { transform: scale(2.5); opacity: 0 } }
      `}</style>

      <div ref={heroRef} className="relative mx-auto max-w-7xl px-6 pt-28 pb-12 sm:pt-36">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-1 text-sm text-blue-900 ring-1 ring-sky-200 backdrop-blur" data-reveal>
            <Sparkles className="h-4 w-4 text-sky-600" />
            <span>Serving DC • Maryland • Northern Virginia</span>
          </div>
          <h1 data-reveal className="font-extrabold leading-tight tracking-tight text-blue-950 drop-shadow-sm md:text-6xl text-4xl">
            We Don’t Just Clean — We Restore Surfaces Back to Life.
          </h1>
          <p data-reveal className="mt-4 text-lg text-slate-700 md:text-xl">
            Serving Homes & Businesses Across the DMV with precision power cleaning. Fully insured. Guaranteed results.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={(e) => { addRipple(e); handleQuoteClick(); }}
              className="relative overflow-hidden rounded-md bg-gradient-to-r from-sky-200 to-white px-6 py-3 font-semibold text-blue-950 shadow-[0_8px_30px_rgba(2,132,199,0.25)] transition hover:from-sky-300 hover:to-white focus:outline-none focus:ring-2 focus:ring-sky-300/70 active:scale-[.98] btn-sheen"
              aria-label="Get a Free Quote"
              data-reveal
            >
              <span className="relative z-10">Get a Free Quote</span>
            </button>
            <a
              href="tel:+12025550123"
              onClick={addRipple}
              className="relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-white/70 px-6 py-3 font-semibold text-blue-950 ring-1 ring-sky-200 backdrop-blur transition hover:bg-white shadow-[0_8px_30px_rgba(2,132,199,0.15)]"
              aria-label="Call Now"
              data-reveal
            >
              <Phone className="h-5 w-5" /> Call Now
            </a>
          </div>

          {/* Trust badges (icons remain green) */}
          <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-blue-900 sm:flex sm:flex-wrap sm:gap-4">
            <div className="inline-flex items-center gap-2 rounded-md bg-white/70 px-3 py-2 ring-1 ring-sky-200 backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-lime-500" /> Licensed & Insured
            </div>
            <div className="inline-flex items-center gap-2 rounded-md bg-white/70 px-3 py-2 ring-1 ring-sky-200 backdrop-blur">
              <Star className="h-4 w-4 text-lime-500" /> 5-Star Rated
            </div>
            <div className="inline-flex items-center gap-2 rounded-md bg-white/70 px-3 py-2 ring-1 ring-sky-200 backdrop-blur">
              <BadgeCheck className="h-4 w-4 text-lime-500" /> 100% Satisfaction Guarantee
            </div>
          </div>
        </div>

        {/* Quick Stats Bar with glassmorphism */}
        <div className="mt-12 rounded-xl bg-white/60 p-4 ring-1 ring-sky-200 backdrop-blur">
          <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
            <div>
              <div className="text-3xl font-extrabold text-blue-950">1,200+</div>
              <div className="mt-1 text-slate-700">Homes Restored</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-blue-950">450+</div>
              <div className="mt-1 text-slate-700">5-Star Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-blue-950">10</div>
              <div className="mt-1 text-slate-700">Years Serving DC</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-blue-950">24 hr</div>
              <div className="mt-1 text-slate-700">Response Time</div>
            </div>
          </div>
        </div>

        {/* Urgency banner */}
        <div className="mt-6 flex items-center justify-between rounded-lg bg-gradient-to-r from-amber-100 to-yellow-50 px-4 py-3 text-amber-900 ring-1 ring-amber-300/50">
          <div className="flex items-center gap-2">
            <Droplets className="h-5 w-5" />
            <span className="font-medium">Only 4 weekend slots left</span>
          </div>
          <span className="text-sm">Best time to clean before pollen season</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
