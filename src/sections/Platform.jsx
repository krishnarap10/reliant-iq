import { platformContent } from "../content";
import "./Platform.scss";
import AgentsOverview from "../components/AgentsOverview/AgentsOverview";

const Platform = () => {
  return (
    <section className="section platform" id="platform">
      <div className="page-shell">
        <div className="section-heading">
          <div className="pill">Platform</div>
          <h2>{platformContent.title}</h2>
          <p>{platformContent.intro}</p>
        </div>
        <div className="platform__grid">
          {platformContent.components.map((component) => (
            <div className="platform__card card" key={component.name}>
              <div className="heading">
                <h4>{component.name}</h4>
                <span className="chip">Core</span>
              </div>
              <ul>
                {component.details.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="platform__agents">
          <div className="section-heading">
            <h3>Featured Agents</h3>
            <p>Multi-agent intelligence spanning observability, security, and data triage.</p>
          </div>
          <AgentsOverview />
        </div>
      </div>
    </section>
  );
};

export default Platform;
