import { motion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, Boxes, Code2, Cog, Crosshair, GraduationCap, Lightbulb, ShieldCheck, Sparkles, Wrench } from "lucide-react";

const stats = [
  { number: "10", label: "STUDENTS", note: "One united crew" },
  { number: "02", label: "SCHOOLS", note: "One shared mission" },
  { number: "08", label: "DWARKA · S-5", note: "CM Shri School" },
  { number: "02", label: "DWARKA · S-22", note: "CM Shri School" },
];

const pillars = [
  { icon: BrainCircuit, number: "01", title: "THINK AS ONE", text: "Good engineering starts with better questions. We share ideas, challenge assumptions and solve problems together." },
  { icon: Wrench, number: "02", title: "BUILD WITH INTENT", text: "Every mechanism, every line of code and every test has a purpose. Progress is made one iteration at a time." },
  { icon: Crosshair, number: "03", title: "DRIVE THE DETAIL", text: "Precision matters. We learn from the small failures, tune the details and keep moving towards a stronger run." },
];

const focus = [
  { icon: Cog, title: "MECHANICAL DESIGN", tag: "HARDWARE", text: "Turning concepts into a compact, purposeful machine." },
  { icon: Code2, title: "CONTROL & LOGIC", tag: "SOFTWARE", text: "Making decisions repeatable through clear logic and testing." },
  { icon: Boxes, title: "ITERATION", tag: "TESTING", text: "Build, test, learn, refine — then do it again." },
];

function SectionLabel({ children, number }) {
  return <div className="section-label"><span>{number}</span><i />{children}</div>;
}

export function TeamSections() {
  return (
    <>
      <section className="stats-band" aria-label="Team at a glance">
        {stats.map((item, i) => <motion.div className="stat-item" key={item.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .5 }} transition={{ delay: i * .07 }}>
          <div className="stat-number">{item.number}<span>{i < 2 ? "+" : ""}</span></div><div className="stat-label">{item.label}</div><p>{item.note}</p>
        </motion.div>)}
      </section>

      <section className="team-section section-wrap" id="team">
        <div className="section-heading">
          <div><SectionLabel number="01">THE PEOPLE BEHIND THE MACHINE</SectionLabel><h2>ONE TEAM.<br /><span>DIFFERENT MINDS.</span></h2></div>
          <p>SynApes brings together students from two CM Shri Schools in Dwarka. Different perspectives, shared curiosity, and a common goal: make the machine — and the team — better every day.</p>
        </div>
        <div className="school-grid">
          <motion.article className="school-card school-card-main" whileHover={{ y: -5 }} transition={{ duration: .2 }}>
            <div className="school-card-top"><span className="school-index">TEAM BASE / 01</span><span className="school-icon"><GraduationCap size={22} /></span></div>
            <div className="school-count">08<span>/10</span></div>
            <h3>CM SHRI SCHOOL</h3><p className="school-location">DWARKA · SECTOR 5</p>
            <div className="school-bar"><span style={{ width: "80%" }} /></div>
            <p className="school-caption">Eight teammates bringing ideas, energy and hands-on problem solving to the build.</p>
          </motion.article>
          <motion.article className="school-card school-card-secondary" whileHover={{ y: -5 }} transition={{ duration: .2 }}>
            <div className="school-card-top"><span className="school-index">TEAM BASE / 02</span><span className="school-icon"><GraduationCap size={22} /></span></div>
            <div className="school-count">02<span>/10</span></div>
            <h3>CM SHRI SCHOOL</h3><p className="school-location">DWARKA · SECTOR 22</p>
            <div className="school-bar"><span style={{ width: "20%" }} /></div>
            <p className="school-caption">Two teammates adding another perspective to one collaborative engineering effort.</p>
          </motion.article>
        </div>
        <div className="team-note"><Sparkles size={18} /><p><strong>Not just ten students.</strong> Ten perspectives learning to move in the same direction.</p></div>
      </section>

      <section className="hyperdrive-section" id="hyperdrive">
        <div className="hyperdrive-backdrop" aria-hidden="true"><span>H</span></div>
        <div className="section-wrap hyperdrive-inner">
          <div className="section-heading section-heading-light">
            <div><SectionLabel number="02">THE CHALLENGE</SectionLabel><h2>WELCOME TO<br /><span>HYPERDRIVE.</span></h2></div>
            <div className="challenge-copy"><p>Robotics is where imagination meets physics. HyperDrive pushes teams to think strategically, engineer deliberately and perform under pressure.</p><span className="challenge-mark">NRL <b>2026</b> <i>·</i> DELHI REGIONALS</span></div>
          </div>
          <div className="focus-grid">
            {focus.map((item, i) => { const Icon = item.icon; return <motion.article className="focus-card" key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ delay: i * .1 }}>
              <div className="focus-top"><span>{item.tag}</span><Icon size={21} /></div><div className="focus-number">0{i + 1}</div><h3>{item.title}</h3><p>{item.text}</p><div className="focus-rule" />
            </motion.article>; })}
          </div>
          <div className="challenge-foot"><span><ShieldCheck size={17} /> SAFETY. STRATEGY. TEAMWORK.</span><span>THE WORK IS THE ADVANTAGE <ArrowUpRight size={15} /></span></div>
        </div>
      </section>

      <section className="manifesto-section section-wrap" id="story">
        <div className="manifesto-aside"><SectionLabel number="03">OUR OPERATING SYSTEM</SectionLabel><div className="manifesto-stamp"><Lightbulb size={24} /><span>STAY<br />CURIOUS.</span></div></div>
        <div className="manifesto-content">
          <h2>WE DON'T WAIT<br />FOR <span>THE FUTURE.</span><br />WE BUILD IT.</h2>
          <p>Every great run begins long before the starting signal. It begins with a sketch that might not work, a question nobody has answered yet, and a team willing to try again. That's the SynApes mindset.</p>
          <a className="text-link" href="https://github.com/avada-kedavra62442/Synapes" target="_blank" rel="noreferrer">FOLLOW OUR JOURNEY <ArrowUpRight size={17} /></a>
        </div>
        <div className="manifesto-bottom"><span>CURIOUS BY NATURE.</span><span>ENGINEERS BY PRACTICE.</span><span>SYNAPES BY CHOICE.</span></div>
      </section>
    </>
  );
}
