import "./ArchitectureDiagram.scss";
import { architectureContent } from "../../content";

const ArchitectureDiagram = () => {
  return (
    <div className="architecture-diagram card">
      <div className="diagram__header">
        <h4>Five-Layer Stack</h4>
        <p>{architectureContent.caption}</p>
      </div>
      <svg viewBox="0 0 800 340" role="img" aria-label="ReliantIQ architecture layers">
        <defs>
          <linearGradient id="line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0,136,255,0.2)" />
            <stop offset="50%" stopColor="rgba(0,200,231,0.8)" />
            <stop offset="100%" stopColor="rgba(0,136,255,0.2)" />
          </linearGradient>
          <linearGradient id="layer" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(20,28,38,0.95)" />
            <stop offset="100%" stopColor="rgba(10,15,20,0.9)" />
          </linearGradient>
        </defs>
        {architectureContent.layers.map((layer, idx) => {
          const y = 30 + idx * 60;
          return (
            <g key={layer}>
              <rect x="40" y={y} rx="14" ry="14" width="720" height="48" fill="url(#layer)" stroke="rgba(0,136,255,0.35)" />
              <text x="60" y={y + 30} fill="#D6DEE8" fontSize="15" fontFamily="Spline Sans, Inter, sans-serif">
                {layer}
              </text>
              <circle cx="700" cy={y + 24} r="6" fill="rgba(0,200,231,0.9)" />
              <circle cx="730" cy={y + 24} r="4" fill="rgba(79,180,255,0.9)" />
            </g>
          );
        })}
        {[0, 1, 2, 3].map((i) => {
          const y = 54 + i * 60;
          return <line key={i} x1="700" y1={y} x2="700" y2={y + 60} stroke="url(#line)" strokeWidth="2" strokeDasharray="6 6" />;
        })}
        <polyline
          points="160,80 260,120 360,100 460,140 560,110 660,150"
          fill="none"
          stroke="url(#line)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="8 6"
        />
        <polyline
          points="160,200 280,230 420,210 560,240 700,220"
          fill="none"
          stroke="rgba(0,200,231,0.55)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {[{ x: 160, y: 80 }, { x: 360, y: 100 }, { x: 560, y: 110 }].map((node, i) => (
          <g key={i}>
            <circle cx={node.x} cy={node.y} r="10" fill="rgba(0,136,255,0.6)" />
            <circle cx={node.x} cy={node.y} r="18" fill="none" stroke="rgba(0,136,255,0.25)" />
          </g>
        ))}
      </svg>
      <div className="diagram__legend">
        <div>
          <span className="dot dot-ai" />
          <p>AI agents coordinate across data, orchestration, and observability layers.</p>
        </div>
        <div>
          <span className="dot dot-sec" />
          <p>Security & Governance gates protect every pipeline and workflow.</p>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
