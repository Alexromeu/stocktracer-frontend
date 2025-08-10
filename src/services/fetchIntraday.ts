import axios from "axios";

export async function fetchIntraday(symbol: string, interval: string) {
  if (!symbol) throw new Error("Missing symbol");
  
  const response = await axios.post(`/api/fetch-intraday/${symbol}/${interval}`);
  
  return response.data;
}

