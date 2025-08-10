import axios from "axios";

export async function fetchDaily(symbol: string, days: number) {
  if (!symbol || !days) throw new Error("Missing parameters");

  await axios.post(`/api/fetch-daily`, { symbol, days });
}