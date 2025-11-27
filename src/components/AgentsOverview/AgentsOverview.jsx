import "./AgentsOverview.scss";
import { agentsDeepDive } from "../../content";

const AgentsOverview = () => {
  const cards = [
    {
      title: agentsDeepDive.sreMvp.title,
      points: agentsDeepDive.sreMvp.highlights,
      badge: "CloudOps",
    },
    {
      title: agentsDeepDive.certificateRotation.title,
      points: agentsDeepDive.certificateRotation.highlights,
      badge: "Security",
    },
    {
      title: agentsDeepDive.databaseTriage.title,
      points: agentsDeepDive.databaseTriage.highlights,
      badge: "Data",
    },
  ];

  return (
    <div className="agents-overview">
      {cards.map((card) => (
        <div className="agent card" key={card.title}>
          <div className="agent__meta">
            <span className="badge">{card.badge}</span>
            <h4>{card.title}</h4>
          </div>
          <ul>
            {card.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AgentsOverview;
