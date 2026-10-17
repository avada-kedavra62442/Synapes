import { ArrowUpRight, Lightbulb } from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";

export default function ManifestoSection() {
  return (
    <section className="manifesto-section section-wrap" id="story">
      <div className="manifesto-aside">
        <SectionLabel number="05">OUR OPERATING SYSTEM</SectionLabel>
        <div className="manifesto-stamp"><Lightbulb size={24} /><span>STAY<br />CURIOUS.</span></div>
      </div>
      <div className="manifesto-content">
        <h2>WE DON'T WAIT<br />FOR <span>THE FUTURE.</span><br />WE BUILD IT.</h2>
        <p>A robot is the visible result; the real story is the thinking behind it. We want to be able to explain what we tried, why we chose it, what the tests showed and how we adapted. That mindset carries from the workbench to the engineering portfolio, the arena and the way we support one another as a team.</p>
        <a className="text-link" href="#top">BACK TO THE START <ArrowUpRight size={17} /></a>
      </div>
      <div className="manifesto-bottom"><span>CURIOUS BY NATURE.</span><span>ENGINEERS BY PRACTICE.</span><span>SYNAPSE BY CHOICE.</span></div>
    </section>
  );
}
