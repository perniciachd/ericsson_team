import { useEffect, useState } from "react";
import FetchAllFunds from "../molecular/FetchAllFunds";
import SearchBar from "../molecular/SearchBar";

type BaseFund = {
  id: number;
  fundName: string;
  category: string;
};

type FundListProps<T extends BaseFund> = {
  type: "funds" | "myFunds";
  Card: React.ComponentType<{ fund: T }>;
};

function FundList<T extends BaseFund>({
  type,
  Card,
}: FundListProps<T>) {
  const [fundData, setFundData] = useState<T[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFunds = async () => {
      setLoading(true);

      const data = await FetchAllFunds(type);

      setFundData(data as T[]);
      setLoading(false);
    };

    loadFunds();
  }, [type]);

  const filteredFunds = fundData.filter((fund) => {
    const matchesSearch = fund.fundName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      categoryFilter === "All" ||
      fund.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <p className="mt-10 text-center text-lg">
        Loading...
      </p>
    );
  }

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        categoryFilter={categoryFilter}
        onSearchChange={setSearchTerm}
        onCategoryChange={setCategoryFilter}
      />

      <div className="space-y-6">
        {filteredFunds.length > 0 ? (
          filteredFunds.map((fund) => (
            <Card
              key={fund.id}
              fund={fund}
            />
          ))
        ) : (
          <p className="text-center text-lg text-gray-500">
            No funds found.
          </p>
        )}
      </div>
    </>
  );
}

export default FundList;