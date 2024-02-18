import React, { useState, useRef, useEffect } from "react";
import { DatePicker, Button, Select } from "antd";
import axios from "axios";
import Chart from "chart.js/auto";
import ZoomPlugin from "chartjs-plugin-zoom";

const { RangePicker } = DatePicker;
const { Option } = Select;

const Historical = () => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedSource, setSelectedSource] = useState("AAL"); // Default source
  const chartRef = useRef(null);

  useEffect(() => {
    Chart.register(ZoomPlugin);
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://financialmodelingprep.com/api/v3/historical-chart/5min/${selectedSource}?from=${fromDate}&to=${toDate}&apikey=be6640d1c6afc29835b05c3314787a8e`
      );
      setStockData(response.data);
      setLoading(false);
      createChart(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const createChart = (data) => {
    const labels = data.map((item) => item.date);
    const prices = data.map((item) => item.close);

    const ctx = document.getElementById("stockChart").getContext("2d");

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Stock Prices",
            data: prices,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
      options: {
        plugins: {
          zoom: {
            zoom: {
              wheel: {
                enabled: true,
              },
              mode: "xy",
            },
          },
        },
      },
    });
  };

  const handleDateChange = (dates) => {
    if (dates && dates.length === 2) {
      setFromDate(dates[0].format("YYYY-MM-DD"));
      setToDate(dates[1].format("YYYY-MM-DD"));
    }
  };

  const handleSourceChange = (value) => {
    setSelectedSource(value);
  };

  return (
    <div>
      <div>
        <div>Price Graphs</div>
        <RangePicker onChange={handleDateChange} />
        <Select defaultValue="AAL" style={{ width: 120 }} onChange={handleSourceChange}>
        <Option value="AAL">AAL</Option>
        <Option value="AAPL">AAPL</Option>
        <Option value="GOOGL">GOOGL</Option>
        <Option value="MSFT">MSFT</Option>
        </Select>
        <Button type="primary" onClick={fetchData} loading={loading} style={{ color: "black" }}>
          Fetch Data
        </Button>
        <canvas id="stockChart" />
      </div>

      <div>
        {/* <div>Pie Charts</div> */}
        {/* add pie charts here for   */}
      </div>
    </div>
  );
};

export default Historical;
