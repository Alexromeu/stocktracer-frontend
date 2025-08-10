import React, { useState } from 'react';
import { AnalyticsView } from '../../components/Analitics/AnaliticsView';
import { StockIntradayPriceTable } from "../../components/Table/StockIntradayPriceTable";
import { useFetchIntraday } from '../../hooks/useFetchIntraday'; // 


const INTERVAL_OPTIONS = [
  { label: '1 Minute', value: '1min' },
  { label: '5 Minutes', value: '5min' },
  { label: '15 Minutes', value: '15min' },
  { label: '30 Minutes', value: '30min' },
  { label: '60 Minutes', value: '60min' },
];

const LIMIT_OPTIONS = [10, 30, 50, 100];

export const IntradayStockAnalytics: React.FC = () => {
  const [symbol, setSymbol] = useState('');
  const [interval, setInterval] = useState('30min');
  const [limit, setLimit] = useState(50);
  const [trigger, setTrigger] = useState(false);

  const { data, loading, error } = useFetchIntraday(symbol, interval, limit, trigger);

  const fetchData = () => setTrigger(prev => !prev);

  return (
    <div>
      <h2>Intraday Analytics</h2>

      <input
        type="text"
        placeholder="Enter stock symbol"
        value={symbol}
        onChange={e => setSymbol(e.target.value.toUpperCase())}
      />

      <select value={interval} onChange={e => setInterval(e.target.value)}>
        {INTERVAL_OPTIONS.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>

      <select value={limit} onChange={e => setLimit(Number(e.target.value))}>
        {LIMIT_OPTIONS.map(val => (
          <option key={val} value={val}>{val} Entries</option>
        ))}
      </select>

      <button onClick={fetchData}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <AnalyticsView data={data} />
      <StockIntradayPriceTable data={data} />
    </div>
  );
};


