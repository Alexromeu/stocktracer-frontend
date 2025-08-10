import type { StockEntry } from "../types/Stock";


export default function groupByDate(entries: StockEntry[]): Record<string, StockEntry[]> {
  return entries.reduce((acc, entry) => {

    const dateKey = new Date(entry.timestamp).toISOString().split('T')[0]; 

    if (!acc[dateKey]) acc[dateKey] = [];

    acc[dateKey].push(entry);
    
    return acc;
  }, {} as Record<string, StockEntry[]>);
}
