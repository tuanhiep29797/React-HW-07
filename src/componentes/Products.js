import axios from "axios";
import { useEffect, useState } from "react";
import { Breadcrumb, Button, Divider, Space, Table } from "antd";
import { Link } from "react-router-dom";
import { DeleteTwoTone, HomeOutlined, HomeTwoTone, InfoCircleTwoTone, ProductOutlined } from "@ant-design/icons";

const Products = () => {
  const [productList, setProductList] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      localStorage.setItem("products", JSON.stringify(response.data));
      setProductList(() => JSON.parse(localStorage.getItem("products")));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(productList);

  const handleDetele = (id) => {
    setProductList((u) => u.filter((user) => user.id !== id));
    localStorage.setItem("products", JSON.stringify(productList));
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: 390,
      render: (text) => <Link to="/products/:id">{text}</Link>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 150,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: 250,
      render: (text) => <>{text.toUpperCase()}</>,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      width: 200,
      render: (text) => (
        <>
          <img src={text} style={{ height: 100}} />
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      width: 210,
      render: (record) => (
        <Space size="middle">
          <Link to={`/products/${record.id}`}>
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
          <ProductOutlined /> Products
        </Link>
      ),
    },
  ];



  return (
    <div className="container">
      <Divider orientation="center" style={{ fontSize: 50, margin: 20 }}>
        List Product Management
      </Divider>
      <Breadcrumb style={{ margin: 12 }} items={items} />
      <Table columns={columns} dataSource={productList} pagination={false} />
    </div>
  );
};

export default Products;
