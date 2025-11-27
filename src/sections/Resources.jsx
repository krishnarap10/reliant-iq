import { resourcesContent } from "../content";
import "./Resources.scss";

const Resources = () => {
  return (
    <section className="section resources" id="resources">
      <div className="page-shell">
        <div className="section-heading">
          <div className="pill">Resources</div>
          <h2>{resourcesContent.title}</h2>
          <p>Insights & thought leadership grounded in real-world reliability.</p>
        </div>
        <div className="resources__grid">
          {resourcesContent.resources.map((item) => (
            <div className="resource card" key={item}>
              <span className="spark" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
