import { motion } from "framer-motion";
import { teamStats } from "../data/teamContent.js";

export default function TeamStats() {
  return (
    <section className="stats-band" aria-label="Synapse at a glance">
      {teamStats.map((item, index) => (
        <motion.div
          className="stat-item"
          key={item.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: index * 0.07 }}
        >
          <div className="stat-number">{item.number}<span>{item.suffix}</span></div>
          <div className="stat-label">{item.label}</div>
          <p>{item.note}</p>
        </motion.div>
      ))}
    </section>
  );
}
