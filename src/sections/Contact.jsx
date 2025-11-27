import { contactContent } from "../content";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="page-shell contact__grid">
        <div className="section-heading">
          <div className="pill">Contact</div>
          <h2>{contactContent.title}</h2>
          <p>{contactContent.body}</p>
          <div className="cta-group">
            {contactContent.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className={`btn ${cta.variant === "secondary" ? "secondary" : "primary"}`}
              >
                {cta.label}
              </a>
            ))}
          </div>
        </div>
        <div className="contact__info card">
          <div className="row">
            <p className="label">Email</p>
            <p className="value">{contactContent.email}</p>
          </div>
          <div className="row">
            <p className="label">Locations</p>
            <p className="value">{contactContent.locations}</p>
          </div>
          <div className="row">
            <p className="label">Trust</p>
            <p className="value">SOC 2-ready • Role-based access • Zero vendor lock-in</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
