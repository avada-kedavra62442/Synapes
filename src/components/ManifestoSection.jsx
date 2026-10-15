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
        <p>NRL is about more than a robot on the arena. The journey includes design, testing, match strategy and explaining the engineering behind the machine. For SynApes, the goal is to stay curious, learn from evidence, document decisions clearly and keep improving together—whether a test confirms an idea or sends us back to the drawing board.</p>
        <a className="text-link" href="#top">BACK TO THE START <ArrowUpRight size={17} /></a>
      </div>
      <div className="manifesto-bottom"><span>CURIOUS BY NATURE.</span><span>ENGINEERS BY PRACTICE.</span><span>SYNAPES BY CHOICE.</span></div>
    </section>
  );
}
