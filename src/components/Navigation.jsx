import { useState } from "react";
import { ArrowDownRight, Menu, X } from "lucide-react";

const links = [
  { label: "THE TEAM", href: "#team" },
  { label: "HYPERDRIVE", href: "#hyperdrive" },
  { label: "OUR STORY", href: "#story" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <a className="brand" href="#top" aria-label="SynApes home">
        <span className="brand-mark"><span>S</span><i /></span>
        <span className="brand-word">SYN<span>APES</span></span>
      </a>
      <nav className={open ? "nav-links nav-links-open" : "nav-links"} aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
        ))}
        <a className="nav-cta" href="#hyperdrive" onClick={() => setOpen(false)}>
          EXPLORE HYPERDRIVE <ArrowDownRight size={15} />
        </a>
      </nav>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}
