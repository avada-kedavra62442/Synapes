import TeamStats from "./TeamStats.jsx";
import TelemetryStrip from "./TelemetryStrip.jsx";
import SchoolsSection from "./SchoolsSection.jsx";
import TeamValuesSection from "./TeamValuesSection.jsx";
import HyperdriveSection from "./HyperdriveSection.jsx";
import ManifestoSection from "./ManifestoSection.jsx";
import TeamMembersSection from "./TeamMembersSection.jsx";

export function TeamSections() {
  return (
    <>
      <TelemetryStrip />
      <TeamStats />
      <SchoolsSection />
      <TeamMembersSection />
      <TeamValuesSection />
      <HyperdriveSection />
      <ManifestoSection />
    </>
  );
}
