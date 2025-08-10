import React from 'react';
import { Link } from 'react-router-dom';



const LandingPage: React.FC = () => {


  return (
    <div>
      <h1>📊 Stock Analytics Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/daily">Daily Data</Link></li>
          <li><Link to="/intraday">Intraday Data</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default LandingPage;
