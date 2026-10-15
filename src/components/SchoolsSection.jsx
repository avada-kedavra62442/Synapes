import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";

const schools = [
  { index: "TEAM BASE / 01", count: "08", location: "DWARKA · SECTOR 5", width: "80%", tone: "main", description: "Eight teammates bringing ideas, energy and hands-on problem solving to the build." },
  { index: "TEAM BASE / 02", count: "02", location: "DWARKA · SECTOR 22", width: "20%", tone: "secondary", description: "Two teammates adding another perspective to one collaborative engineering effort." },
];

export default function SchoolsSection() {
  return (
    <section className="team-section section-wrap" id="team">
      <div className="section-heading">
        <div><SectionLabel number="01">THE PEOPLE BEHIND THE MACHINE</SectionLabel><h2>ONE TEAM.<br /><span>DIFFERENT MINDS.</span></h2></div>
        <p>SynApes brings together students from two CM Shri Schools in Dwarka. Different perspectives, shared curiosity, and a common goal: make the machine — and the team — better every day.</p>
      </div>
      <div className="school-grid">
        {schools.map((school) => (
          <motion.article className={`school-card school-card-${school.tone}`} key={school.index} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
            <div className="school-card-top"><span className="school-index">{school.index}</span><span className="school-icon"><GraduationCap size={22} /></span></div>
            <div className="school-count">{school.count}<span>/10</span></div>
            <h3>CM SHRI SCHOOL</h3><p className="school-location">{school.location}</p>
            <div className="school-bar"><span style={{ width: school.width }} /></div>
            <p className="school-caption">{school.description}</p>
          </motion.article>
        ))}
      </div>
      <div className="team-note"><Sparkles size={18} /><p><strong>Not just ten students.</strong> Ten perspectives learning to move in the same direction.</p></div>
    </section>
  );
}
