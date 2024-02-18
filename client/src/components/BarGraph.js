import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { Typography } from "antd";

const { Title } = Typography;

const BarGraph = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/1/values/1?key=AIzaSyBRL3YpeIvRrL0yM_TLJpJAfj7scTZQwa0`
        );

        console.log("Response data:", response.data); // Add this line for debugging

        // Parse the response data and prepare it for the chart
        const parsedData = parseSheetData(response.data);

        // Prepare data for chart
        const chartData = {
          labels: parsedData.map((entry) => entry.company),
          datasets: [
            {
              label: "Price",
              data: parsedData.map((entry) => entry.price),
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
              ],
            },
          ],
        };

        setData(chartData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const parseSheetData = (sheetData) => {
    // Parse the response data and extract company names and prices
    // Adjust this based on the structure of your Google Sheet data
    const values = sheetData.values || [];
    const headers = values[0] || [];
    const parsedData = [];

    for (let i = 1; i < values.length; i++) {
      const row = values[i];
      const obj = {};

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = row[j];
      }

      parsedData.push(obj);
    }

    return parsedData;
  };

  return (
    <div>
      <Title level={3}>Company-wise Prices</Title>
      <div style={{ height: "400px" }}>
        <Bar
          data={data}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export default BarGraph;
