import type { StockEntry } from "../types/Stock";


  const isDataStale = (entries: StockEntry[], freshnessMinutes: number) => {
    if (!entries.length) return true;

    const latestEntry = entries.reduce((a, b) =>
      new Date(a.timestamp) > new Date(b.timestamp) ? a : b
    );

    const latestDate = new Date(latestEntry.timestamp);
    const now = new Date();

    const diffDays =
      (now.getTime() - latestDate.getTime()) / (1000 * 60);

    return diffDays > freshnessMinutes;
  };

  export default isDataStale;