interface Metric {
  label: string;
  value: string;
  description?: string;
}

interface ProjectMetricsProps {
  title?: string;
  metrics: Metric[];
  className?: string;
}

export default function ProjectMetrics({ 
  title = "Results & Impact",
  metrics,
  className = ''
}: ProjectMetricsProps) {
  return (
    <div className={`project-metrics ${className}`}>
      <h3>{title}</h3>
      <div className="project-metrics-grid">
        {metrics.map((metric, index) => (
          <div key={index} className="project-metric-item">
            <div className="project-metric-value">
              {metric.value}
            </div>
            <div className="project-metric-label">
              {metric.label}
            </div>
            {metric.description && (
              <p className="project-metric-description">
                {metric.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}