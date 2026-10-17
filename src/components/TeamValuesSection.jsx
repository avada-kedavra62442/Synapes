import { motion } from "framer-motion";
import { BrainCircuit, ChartNoAxesCombined, RefreshCw, Users, Wrench } from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";
import { engineeringPillars } from "../data/teamContent.js";

const icons = [BrainCircuit, Wrench, ChartNoAxesCombined, RefreshCw, Users];

export default function TeamValuesSection() {
  return (
    <section className="values-section section-wrap" aria-labelledby="values-title">
      <div className="section-heading">
        <div><SectionLabel number="03">THE NRL SKILLSET</SectionLabel><h2 id="values-title">FIVE SKILLS.<br /><span>ONE TEAM.</span></h2></div>
        <p>NRL highlights five connected skills: technical building, ownership of the design process, data-informed decisions, adaptability and teamwork. Synapse uses them as a practical guide for how we prepare, learn and work together.</p>
      </div>
      <div className="values-grid">
        {engineeringPillars.map((pillar, index) => {
          const Icon = icons[index];
          return <motion.article className="value-card" key={pillar.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ delay: index * 0.08 }}>
            <div className="value-card-top"><span>{pillar.number} / PRINCIPLE</span><Icon size={22} /></div>
            <p className="value-eyebrow">{pillar.eyebrow}</p>
            <h3>{pillar.title}</h3>
            <p className="value-description">{pillar.text}</p>
          </motion.article>;
        })}
      </div>
    </section>
  );
}
