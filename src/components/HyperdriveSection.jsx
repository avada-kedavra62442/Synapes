import { motion } from "framer-motion";
import { ArrowUpRight, Boxes, Cog, FileText, Flag, ShieldCheck } from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";
import { hyperdriveFocus } from "../data/teamContent.js";

const icons = { mechanical: Cog, portfolio: FileText, strategy: Flag, iteration: Boxes };

export default function HyperdriveSection() {
  return (
    <section className="hyperdrive-section" id="hyperdrive">
      <div className="hyperdrive-backdrop" aria-hidden="true"><span>H</span></div>
      <div className="section-wrap hyperdrive-inner">
        <div className="section-heading section-heading-light">
          <div><SectionLabel number="04">THE 2026 GAME CHALLENGE</SectionLabel><h2>WELCOME TO<br /><span>HYPERDRIVE.</span></h2></div>
          <div className="challenge-copy"><p>The National Robotics League (NRL) combines robot matches with skill challenges, team presentations and an engineering journey that starts long before competition day. HYPERDRIVE is the 2026 game challenge, built around the idea: “Engineering the future, one mission at a time.” SynApes is preparing to approach it through thoughtful design, clear documentation, match strategy and learning from every test.</p><span className="challenge-mark">NRL <b>2026</b> <i>·</i> DELHI REGIONALS</span></div>
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
        <div className="challenge-foot"><span><ShieldCheck size={17} /> SAFETY. STRATEGY. TEAMWORK.</span><span>ENGINEER THE NEXT ATTEMPT <ArrowUpRight size={15} /></span></div>
      </div>
    </section>
  );
}
