import { aboutContent } from "../content";
import ValuePillars from "../components/ValuePillars/ValuePillars";
import "./About.scss";

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="page-shell">
        <div className="section-heading">
          <div className="pill">About</div>
          <h2>{aboutContent.title}</h2>
          <p>{aboutContent.body}</p>
        </div>
        <ValuePillars values={aboutContent.values} />
      </div>
    </section>
  );
};

export default About;
