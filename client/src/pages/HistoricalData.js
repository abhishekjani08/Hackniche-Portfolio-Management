// import React, { useEffect } from 'react';
// import axios from 'axios';

// const HistoricalData = () => {

//   useEffect(() => {
//     const getHistoricalData = async () => {
//       const data = await axios.get("https://api.upstox.com/v2/historical-candle/NSE_EQ%7CINE848E01016/1minute/2023-11-13/2023-11-12");
//       console.log(data.data);
//     };

//     getHistoricalData();
//   });

//   return (
//     <div>HistoricalData</div>
//   )
// }

// export default HistoricalData
import React, { useState } from 'react';
import axios from 'axios';

const HistoricalData = () => {
  const [symbol, setSymbol] = useState('');
  const [stockData, setStockData] = useState(null);

  const fetchStockData = async () => {
    try {
      // const response = await axios.get('http://localhost:5000/api/getStockData/A');
      const response = await axios.get('https://query1.finance.yahoo.com/v8/finance/chart/A');
      console.log("hello");
      const data = response.data;
      console.log(response);
      // Extract relevant stock data from the response
      const stockInfo = data.chart.result[0];
      setStockData(stockInfo);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  };

  return (
    <div>
      <h2>Stock Data Display</h2>
      <label>
        Enter Stock Symbol:
        <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
      </label>
      <button onClick={fetchStockData}>Fetch Stock Data</button>

      {stockData && (
        <div>
          <h3>{symbol} Stock Data</h3>
          {/* Display stock data here */}
          <pre>{JSON.stringify(stockData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default HistoricalData;
