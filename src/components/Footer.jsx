import { ArrowUpRight, Github, Heart, MoveUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top section-wrap">
        <a className="brand footer-brand" href="#top"><span className="brand-mark"><span>S</span><i /></span><span className="brand-word">SYN<span>APES</span></span></a>
        <p>Ten minds. One machine.<br /><strong>Infinite ways to solve.</strong></p>
        <a className="footer-github" href="https://github.com/avada-kedavra62442/Synapes" target="_blank" rel="noreferrer"><Github size={17} /> VIEW THE REPOSITORY <ArrowUpRight size={16} /></a>
      </div>
      <div className="footer-bottom section-wrap"><span>© 2026 SYNAPES · BUILT BY THE TEAM</span><span>NRL 2026 <i>·</i> DELHI REGIONALS</span><span>MADE WITH CURIOSITY <Heart size={12} fill="currentColor" /></span></div>
    </footer>
  );
}
