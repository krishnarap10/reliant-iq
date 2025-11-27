import "./Navbar.scss";

const links = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Architecture", href: "#architecture" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="page-shell nav-inner">
        <div className="brand">
          <div className="brand-mark" aria-hidden />
          <span className="brand-name">ReliantIQ</span>
        </div>
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-cta">
          <a className="btn secondary" href="#resources">
            Resources
          </a>
          <a className="btn primary" href="#contact">
            Book a Demo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
