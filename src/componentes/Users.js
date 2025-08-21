import axios from "axios";
import { useEffect, useState } from "react";
import { Breadcrumb, Button, Divider, Space, Table, Tag } from "antd";
import { Link } from "react-router-dom";
import { DeleteTwoTone, HomeOutlined, HomeTwoTone, InfoCircleTwoTone, UserOutlined } from "@ant-design/icons";

const Users = () => {
  const [userList, setUserList] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUserList(response.data);
      
    } catch (err) {
      console.log(err);
    }
  };
  localStorage.setItem("users", JSON.stringify(userList));
  useEffect(() => {
    getData();
  }, []);
  console.log(userList);

  const handleDetele = (id) => {
    setUserList((u) => u.filter((user) => user.id !== id));
    localStorage.setItem("users", JSON.stringify(userList));
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 40,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 250,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 250,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: 250,
    },
    {
      title: "Website",
      dataIndex: "website",
      key: "website",
      width: 200,
    },
    {
      title: "Action",
      key: "action",
      width: 210,
      render: (record) => (
        <Space size="middle">
          <Link to={`/users/${record.id}`}>
            <Button type="primary">
              <InfoCircleTwoTone />
              Detail
            </Button>
          </Link>
          <Button type="primary" danger onClick={() => handleDetele(record.id)}>
            <DeleteTwoTone />
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const items = [
    {
      title: (
        <Link to="/dashboard">
          <HomeTwoTone />
        </Link>
      ),
    },
    {
      title: (
        <Link to="/users">
          <UserOutlined /> Users
        </Link>
      ),
    },
  ];

  return (
    <div className="container">
      <Divider orientation="center" style={{ fontSize: 50, margin: 20 }}>
        List User Management
      </Divider>
      <Breadcrumb style={{ margin: 12 }} items={items} />
      <Table columns={columns} dataSource={userList} pagination={false} />
    </div>
  );
};

export default Users;
