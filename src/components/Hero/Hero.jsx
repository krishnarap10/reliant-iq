import { heroContent } from "../../content";
import AICard from "../AICard/AICard";
import "./Hero.scss";

const Hero = () => {
  const { headline, subheadline, ctas, aiCard } = heroContent;
  return (
    <section className="hero section" id="home">
      <div className="hero__bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="neural-lines">
          {[...Array(7)].map((_, i) => (
            <span key={i} className={`line l-${i}`} />
          ))}
        </div>
      </div>
      <div className="page-shell hero__grid">
        <div className="hero__content">
          <div className="pill">Autonomous Enterprise Platform</div>
          <h1>{headline}</h1>
          <p className="subheadline">{subheadline}</p>
          <div className="cta-group">
            {ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className={`btn ${cta.variant === "secondary" ? "secondary" : "primary"}`}
              >
                {cta.label}
              </a>
            ))}
          </div>
          <div className="trust">
            <span className="dot" />
            <p>SOC2-ready • Multi-cloud • Human-AI Collaboration</p>
          </div>
        </div>
        <div className="hero__visual">
          <AICard {...aiCard} />
          <div className="rca-mini card">
            <div className="header">
              <span>AI Flow</span>
              <span className="badge">SRE-MVP</span>
            </div>
            <ul>
              <li>Prometheus → Loki → Tempo (LGT)</li>
              <li>OpenTelemetry Gateway (agents + central)</li>
              <li>RAG + LLM reasoning for RCA</li>
              <li>Auto-remediation hooks to ServiceNow</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
