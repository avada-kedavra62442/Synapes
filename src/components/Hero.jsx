import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Cpu, Gauge, Radio } from "lucide-react";
import RobotIllustration from "./RobotIllustration.jsx";

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
          Ten students from two CM Shri Schools in Dwarka, preparing for <strong>NRL 2026 HYPERDRIVE</strong>. We’re learning across mechanics, electronics and code—while building, documenting, testing and adapting as one team.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .28 }}>
          <a className="button button-primary" href="#team">MEET THE TEAM <ArrowDown size={16} /></a>
          <a className="button button-quiet" href="#hyperdrive">THE CHALLENGE <ArrowUpRight size={16} /></a>
        </motion.div>
        <div className="hero-micro">
          <span><Cpu size={15} /> BUILD · DOCUMENT · IMPROVE</span>
          <span><Radio size={15} /> HYPERDRIVE / 2026</span>
        </div>
      </div>
      <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94, x: 18 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: .8, delay: .15 }}>
        <div className="visual-topline"><span>SYNAPES / ROBOTICS TEAM</span><span>SN-26 / HD</span></div>
        <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
        <div className="visual-cross cross-a" /><div className="visual-cross cross-b" />
        <RobotIllustration />
        <div className="visual-chip"><span className="chip-icon"><Gauge size={17} /></span><span><b>HYPERDRIVE</b><small>ENGINEERING THE FUTURE</small></span></div>
        <div className="visual-index">01 <span>/</span> 04</div>
      </motion.div>
      <a className="scroll-cue" href="#team"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
    </section>
  );
}
