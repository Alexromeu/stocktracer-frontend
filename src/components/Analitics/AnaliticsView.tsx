import type { StockEntry } from "../../types/Stock";

interface AnalyticsProps {
  data: StockEntry[];
}

export const AnalyticsView: React.FC<AnalyticsProps> = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) return null;

  const latest = data[0];

  if (
    typeof latest.open !== 'number' ||
    typeof latest.close !== 'number' ||
    typeof latest.volume !== 'number'
  ) {
    console.warn('Invalid data shape:', latest);
    return null;
  }

  const percentChange = ((latest.close - latest.open) / latest.open * 100).toFixed(2);


  return (
    <div>
      <p>Latest: {latest.symbol}</p>
      <p>Change: {percentChange}%</p>
      <p>Volume: {latest.volume.toLocaleString()}</p>
    </div>
  );
};

