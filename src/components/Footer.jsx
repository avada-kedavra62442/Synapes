import { ArrowUpRight, Heart, MapPin, MoveUpRight, Sparkles } from "lucide-react";

const footerLinks = [
  { label: "MEET THE TEAM", href: "#members" },
  { label: "OUR SCHOOLS", href: "#team" },
  { label: "HYPERDRIVE", href: "#hyperdrive" },
  { label: "OUR STORY", href: "#story" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main section-wrap">
        <div className="footer-feature">
          <a className="brand footer-brand" href="#top" aria-label="SynApes home">
            <span className="brand-mark"><span>S</span><i /></span>
            <span className="brand-word">SYN<span>APES</span></span>
          </a>
          <p className="footer-tagline">Ten minds. One machine.<br /><strong>Infinite ways to solve.</strong></p>
          <span className="footer-event"><MapPin size={14} /> DWARKA, NEW DELHI <i /> NRL 2026</span>
        </div>
        <div className="footer-column">
          <span className="footer-heading">EXPLORE</span>
          {footerLinks.map((link) => <a key={link.href} href={link.href}>{link.label}<ArrowUpRight size={13} /></a>)}
        </div>
        <div className="footer-callout">
          <span className="footer-overline"><Sparkles size={14} /> BUILT FOR HYPERDRIVE</span>
          <h3>THE FUTURE<br />IS A TEAM SPORT.</h3>
          <a className="footer-top-link" href="#top">BACK TO TOP <MoveUpRight size={15} /></a>
        </div>
      </div>
      <div className="footer-bottom section-wrap">
        <span>© 2026 SYNAPES · BUILT BY THE TEAM</span>
        <span>NRL 2026 <i>·</i> DELHI REGIONALS</span>
        <span>MADE WITH CURIOSITY <Heart size={12} fill="currentColor" /></span>
      </div>
    </footer>
  );
}
