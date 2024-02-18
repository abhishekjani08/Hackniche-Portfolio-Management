import React, { useState, useEffect } from "react";
import { Table, Input, Space, Button, Select } from "antd";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://financialmodelingprep.com/api/v3/search?query=AA&apikey=1ZH5AbyTIOQ4OhEKOqWZjea44O2NJgLn"
        );
        setData(response.data);
        setFilteredData(response.data); // Initialize filteredData with all data
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
      const filtered = data.filter((item) => item.stockExchange === value);
      setFilteredData(filtered);
    }
  };

  const handleFilter = () => {
    // This function can be used if needed
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
      <div className="p-4">
        <Input
          placeholder={`Search ${columnTitle}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onChangeCapture={() => handleSearch(selectedKeys, confirm, dataIndex)}
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
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    render: (text) =>
      searchedColumn === dataIndex ? (
        <strong>{text}</strong>
      ) : (
        <span>{text}</span>
      ),
  });

  const columns = [
    {
      title: "Sr no",
      dataIndex: "sr",
      defaultSortOrder: "descend",
      className:
        "bg-white bg-white p-2.5 text-black hover:bg-white text-sm font-medium uppercase",
    },
    {
      title: "Name",
      dataIndex: "name",
      ...getColumnSearchProps("name", "name"),
      className:
        "bg-white bg-white p-2.5 text-black hover:bg-white text-sm font-medium uppercase",
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      className:
        "bg-white bg-white text-black  hover:bg-white text-center p-2.5",
    },
    {
      title: "Currency",
      dataIndex: "currency",
      ...getColumnSearchProps("role", "Role"),
      className:
        "bg-white text-black bg-white hover:bg-white p-2.5 text-center",
    },
    {
      title: "Stock Exchange",
      dataIndex: "stockExchange",
      ...getColumnSearchProps("stockExchange", "New York Stock Exchange"),
      className:
        "bg-white text-black bg-white hover:bg-white p-2.5 text-center",
    },
    {
      title: "Close",
      dataIndex: "close",
      className: " bg-white p-2.5 text-center hover:bg-white",
    },
    {
      title: "High",
      dataIndex: "high",
      className: "font-bold bg-white bg-white text-center",
    },
    {
      title: "Low",
      dataIndex: "low",
      className: "font-bold bg-white bg-white text-center",
    },
    {
      title: "Volume",
      dataIndex: "volume",
      className: "font-bold bg-white bg-white text-center",
    },
    {
      title: "Open",
      dataIndex: "open",
      sorter: (a, b) => parseFloat(a.open) - parseFloat(b.open),
      sortDirections: ["ascend", "descend"],
      className: "font-bold bg-white bg-white text-center hover:bg-white",
    },
  ];

  // Generate serial numbers and modify the data
  const dataWithSrNo = filteredData.map((item, index) => ({
    ...item,
    key: (index + 1).toString(), // Assigning unique key for Ant Design Table
    sr: index + 1, // Adding the serial number
  }));

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-2 ">
        <div className="mb-4">
          <label className="block font-medium text-black">Subject</label>
          <Select
            defaultValue=""
            style={{ width: 200, marginRight: 8 }}
            onChange={handleExchangeSelect}
          >
            <Option value="">Select Stock Exchange</Option>
            {data.map((item) => (
              <Option key={item.symbol} value={item.stockExchange}>
                {item.stockExchange}
              </Option>
            ))}
          </Select>
        </div>
        {/* <Button onClick={handleFilter}>OK</Button> */}
      </div>

      <Table
        className="dark:bg-white text-black dark:text-black"
        columns={columns}
        dataSource={dataWithSrNo} // Use modified data here
        onChange={onChange}
        scroll={{ x: true }}
      />
    </div>
  );
};

export default StockTable;
