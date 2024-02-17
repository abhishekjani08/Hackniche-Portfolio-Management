import React, { useState, useEffect } from "react";
import { Table, Input, Button, Space } from "antd";
import axios from "axios";
import Chart from "chart.js/auto";
import _ from "lodash"; // Import lodash
import "./MostSearched.css";
import { SearchOutlined } from "@ant-design/icons";

const MostSearched = () => {
  const [stockData, setStockData] = useState([]);
  const [filteredStockData, setFilteredStockData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  // console.log(searchText);
  const [searchedColumn, setSearchedColumn] = useState("");
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
      //createChart();
      setFilteredStockData(stockData);
    }
  }, [stockData]);

  // const createChart = () => {
  //   const labels = filteredStockData.map((stock) => stock.symbol);
  //   const prices = filteredStockData.map((stock) => stock.price);
  
  //   const ctx = document.getElementById("stockChart").getContext("2d");
  //   if (window.stockChartInstance) {
  //     window.stockChartInstance.destroy(); // Destroy existing chart
  //   }
    
  //   // Create new chart instance
  //   window.stockChartInstance = new Chart(ctx, {
  //     type: "line",
  //     data: {
  //       labels: labels,
  //       datasets: [
  //         {
  //           label: "Stock Prices",
  //           data: prices,
  //           borderColor: "rgb(75, 192, 192)",
  //           tension: 0.1,
  //         },
  //       ],
  //     },
  //   });
  // };

  const getColumnSearchProps = (dataIndex, columnTitle) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div className="p-4">
        <Input
          placeholder={`Search ${columnTitle}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys, confirm, dataIndex)
          }
          className="mb-2"
        />
        <Space>
          <button
            onClick={() => handleReset(clearFilters)}
            className="bg-gray-200 text-gray-800 mr-2 rounded px-4 py-2"
          >
            Reset
          </button>
          <button
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            className="rounded bg-primary px-4 py-2 text-black"
          >
            OK
          </button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    render: (text) =>
      searchedColumn === dataIndex ? (
        <strong>{text}</strong>
      ) : (
        <span>{text}</span>
      ),
  });
  const columns = [
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
      width: 50, // Fixed width for the column
      ellipsis: true, // Allow content to be ellipsized if it overflows
      style: { whiteSpace: 'pre-wrap' } // Ensure content wraps within the cell
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 200, 
      ellipsis: true, 
      style: { whiteSpace: 'pre-wrap' },
      ...getColumnSearchProps("name", "Name"),
    },
    {
      title: "Price (₹)",
      dataIndex: "price",
      key: "price",
      width: 100, 
      ellipsis: true,
      style: { whiteSpace: 'pre-wrap' }, 
      sorter: (a, b) => parseFloat(a.price) - parseFloat(b.price),
      sortDirections: ["ascend", "descend"],
      // ...getColumnSearchProps("price", "Price"),
    },
    {
      title: "Exchange",
      dataIndex: "exchange",
      key: "exchange",
      width: 150, 
      ellipsis: true, 
      style: { whiteSpace: 'pre-wrap' } 
    },
  ];
  
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div> 
      {/* <h1>Stock List</h1> */}

      <Table
         columns={columns}
         dataSource={filteredStockData}
         loading={loading}
         onChange={onChange}
      />
      {/* <canvas id="stockChart" /> */}
    </div>
  );
};

export default MostSearched;
