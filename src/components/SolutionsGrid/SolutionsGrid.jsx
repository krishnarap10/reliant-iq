import "./SolutionsGrid.scss";

const SolutionsGrid = ({ industries }) => {
  return (
    <div className="solutions-grid">
      {industries.map((industry) => (
        <div className="solution card" key={industry.name}>
          <div className="solution__header">
            <h4>{industry.name}</h4>
            <span className="arrow" aria-hidden>
              ↗
            </span>
          </div>
          <p className="description">{industry.description}</p>
          <p className="usecases">{industry.useCases}</p>
        </div>
      ))}
    </div>
  );
};

export default SolutionsGrid;
