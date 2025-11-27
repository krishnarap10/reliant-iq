import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="page-shell footer__grid">
        <div>
          <div className="brand">
            <div className="brand-mark" aria-hidden />
            <span>ReliantIQ</span>
          </div>
          <p className="tagline">Where Reliability Meets Intelligence.</p>
          <p className="copy">© 2025 ReliantIQ. All Rights Reserved.</p>
        </div>
        <div>
          <h5>Navigate</h5>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#platform">Platform</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5>Social</h5>
          <ul>
            <li>LinkedIn</li>
            <li>YouTube</li>
            <li>X</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
