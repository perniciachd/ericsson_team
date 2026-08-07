type BadgeProps = {
  text: string;
  variant: "equity" | "highRisk" | "lowRisk" | "profit";
};

function Badge({ text, variant }: BadgeProps) {
  return (
    <span className={`badge ${variant}`}>
      {text}
    </span>
  );
}

export default Badge;