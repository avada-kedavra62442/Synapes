import { Activity, ArrowRight, Crosshair, Gauge } from "lucide-react";

const telemetry = [
  { icon: Crosshair, label: "PRECISION IN EVERY DETAIL" },
  { icon: Gauge, label: "BUILT TO KEEP LEARNING" },
  { icon: Activity, label: "ONE TEAM · ONE MISSION" },
];

export default function TelemetryStrip() {
  return (
    <div className="telemetry-strip" aria-label="SynApes team principles">
      <div className="telemetry-track">
        {[0, 1].map((copy) => (
          <div className="telemetry-group" key={copy} aria-hidden={copy === 1}>
            {telemetry.map(({ icon: Icon, label }) => (
              <span className="telemetry-item" key={label}>
                <Icon size={14} strokeWidth={1.8} />
                <span>{label}</span>
                <ArrowRight className="telemetry-arrow" size={13} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
