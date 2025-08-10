import React, { useState } from 'react';
import { AnalyticsView } from '../../components/Analitics/AnaliticsView';
import { StockPriceTable } from "../../components/Table/StockPriceTable";
import { useFetchDaily } from '../../hooks/useFetchDaily';


const TIME_OPTIONS = [
  { label: '1 Day', value: 1 },
  { label: '5 Days', value: 5 },
  { label: '10 Days', value: 10 },
  { label: '30 Days', value: 30 },
];

export const DailyStockAnalytics: React.FC = () => {
  const [symbol, setSymbol] = useState('');
  const [days, setDays] = useState(5);
  const [trigger, setTrigger] = useState(false); // toggle to refetch

  const { data, loading, error } = useFetchDaily(symbol, days, trigger);
  
  const fetchData = () => setTrigger(prev => !prev); // toggles the hook effect

  return (
    <div>
      <h2>Daily Analytics</h2>

      <input
        type="text"
        placeholder="Enter stock symbol"
        value={symbol}
        onChange={e => setSymbol(e.target.value.toUpperCase())}
      />

      <select value={days} onChange={e => setDays(Number(e.target.value))}>
        {TIME_OPTIONS.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>

      <button onClick={fetchData}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
       
      <AnalyticsView data={data} />
      <StockPriceTable data={data} />
    </div>
  );
};

