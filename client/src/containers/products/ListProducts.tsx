import { Table, Tag, Space } from "antd";
import { Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WraperApp from "../../components/WraperApp";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { getProducts } from "../../redux/products/action";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";
const { Column } = Table;

function ListProducts(props: any) {
  const [state, setState] = useState({
    checkedList: [],
    checkAll: false,
  });
  const products = useSelector((state) => state);
  const productsData = get(products, "products.list.data.data", []);
  console.log("productsData", productsData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (!productsData) {
    return null;
  }

  const handleDetail = () => {};

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Sale Price",
      dataIndex: "sale price",
      key: "salePrice",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Action",
      dataIndex: "_id",
      key: "_id",
      render: (text: string, record: any) => (
        <Button onClick={() => handleDetail()}>
          <Link to={`product/${record._id}`} key={record._id}>
            Detail
          </Link>
        </Button>
      ),
    },
  ];

  return (
    <WraperApp>
      <Row>
        <Col lg={20}></Col>
        <Col lg={4}>
          <Link to="/product/add">
            <Button
              className="main-btn"
              type="primary"
              shape="round"
              icon={<PlusOutlined />}
            >
              Thêm mới sản phẩm
            </Button>
          </Link>
        </Col>
      </Row>
      <Table dataSource={productsData} columns={columns} />
    </WraperApp>
  );
}
export default ListProducts;
