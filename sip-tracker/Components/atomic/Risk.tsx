type RiskProps = {
  risk: "Low" | "Moderate Risk" | "High";
};
function Risk({ risk }: RiskProps) {
  const riskClass = (() => {
    switch (risk) {
      case "Low":
        return "bg-green-100 text-green-700";
      case "Moderate Risk":
        return "bg-yellow-100 text-yellow-700";
      case "High":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  })();

  return (
    <div className={`text-xs px-2 py-1 rounded ${riskClass}`}>
      {risk}
    </div>
  );
}

export default Risk;