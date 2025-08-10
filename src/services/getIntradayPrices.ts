import axios from "axios";

export async function getIntradayPrices(symbol: string , interval: string, limit: number) {
    if (!symbol) throw new Error("Missing symbol");
    
    const response = await axios.get(`/api/intraday/${symbol}/${interval}`, {
        params: { limit }
    });

    return response.data;
}