import { architectureContent, agentsDeepDive } from "../content";
import ArchitectureDiagram from "../components/ArchitectureDiagram/ArchitectureDiagram";
import "./Architecture.scss";

const Architecture = () => {
  return (
    <section className="section architecture" id="architecture">
      <div className="page-shell">
        <div className="section-heading">
          <div className="pill">Architecture</div>
          <h2>{architectureContent.title}</h2>
          <p>{architectureContent.overview}</p>
        </div>
        <ArchitectureDiagram />
        <div className="flows">
          {[
            agentsDeepDive.sreMvp,
            agentsDeepDive.certificateRotation,
            agentsDeepDive.databaseTriage,
          ].map((flow) => (
            <div className="flow card" key={flow.title}>
              <h4>{flow.title}</h4>
              <ul>
                {flow.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
