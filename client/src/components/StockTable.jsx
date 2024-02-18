import React, { useState, useEffect } from "react";
import { Table, Input, Space, Select, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import "./StockTable.css";
const { Option } = Select;

const StockTable = ({ selectedSubject }) => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedExchange, setSelectedExchange] = useState("");
  const [uniqueStockExchanges, setUniqueStockExchanges] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://financialmodelingprep.com/api/v3/stock/list?apikey=be6640d1c6afc29835b05c3314787a8e"
        );
        setData(response.data);
        setFilteredData(response.data); // Initialize filteredData with all data
        // Extract all unique stock exchanges from the data
        const uniqueExchanges = Array.from(
          new Set(response.data.map((item) => item.exchange))
        );
        setUniqueStockExchanges(uniqueExchanges);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleExchangeSelect = (value) => {
    setSelectedExchange(value);
    if (value === "") {
      // If "Select Stock Exchange" is selected, show all data
      setFilteredData(data);
    } else {
      // Filter data based on selected stock exchange
      const filtered = data.filter((item) => item.exchange === value);
      setFilteredData(filtered);
    }
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex, columnTitle) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${columnTitle}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    render: (text) =>
      searchedColumn === dataIndex ? (
        <strong>{text}</strong>
      ) : (
        <span>{text}</span>
      ),
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      ...getColumnSearchProps("name", "name"),
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
    },
  
    {
      title: "Stock Exchange",
      dataIndex: "exchange",
      ...getColumnSearchProps("exchange", "Stock Exchange"),
    },
    {
      title: "Stock Exchange Short Name",
      dataIndex: "exchangeShortName",
      ...getColumnSearchProps("exchangeShortName", "Stock Exchange Short Name"),
    },
    {
      title: "Price",
      dataIndex: "price",
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
      <Select
  showSearch
  style={{ width: 200 }}
  placeholder="Select Stock Exchange"
  optionFilterProp="children"
  onChange={handleExchangeSelect}
  filterOption={(input, option) =>
    option && option.children && option.children.toLowerCase()
      ? option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      : false
  }
>
  {uniqueStockExchanges.map((exchange, index) => (
    <Option key={index} value={exchange}>
      {exchange}
    </Option>
  ))}
</Select>

      </div>
      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{ pageSize: 10 }}
        scroll={{ x: true }}
      />
    </div>
  );
};

export default StockTable;
