import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Dashboard/LandingPage';
import { DailyStockAnalytics } from './pages/Dashboard/DailyPanel';
import { IntradayStockAnalytics } from './pages/Dashboard/IntradayPanel';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/daily" element={<DailyStockAnalytics />} />
          <Route path="/intraday" element={<IntradayStockAnalytics />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
