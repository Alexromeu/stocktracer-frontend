import React from 'react';
import type { StockEntry } from "../../types/Stock";

interface Props {
  data: StockEntry[];
}

export const StockPriceTable: React.FC<Props> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Open</th>
          <th>High</th>
          <th>Low</th>
          <th>Close</th>
          <th>Volume</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry, idx) => (
          <tr key={idx}>
            <td>{new Date(entry.timestamp).toLocaleDateString()}</td>
            <td>{entry.open}</td>
            <td>{entry.high}</td>
            <td>{entry.low}</td>
            <td>{entry.close}</td>
            <td>{entry.volume}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
