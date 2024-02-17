import React, { useState, useEffect } from "react";
import { Table } from "antd";
import axios from "axios";

const StockGraph = () => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://financialmodelingprep.com/api/v3/stock/list?apikey=1ZH5AbyTIOQ4OhEKOqWZjea44O2NJgLn"
        );
        setStockData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
      title: "Exchange Short Name",
      dataIndex: "exchangeShortName",
      key: "exchangeShortName",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={stockData} loading={loading} />
    </div>
  );
};

export default StockGraph;
