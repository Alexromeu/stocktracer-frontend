import axios from "axios";

export async function getStoredPrices(symbol: string, limit = 5) {
  if (!symbol) throw new Error("Missing symbol");
  
  const response = await axios.get(`/api/prices/${symbol}`,{
    params: { limit }
  });

  return response.data;
}