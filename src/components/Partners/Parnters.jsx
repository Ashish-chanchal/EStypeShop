import React from "react";
import p1 from "../../assets/brand-svg/partner-1.svg";
import p2 from "../../assets/brand-svg/partner-2.svg";
import p3 from "../../assets/brand-svg/partner-3.svg";
import p4 from "../../assets/brand-svg/partner-4.svg";
import p5 from "../../assets/brand-svg/partner-5.svg";
import p6 from "../../assets/brand-svg/partner-6.svg";

const logos = [p1, p2, p3, p4, p5, p6];

const Parnters = () => (
  <section className="border-y border-gray-100 py-10 dark:border-white/5">
    <div className="container">
      <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Trusted by leading brands</p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-16 hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((src, i) => (
            <img key={i} src={src} alt="Partner brand" className="h-8 w-auto opacity-40 transition hover:opacity-80 dark:invert" />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Parnters;
