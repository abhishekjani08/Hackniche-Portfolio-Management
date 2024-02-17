import React, { useState, useEffect } from "react";
import { Table, Tag, Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
// import BrandOne from "../images/brand/brand-01.svg"; // Import other brand images as needed
import "./StockTable.css";
// import EditApplicant  from "./EditApplicant";

const StockTable = ({ selectedSubject }) => {
  console.log("--->", selectedSubject);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000/api/stock/getAll`);
      // console.log(res.data);
      console.log(res.data.data);
      setData(res.data.data);
    };
    // fetchVideo();
    fetchData();
  }, []);

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
  const getColumnSearchPropsName = (dataIndex, columnTitle) => ({
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
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()) && record[selectedSubject] === value, // Include selectedSubject prop in filter
    render: (text) =>
      searchedColumn === dataIndex ? (
        <strong>{text}</strong>
      ) : (
        <span>{text}</span>
      ),
  });

  // const data = [
  //   {
  //     key: "1",
  //     name: "John Brown",
  //     gender: "Male",
  //     // age: 32,

  //     role: "Web Developer",
  //     round: "Round -2 Scheduled",
  //     status: "Ongoing",
  //     dob: "23/10/2001",
  //     email: "John@gmail.com",
  //     contact: 9579888546,
  //     resume: "resume link",
  //     about: "hello i am zaid",
  //     remark1: "hello in round-1 it is get rejected due to the followig reason",
  //     remark2: "remark02 rejected",
  //   },
  //   {
  //     key: "2",
  //     name: "Jim Green",
  //     gender: "Male",
  //     age: 42,
  //     role: "App Developer",
  //     email: "Jim@gmail.com",

  //     round: "Round-1 Completed",

  //     status: "New",
  //   },
  //   {
  //     key: "3",
  //     name: "Joe Black",
  //     age: 32,
  //     gender: "Male",
  //     role: "Graphic Design",
  //     round: "Round-1 Completed",
  //     email: "Joe@gmail.com",
  //     status: "Rejected",
  //   },
  //   {
  //     key: "4",
  //     name: "Jim Red",
  //     age: 32,
  //     gender: "Female",
  //     role: "Web Developer",
  //     email: "Joe@gmail.com",

  //     round: "Round-1 Completed",

  //     status: "Ongoing",
  //   },
  //   {
  //     key: "4",
  //     name: "Jim Red",
  //     age: 32,
  //     gender: "Female",
  //     role: "Web Developer",
  //     round: "Round-1 Completed",

  //     status: "Ongoing",
  //   },
  //   {
  //     key: "4",
  //     name: "Jim Red",
  //     age: 32,
  //     gender: "Female",
  //     role: "Web Developer",
  //     round: "Round-1 Completed",

  //     status: "Ongoing",
  //   },
  //   {
  //     key: "4",
  //     name: "Jim Red",
  //     age: 32,
  //     gender: "Female",
  //     role: "Web Developer",
  //     round: "Round-1 Completed",

  //     status: "Ongoing",
  //   },
  //   {
  //     key: "4",
  //     name: "Jim Red",
  //     age: 32,
  //     gender: "Female",
  //     role: "Web Developer",
  //     round: "Round-1 Scheduled",

  //     status: "Ongoing",
  //   },
  //   {
  //     key: "4",
  //     name: "Jim Red",
  //     age: 32,
  //     gender: "Female",
  //     role: "Web Developer",
  //     round: "Round-1 Completed",

  //     status: "Ongoing",
  //   },
  //   {
  //     key: "4",
  //     name: "Jim Red",
  //     age: 32,
  //     gender: "Female",
  //     role: "Web Developer",
  //     round: "Round-1 Completed",

  //     status: "Ongoing",
  //   },
  //   {
  //     key: "4",
  //     name: "Jim Red",
  //     age: 32,
  //     gender: "Female",
  //     role: "Web Developer",
  //     round: "Round-2 Scheduled",

  //     status: "Ongoing",
  //   },
  //   {
  //     key: "4",
  //     name: "Jim Red",
  //     age: 32,
  //     gender: "Female",
  //     role: "Web Developer",
  //     round: "Round-2 Completed",

  //     status: "Ongoing",
  //   },
  //   {
  //     key: "4",
  //     name: "Jim Red",
  //     age: 32,
  //     gender: "Female",
  //     role: "Web Developer",
  //     round: "Round-2 Completed",

  //     status: "Ongoing",
  //   },
  //   {
  //     key: "4",
  //     name: "Jim Red",
  //     age: 32,
  //     gender: "Female",
  //     role: "Web Developer",
  //     round: "Round-2 Completed",

  //     status: "Ongoing",
  //   },
  // ];
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
      ...getColumnSearchPropsName("stockExchange", "New York Stock Exchange"),
      className:
        "bg-white text-black bg-white hover:bg-white p-2.5 text-center",
    },
    {
      title: "Close",
      dataIndex: "close",
      // filters: [
      //   { text: "New", value: "New" },
      //   { text: "Ongoing", value: "Ongoing" },
      //   { text: "Completed", value: "Completed" },
      //   { text: "Rejected", value: "Rejected" },
      // ],
      // onFilter: (value, record) => record.Status.indexOf(value) === 0,
      // render: (Status) => {
      //   let color = "";
      //   switch (Status) {
      //     case "Ongoing":
      //       color = "blue";
      //       break;
      //     case "New":
      //       color = "yellow";
      //       break;
      //     case "Completed":
      //       color = "green";
      //       break;
      //     case "Rejected":
      //       color = "red";
      //       break;
      //     default:
      //       color = "";
      //   }
      //   return (
      //     <Tag color={color} key={Status}>
      //       {Status}
      //     </Tag>
      //   );
      // },
      className: " bg-white p-2.5 text-center hover:bg-white",
    },
    {
      title: "High",
      dataIndex: "high",
      // filters: [
      //   { text: "Round-1 Scheduled ", value: "Round-1 Scheduled" },
      //   { text: "Round-2 Scheduled", value: "Round-2 Scheduled" },
      //   { text: "Round-1 Completed", value: "Round-1 Completed" },
      //   { text: "Round-2 Completed", value: "Round-2 Completed" },
      // ],
      // onFilter: (value, record) => record.Round.indexOf(value) === 0,
      // render: (Round) => {
      //   let color = "";
      //   switch (Round) {
      //     case "Round -1 Ongoing":
      //       color = "cyan";
      //       break;
      //     case "Round -2 Ongoing":
      //       color = "blue";
      //       break;
      //     case "Completed":
      //       color = "green";
      //       break;
      //     case "Rejected":
      //       color = "red";
      //       break;
      //     default:
      //       color = "";
      //   }
      //   return (
      //     <Tag color={color} key={Round}>
      //       {Round}
      //     </Tag>
      //   );
      // },
      className: "font-bold bg-white bg-white text-center",
    },
    {
      title: "Low",
      dataIndex: "low",
      // filters: [
      //   { text: "Round-1 Scheduled ", value: "Round-1 Scheduled" },
      //   { text: "Round-2 Scheduled", value: "Round-2 Scheduled" },
      //   { text: "Round-1 Completed", value: "Round-1 Completed" },
      //   { text: "Round-2 Completed", value: "Round-2 Completed" },
      // ],
      // onFilter: (value, record) => record.Round.indexOf(value) === 0,
      // render: (Round) => {
      //   let color = "";
      //   switch (Round) {
      //     case "Round -1 Ongoing":
      //       color = "cyan";
      //       break;
      //     case "Round -2 Ongoing":
      //       color = "blue";
      //       break;
      //     case "Completed":
      //       color = "green";
      //       break;
      //     case "Rejected":
      //       color = "red";
      //       break;
      //     default:
      //       color = "";
      //   }
      //   return (
      //     <Tag color={color} key={Round}>
      //       {Round}
      //     </Tag>
      //   );
      // },
      className: "font-bold bg-white bg-white text-center",
    },
    {
      title: "Volume",
      dataIndex: "volume",
      // filters: [
      //   { text: "Round-1 Scheduled ", value: "Round-1 Scheduled" },
      //   { text: "Round-2 Scheduled", value: "Round-2 Scheduled" },
      //   { text: "Round-1 Completed", value: "Round-1 Completed" },
      //   { text: "Round-2 Completed", value: "Round-2 Completed" },
      // ],
      // onFilter: (value, record) => record.Round.indexOf(value) === 0,
      // render: (Round) => {
      //   let color = "";
      //   switch (Round) {
      //     case "Round -1 Ongoing":
      //       color = "cyan";
      //       break;
      //     case "Round -2 Ongoing":
      //       color = "blue";
      //       break;
      //     case "Completed":
      //       color = "green";
      //       break;
      //     case "Rejected":
      //       color = "red";
      //       break;
      //     default:
      //       color = "";
      //   }
      //   return (
      //     <Tag color={color} key={Round}>
      //       {Round}
      //     </Tag>
      //   );
      // },
      className: "font-bold bg-white bg-white text-center",
    },
    {
      title: "Open",
      dataIndex: "open",
      sorter: (a, b) => parseFloat(a.open) - parseFloat(b.open),
      sortDirections: ["ascend", "descend"],
      // filters: [
      //   { text: "Round-1 Scheduled ", value: "Round-1 Scheduled" },
      //   { text: "Round-2 Scheduled", value: "Round-2 Scheduled" },
      //   { text: "Round-1 Completed", value: "Round-1 Completed" },
      //   { text: "Round-2 Completed", value: "Round-2 Completed" },
      // ],
      // onFilter: (value, record) => record.Round.indexOf(value) === 0,
      // render: (Round) => {
      //   let color = "";
      //   switch (Round) {
      //     case "Round -1 Ongoing":
      //       color = "cyan";
      //       break;
      //     case "Round -2 Ongoing":
      //       color = "blue";
      //       break;
      //     case "Completed":
      //       color = "green";
      //       break;
      //     case "Rejected":
      //       color = "red";
      //       break;
      //     default:
      //       color = "";
      //   }
      //   return (
      //     <Tag color={color} key={Round}>
      //       {Round}
      //     </Tag>
      //   );
      // },
      className: "font-bold bg-white bg-white text-center hover:bg-white",
    },
    // {
    //   title: "Applied Date",
    //   dataIndex: "Date",
    //   render: (_, record) => <h1>21 / Nov / 2023</h1>,
    //   className: "bg-white text-black bg-white p-2.5 text-center",
    // },
    // {
    //   title: "Details",
    //   dataIndex: "viewMore",
    //   //   render: (_, record) => <EditApplicant data={record} />,
    //   className: "bg-white text-black bg-white p-2.5 text-center",
    // },
  ];

  const handleViewMore = (record) => {
    // Implement logic to handle "View More" button click
    console.log("View More Clicked for:", record);
  };

  // Generate serial numbers and modify the data
  const dataWithSrNo = data.map((item, index) => ({
    ...item,
    key: (index + 1).toString(), // Assigning unique key for Ant Design Table
    sr: index + 1, // Adding the serial number
  }));

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    // <div className="rounded-sm border border-stroke  px-5 pt-6 pb-2.5 text-black  shadow-default    bg-white dark:text-black sm:px-7.5 xl:pb-1">
    <div>
      <Table
        className="dark:bg-white text-black dark:text-black"
        columns={columns}
        // dataSource={data}
        dataSource={dataWithSrNo} // Use modified data here
        onChange={onChange}
        // style={}
        // rowClassName={() => 'bg-white hover:bg-bodydark2'}
        // bordered
        scroll={{ x: true }}
      />
    </div>
  );
};

export default StockTable;
