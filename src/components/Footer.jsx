import { ArrowUpRight, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top section-wrap">
        <a className="brand footer-brand" href="#top"><span className="brand-mark"><span>S</span><i /></span><span className="brand-word">SYN<span>APES</span></span></a>
        <p>Ten minds. One machine.<br /><strong>Infinite ways to solve.</strong></p>
        <span className="footer-github"><Sparkles size={17} /> BUILT FOR HYPERDRIVE <ArrowUpRight size={16} /></span>
      </div>
      <div className="footer-bottom section-wrap"><span>© 2026 SYNAPES · BUILT BY THE TEAM</span><span>NRL 2026 <i>·</i> DELHI REGIONALS</span><span>MADE WITH CURIOSITY <Heart size={12} fill="currentColor" /></span></div>
    </footer>
  );
}
