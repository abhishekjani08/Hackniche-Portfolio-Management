import React, { useState, useEffect } from "react";
import { Table, Input, Button } from "antd";
import axios from "axios";
import Chart from "chart.js/auto";

const MostSearched = () => {
  const [stockData, setStockData] = useState([]);
  const [filteredStockData, setFilteredStockData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterPrice, setFilterPrice] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://financialmodelingprep.com/api/v3/stock/list?apikey=1ZH5AbyTIOQ4OhEKOqWZjea44O2NJgLn"
        );
        console.log(response);
        setStockData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (stockData.length > 0) {
      createChart();
      setFilteredStockData(stockData);
    }
  }, [stockData]);

  const createChart = () => {
    const labels = filteredStockData.map((stock) => stock.symbol);
    const prices = filteredStockData.map((stock) => stock.price);

    const ctx = document.getElementById("stockChart").getContext("2d");

    new Chart(ctx, {
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
    });
  };

  const columns = [
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Exchange",
      dataIndex: "exchange",
      key: "exchange",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
  ];

  const handleLowToHighFilter = () => {
    const sortedData = [...stockData].sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
    setFilteredStockData(sortedData);
  };

  const handleHighToLowFilter = () => {
    const sortedData = [...stockData].sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    );
    setFilteredStockData(sortedData);
  };

  return (
    <div>cc    
      <h1>Stock List</h1>
      <Button type="text" onClick={handleLowToHighFilter}>
        Low to High
      </Button>
      <Button type="text" onClick={handleHighToLowFilter}>
        High to Low
      </Button>
      <Table
        columns={columns}
        dataSource={filteredStockData}
        loading={loading}
      />
      <canvas id="stockChart" />
    </div>
  );
};

export default MostSearched;
