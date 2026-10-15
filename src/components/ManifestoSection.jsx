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
        <p>Every great run begins long before the starting signal. It begins with a sketch that might not work, a question nobody has answered yet, and a team willing to try again. That's the SynApes mindset.</p>
        <a className="text-link" href="#top">BACK TO THE START <ArrowUpRight size={17} /></a>
      </div>
      <div className="manifesto-bottom"><span>CURIOUS BY NATURE.</span><span>ENGINEERS BY PRACTICE.</span><span>SYNAPES BY CHOICE.</span></div>
    </section>
  );
}
