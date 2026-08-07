type FundTypeProps = {
  category: string;
};

function FundType({ category }: FundTypeProps) {
  return (
    <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-700">
      {category}
    </span>
  );
}

export default FundType;