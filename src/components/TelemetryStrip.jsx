import { Activity, ArrowRight, ChartNoAxesCombined, Cog, FileText, RefreshCw, Users } from "lucide-react";

const telemetry = [
  { icon: Cog, label: "TECHMECH · MECHANICS, ELECTRONICS & CODE" },
  { icon: FileText, label: "BUILDERSHIP · DESIGN, BUILD & DOCUMENT" },
  { icon: ChartNoAxesCombined, label: "DATACRAFT · LET THE TEST DATA TEACH" },
  { icon: RefreshCw, label: "CTRLALTSHIFT · ADAPT WHEN PLANS CHANGE" },
  { icon: Users, label: "RALLYX · TEAMWORK THAT MOVES US FORWARD" },
];

export default function TelemetryStrip() {
  return (
    <div className="telemetry-strip" aria-label="NRL's five signature skillsets">
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
