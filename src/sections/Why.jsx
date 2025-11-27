import { whyContent } from "../content";
import "./Why.scss";

const Why = () => {
  return (
    <section className="section why" id="why">
      <div className="page-shell">
        <div className="section-heading">
          <div className="pill">Why ReliantIQ</div>
          <h2>{whyContent.title}</h2>
          <p>{whyContent.body}</p>
        </div>
        <div className="why__list">
          {whyContent.differentiators.map((item) => (
            <div className="why__item card" key={item}>
              <span className="dot" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
