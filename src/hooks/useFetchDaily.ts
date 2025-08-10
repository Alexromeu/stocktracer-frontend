import { useEffect, useState } from "react";
import { fetchDaily } from "../services/fetchDaily";
import { getStoredPrices } from "../services/getStoredPrices";
import type { StockEntry } from "../types/Stock";
import isDataStale from "../utils/freshnessChecker";

export function useFetchDaily(symbol: string, days: number, trigger: boolean) {
  const [data, setData] = useState<StockEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      if (!symbol.trim()) {
        setLoading(false);
        return;
      }

      setLoading(true);
      
      try {
        let stored = await getStoredPrices(symbol, days);

        if (isDataStale(stored, 1440)) {
          await fetchDaily(symbol, days);
          stored = await getStoredPrices(symbol, days);
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
