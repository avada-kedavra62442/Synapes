import { motion } from "framer-motion";
import { ArrowUpRight, Boxes, Code2, Cog, ShieldCheck } from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";
import { hyperdriveFocus } from "../data/teamContent.js";

const icons = { mechanical: Cog, logic: Code2, iteration: Boxes };

export default function HyperdriveSection() {
  return (
    <section className="hyperdrive-section" id="hyperdrive">
      <div className="hyperdrive-backdrop" aria-hidden="true"><span>H</span></div>
      <div className="section-wrap hyperdrive-inner">
        <div className="section-heading section-heading-light">
          <div><SectionLabel number="02">THE CHALLENGE</SectionLabel><h2>WELCOME TO<br /><span>HYPERDRIVE.</span></h2></div>
          <div className="challenge-copy"><p>HyperDrive is our robotics challenge for NRL 2026. For SynApes, preparation means breaking a big challenge into smaller engineering decisions: understand the task, design thoughtfully, test what we build, and improve from what the results tell us.</p><span className="challenge-mark">NRL <b>2026</b> <i>·</i> DELHI REGIONALS</span></div>
        </div>
        <div className="focus-grid">
          {hyperdriveFocus.map((item, index) => {
            const Icon = icons[item.iconName];
            return <motion.article className="focus-card" key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.1 }}>
              <div className="focus-top"><span>{item.tag}</span><Icon size={21} /></div>
              <div className="focus-number">0{index + 1}</div><h3>{item.title}</h3><p>{item.text}</p><div className="focus-rule" />
            </motion.article>;
          })}
        </div>
        <div className="challenge-foot"><span><ShieldCheck size={17} /> SAFETY. STRATEGY. TEAMWORK.</span><span>THE WORK IS THE ADVANTAGE <ArrowUpRight size={15} /></span></div>
      </div>
    </section>
  );
}
