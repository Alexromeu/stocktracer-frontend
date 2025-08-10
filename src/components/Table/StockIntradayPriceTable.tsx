import React from 'react';
import type { StockEntry } from '../../types/Stock';
import groupByDate from '../../utils/groupByDate';

interface Props {
  data: StockEntry[];
}

export const StockIntradayPriceTable: React.FC<Props> = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  const grouped = groupByDate(data);

  return (
    <div>
      {Object.entries(grouped).map(([date, entries]) => (
        <div key={date}>
          <h3>{date}</h3>
          <table>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Timestamp</th>
                <th>Open</th>
                <th>High</th>
                <th>Low</th>
                <th>Close</th>
                <th>Volume</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, idx) => (
                <tr key={idx}>
                  <td>{entry.symbol}</td>
                  <td>{formatTimestamp(entry.timestamp)}</td>
                  <td>{entry.open.toFixed(2)}</td>
                  <td>{entry.high.toFixed(2)}</td>
                  <td>{entry.low.toFixed(2)}</td>
                  <td>{entry.close.toFixed(2)}</td>
                  <td>{entry.volume.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

 
const formatTimestamp = (date: Date | string): string => {
  return new Date(date).toLocaleString(); 
};