import "./AICard.scss";

const AICard = ({ incident, rootCause, recommendation, confidence }) => {
  return (
    <div className="ai-card card">
      <div className="ai-card__header">
        <span className="pill">AI RCA</span>
        <span className="status-dot" aria-hidden />
      </div>
      <div className="ai-card__body">
        <div className="row">
          <p className="label">Incident</p>
          <p className="value">{incident}</p>
        </div>
        <div className="row">
          <p className="label">Root Cause</p>
          <p className="value">{rootCause}</p>
        </div>
        <div className="row">
          <p className="label">Recommendation</p>
          <p className="value">{recommendation}</p>
        </div>
      </div>
      <div className="ai-card__footer">
        <div className="confidence">{confidence}</div>
        <button className="btn secondary">Open Runbook</button>
      </div>
    </div>
  );
};

export default AICard;
