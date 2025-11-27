import { solutionsContent } from "../content";
import SolutionsGrid from "../components/SolutionsGrid/SolutionsGrid";
import "./Solutions.scss";

const Solutions = () => {
  return (
    <section className="section solutions" id="solutions">
      <div className="page-shell">
        <div className="section-heading">
          <div className="pill">Solutions</div>
          <h2>{solutionsContent.title}</h2>
          <p>{solutionsContent.subtext}</p>
        </div>
        <SolutionsGrid industries={solutionsContent.industries} />
      </div>
    </section>
  );
};

export default Solutions;
