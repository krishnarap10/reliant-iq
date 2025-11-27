import "./ValuePillars.scss";

const ValuePillars = ({ values }) => {
  return (
    <div className="value-pillars">
      {values.map((value) => (
        <div className="pillar card" key={value}>
          <div className="node" aria-hidden />
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
};

export default ValuePillars;
