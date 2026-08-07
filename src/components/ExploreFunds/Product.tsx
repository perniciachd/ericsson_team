import axios from "axios";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  fundName: string;
  category:string;
  risk:string;
  nav:number;
  returns: number;
  expenseRatio:number;
  minSip:number;
  aum:number;
};

function Product() {
  const [val, setVal] = useState<Product[]>([]);

  useEffect(() => {
    console.log("API Call");

    async function getData() {
      try {
        const { data } = await axios.get("/data.json");
        console.log(data);
        setVal(data);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  return (
    <>
      <h2>Product List</h2>
<hr/>
      {val.map((obj) => (
        <div key={obj.id}>
          <p>Name: {obj.fundName}</p>
          <p>category: {obj.category}</p>
          <p>risk:{obj.risk}</p>
          <p>nav:{obj.nav}</p>
          <p>returns:{obj.returns}</p>
          <p>expenseRatio:{obj.expenseRatio}</p>
          <p>minSip:{obj.minSip}</p>
          <p>aum:{obj.aum}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default Product;