export default function SectionLabel({ children, number }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <i aria-hidden="true" />
      {children}
    </div>
  );
}
