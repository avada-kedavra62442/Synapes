import { ArrowUpRight, Heart, MapPin, MoveUpRight, Sparkles, Github, Instagram } from "lucide-react";

const footerLinks = [
  { label: "MEET THE TEAM", href: "#members" },
  { label: "OUR SCHOOLS", href: "#team" },
  { label: "HYPERDRIVE", href: "#hyperdrive" },
  { label: "OUR STORY", href: "#story" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/SynapseNRL", Icon: Github },
  { label: "Instagram", href: "https://www.instagram.com/synapse_creators/", Icon: Instagram },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main section-wrap">
        <div className="footer-feature">
          <a className="brand footer-brand" href="#top" aria-label="Synapse home">
            <img className="brand-logo footer-logo" src="/synapse-logo.svg" alt="" />
            <span className="brand-word">SYNAPSE</span>
          </a>
          <p className="footer-tagline">Ten students. Two schools.<br /><strong>One team learning by building.</strong></p>
          <div
            className="footer-social-links"
            aria-label="Follow Synapse"
            style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 20, flexWrap: "wrap" }}
          >
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                title={label}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 9,
                  minHeight: 42,
                  padding: "0 14px",
                  border: "1px solid rgba(176,195,215,.2)",
                  borderRadius: 12,
                  background: "linear-gradient(145deg, rgba(255,255,255,.075), rgba(255,255,255,.018))",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,.09)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  color: "#c7eaff",
                  font: "9px var(--mono)",
                  letterSpacing: ".6px",
                  transition: "border-color .2s, background .2s, transform .2s",
                }}
              >
                <Icon size={16} strokeWidth={1.8} />
                <span>{label}</span>
                <ArrowUpRight size={12} />
              </a>
            ))}
          </div>
          <span className="footer-event"><MapPin size={14} /> DWARKA, NEW DELHI <i /> NRL 2026</span>
        </div>
        <div className="footer-column">
          <span className="footer-heading">EXPLORE SYNAPSE</span>
          {footerLinks.map((link) => <a key={link.href} href={link.href}>{link.label}<ArrowUpRight size={13} /></a>)}
        </div>
        <div className="footer-callout">
          <span className="footer-overline"><Sparkles size={14} /> BUILT FOR HYPERDRIVE</span>
          <h3>THE FUTURE<br />IS A TEAM SPORT.</h3>
          <a className="footer-top-link" href="#top">BACK TO TOP <MoveUpRight size={15} /></a>
        </div>
      </div>
      <div className="footer-bottom section-wrap">
        <span>© 2026 SYNAPSE · STUDENT ROBOTICS TEAM</span>
        <span>NRL 2026 <i>·</i> DELHI REGIONALS</span>
        <span>THINK · BUILD · TEST · LEARN <Heart size={12} fill="currentColor" /></span>
      </div>
    </footer>
  );
}
