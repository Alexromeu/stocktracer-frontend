import { useEffect, useState } from "react";
import { fetchIntraday } from "../services/fetchIntraday";
import { getIntradayPrices } from "../services/getIntradayPrices";
import isDataStale from "../utils/freshnessChecker";
import converterToNumber from "../utils/intervalConverterToNumber";

export function useFetchIntraday(symbol: string, interval: string, limit: number, trigger: boolean) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      if (!symbol) return;

      setLoading(true);

      try {
        let stored = await getIntradayPrices(symbol, interval, limit);
        let intervalConverted = converterToNumber(interval)

        if (isDataStale(stored, intervalConverted!)) {
          
          await fetchIntraday(symbol, interval); 
          stored = await getIntradayPrices(symbol, interval, limit);
        }

        setData(stored);
        setError(null);

      } catch (err: any) {
        setError(err.message);
        setData([]);

      } finally {
        setLoading(false);
      }
    };

    loadData();
    
  }, [ trigger ]);

  return { data, loading, error };
}
