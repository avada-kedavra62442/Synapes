import { ArrowUpRight, Lightbulb } from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";

export default function ManifestoSection() {
  return (
    <section className="manifesto-section section-wrap" id="story">
      <div className="manifesto-aside">
        <SectionLabel number="03">OUR OPERATING SYSTEM</SectionLabel>
        <div className="manifesto-stamp"><Lightbulb size={24} /><span>STAY<br />CURIOUS.</span></div>
      </div>
      <div className="manifesto-content">
        <h2>WE DON'T WAIT<br />FOR <span>THE FUTURE.</span><br />WE BUILD IT.</h2>
        <p>Our work is more than the final run. It is the questions we ask before building, the care we put into each decision, and the willingness to revisit an idea when a test proves it needs work. SynApes is built around curiosity, honest iteration and a team that learns together.</p>
        <a className="text-link" href="#top">BACK TO THE START <ArrowUpRight size={17} /></a>
      </div>
      <div className="manifesto-bottom"><span>CURIOUS BY NATURE.</span><span>ENGINEERS BY PRACTICE.</span><span>SYNAPES BY CHOICE.</span></div>
    </section>
  );
}
