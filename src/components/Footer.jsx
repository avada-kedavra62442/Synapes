import { ArrowUpRight, Heart, MapPin, MoveUpRight, Sparkles } from "lucide-react";

const footerLinks = [
  { label: "MEET THE TEAM", href: "#members" },
  { label: "OUR SCHOOLS", href: "#team" },
  { label: "HYPERDRIVE", href: "#hyperdrive" },
  { label: "OUR STORY", href: "#story" },
];

function GitHubMark({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.06 1.15a10.6 10.6 0 0 1 5.57 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.12 2.96.72.78 1.15 1.78 1.15 3.01 0 4.29-2.62 5.23-5.11 5.51.4.35.75 1.03.75 2.08v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function InstagramMark({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
    </svg>
  );
}

const socialLinks = [
  { label: "GitHub", href: "https://github.com/SynapseNRL", Icon: GitHubMark },
  { label: "Instagram", href: "https://www.instagram.com/synapse_creators/", Icon: InstagramMark },
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
                <Icon size={16} />
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
