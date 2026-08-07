import axios from "axios";

async function FetchAllFunds(
  key: "funds" | "myFunds"
) {
  try {
    const { data } = await axios.get("/data.json");
    return data[key];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default FetchAllFunds;