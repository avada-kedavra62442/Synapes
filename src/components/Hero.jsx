import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Cpu, Gauge, Radio } from "lucide-react";

function RobotIllustration() {
  return (
    <svg className="robot-art" viewBox="0 0 620 520" role="img" aria-label="Stylized competition robot illustration">
      <defs>
        <linearGradient id="shell" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#e8edf2"/><stop offset=".42" stopColor="#758596"/><stop offset="1" stopColor="#2b3848"/></linearGradient>
        <linearGradient id="orange" x1="0" x2="1"><stop stopColor="#ffad72"/><stop offset="1" stopColor="#f05e32"/></linearGradient>
        <linearGradient id="glass" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#173b50"/><stop offset="1" stopColor="#08121f"/></linearGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="8"/></filter>
      </defs>
      <ellipse cx="315" cy="439" rx="205" ry="28" fill="#f36c3d" opacity=".18" filter="url(#glow)"/>
      <ellipse cx="315" cy="442" rx="190" ry="19" fill="#02060c" opacity=".8"/>
      <g stroke="#314457" strokeWidth="2" opacity=".8">
        <path d="M42 118h104M93 92v52M472 105h94M518 80v52M70 340h66M104 316v49M493 324h74M530 303v42" fill="none"/>
        <circle cx="146" cy="118" r="4" fill="#f36c3d" stroke="none"/><circle cx="472" cy="105" r="4" fill="#49d6f3" stroke="none"/>
      </g>
      <g transform="translate(82 48)">
        <path d="M130 270 86 328 96 365 149 366 187 314" fill="#273444" stroke="#65788c" strokeWidth="4"/>
        <path d="m340 270 45 58-10 37h-53l-38-51" fill="#273444" stroke="#65788c" strokeWidth="4"/>
        <path d="M150 145 190 98h112l48 47 13 119-49 51H180l-44-52z" fill="url(#shell)" stroke="#aab7c5" strokeWidth="3"/>
        <path d="m190 98 14-34h86l12 34" fill="#465669" stroke="#8c9aa8" strokeWidth="3"/>
        <path d="m205 67 9-23h63l10 23" fill="#f36c3d"/>
        <path d="M162 155 198 122h102l38 33-8 55H169z" fill="url(#glass)" stroke="#152b3c" strokeWidth="3"/>
        <path d="m185 173 25-21h72l27 21-4 18H188z" fill="#102332" stroke="#f36c3d" strokeWidth="2"/>
        <path d="M205 171h73" stroke="#52d9f5" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="219" cy="171" r="4" fill="#fff"/><circle cx="264" cy="171" r="4" fill="#fff"/>
        <path d="M152 225h189l-7 41-40 39H190l-37-38z" fill="#354658" stroke="#8192a3" strokeWidth="3"/>
        <path d="M177 236h140l-5 24H183z" fill="url(#orange)"/>
        <path d="M205 280h83l-12 21h-59z" fill="#182534"/>
        <path d="m134 177-30 25 6 53 34 13 18-23-8-46z" fill="#596b7e" stroke="#a5b1bd" strokeWidth="3"/>
        <path d="m350 177 30 25-6 53-34 13-18-23 8-46z" fill="#596b7e" stroke="#a5b1bd" strokeWidth="3"/>
        <path d="M95 344h57l9 29h-76zM329 344h57l10 29h-77z" fill="#101923" stroke="#728397" strokeWidth="3"/>
        <circle cx="118" cy="360" r="7" fill="#f36c3d"/><circle cx="353" cy="360" r="7" fill="#f36c3d"/>
        <path d="M184 315h120l22 32H164z" fill="#192533" stroke="#6d8093" strokeWidth="3"/>
        <path d="M197 327h94" stroke="#49d6f3" strokeWidth="3" strokeLinecap="round"/>
        <path d="M225 48V17h20v31" fill="#344456" stroke="#8294a7" strokeWidth="3"/>
        <circle cx="235" cy="14" r="7" fill="#49d6f3"/>
      </g>
      <g fill="#e9eff5" fontFamily="Space Mono, monospace" fontSize="10" opacity=".8"><text x="35" y="236">SYS. 01 / ONLINE</text><text x="438" y="252">HD / 2026</text><text x="438" y="267">DRIVE UNIT</text></g>
      <g stroke="#f36c3d" strokeWidth="1.5" fill="none" opacity=".65"><path d="M35 248h72l26 24"/><path d="M448 277h-58l-19 20"/><path d="M438 88h-48l-18 20"/></g>
      <circle cx="133" cy="272" r="3" fill="#f36c3d"/><circle cx="371" cy="297" r="3" fill="#f36c3d"/><circle cx="372" cy="108" r="3" fill="#49d6f3"/>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero section-wrap" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-copy">
        <motion.div className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}>
          <span className="live-dot" /> NRL 2026 <span className="eyebrow-divider">/</span> DELHI REGIONALS
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .08 }}>
          BUILT TO<br /><span>THINK.</span> READY<br />TO <em>DRIVE.</em>
        </motion.h1>
        <motion.p className="hero-lede" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .18 }}>
          Ten students. Two schools. One team that turns ideas into motion. Meet <strong>SynApes</strong> — ready to take on HyperDrive.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .28 }}>
          <a className="button button-primary" href="#team">MEET THE TEAM <ArrowDown size={16} /></a>
          <a className="button button-quiet" href="https://github.com/avada-kedavra62442/Synapes" target="_blank" rel="noreferrer">OUR BUILD LOG <ArrowUpRight size={16} /></a>
        </motion.div>
        <div className="hero-micro">
          <span><Cpu size={15} /> ENGINEERED TOGETHER</span>
          <span><Radio size={15} /> HYPERDRIVE / 2026</span>
        </div>
      </div>
      <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94, x: 18 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: .8, delay: .15 }}>
        <div className="visual-topline"><span>FIG. 001 — CONCEPT UNIT</span><span>SN-26 / HD</span></div>
        <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
        <div className="visual-cross cross-a" /><div className="visual-cross cross-b" />
        <RobotIllustration />
        <div className="visual-chip"><span className="chip-icon"><Gauge size={17} /></span><span><b>HYPERDRIVE</b><small>DESIGN · BUILD · COMPETE</small></span></div>
        <div className="visual-index">01 <span>/</span> 04</div>
      </motion.div>
      <a className="scroll-cue" href="#team"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
    </section>
  );
}
