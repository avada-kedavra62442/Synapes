import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";

const schools = [
  { index: "TEAM BASE / 01", count: "08", location: "DWARKA · SECTOR 5", width: "80%", tone: "main", description: "Eight students from Sector 5 contributing ideas, testing approaches and learning through a shared robotics build." },
  { index: "TEAM BASE / 02", count: "02", location: "DWARKA · SECTOR 22", width: "20%", tone: "secondary", description: "Two students from Sector 22 bringing their perspective to the same team goal: learn together and build better." },
];

export default function SchoolsSection() {
  return (
    <section className="team-section section-wrap" id="team">
      <div className="section-heading">
        <div><SectionLabel number="01">THE PEOPLE BEHIND THE MACHINE</SectionLabel><h2>ONE TEAM.<br /><span>DIFFERENT MINDS.</span></h2></div>
        <p>SynApes brings together 10 students from CM Shri School, Dwarka Sector 5 and CM Shri School, Dwarka Sector 22. Our school communities are different; our project, preparation and responsibility are shared.</p>
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
      <div className="team-note"><Sparkles size={18} /><p><strong>Two school communities. One crew.</strong> We share ideas, divide responsibilities, and bring our work together as SynApes.</p></div>
    </section>
  );
}
