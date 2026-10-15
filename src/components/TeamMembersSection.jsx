import { motion } from "framer-motion";
import { ArrowUpRight, Camera, GraduationCap, UserRound } from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";
import { teamMembers } from "../data/teamMembers.js";

export default function TeamMembersSection() {
  return (
    <section className="members-section section-wrap" id="members">
      <div className="section-heading members-heading">
        <div>
          <SectionLabel number="04">THE PEOPLE BEHIND SYNAPES</SectionLabel>
          <h2>MEET THE<br /><span>TEAM.</span></h2>
        </div>
        <p>Ten students. Ten individual stories. One shared build. Get to know the people bringing SynApes to life — in the workshop, in the code, and on competition day.</p>
      </div>
      <div className="members-grid">
        {teamMembers.map((member, index) => (
          <motion.article className="member-card" key={member.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.35, delay: (index % 5) * 0.055 }}>
            <div className="member-photo">
              {member.photo ? <img src={member.photo} alt={member.name} loading="lazy" /> : <div className="member-photo-placeholder"><span className="member-photo-number">{member.id}</span><UserRound size={48} strokeWidth={1.1} /><span className="member-photo-caption"><Camera size={12} /> PHOTO TO BE ADDED</span></div>}
              <span className="member-index">SYN / {member.id}</span>
            </div>
            <div className="member-details">
              <div className="member-meta"><span>{member.role}</span><span>{member.className}</span></div>
              <h3>{member.name}</h3>
              <p className="member-school"><GraduationCap size={14} /> {member.school}</p>
              <p className="member-about">{member.about}</p>
              <div className="member-card-bottom"><span>TEAM PROFILE</span><ArrowUpRight size={15} /></div>
            </div>
          </motion.article>
        ))}
      </div>
      <p className="members-note">The profiles are ready for the team's real names, class details, introductions, and photographs.</p>
    </section>
  );
}
