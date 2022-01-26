import { Input, Modal, notification } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import { Routes, Route, Link } from "react-router-dom";
import WraperApp from "../../components/WraperApp";
import { useEffect, useState } from "react";
import {
  createProduct,
  deleteProduct,
  getProducts,
} from "../../redux/products/action";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";
const { TextArea } = Input;

function FormProducts(props: any) {
  
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const handleOnPress = () => {
    dispatch(
      createProduct({
        data: {
          title: title,
          price: price,
          salePrice: salePrice,
          description: description,
          status: status,
          createdAt: new Date(),
        },
      })
    );
  };

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

  return (
    <WraperApp>
      <Row>
        <Col lg={16}>
          <div className="create-product">
            <div>
              <h3>*Title</h3>
              <Input
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <h3>*Price</h3>
              <Input
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <h3>*Sale Price</h3>
              <Input
                placeholder="Sale Price"
                onChange={(e: any) => setSalePrice(e.target.value)}
              />
            </div>
            <div>
              <h3>Description</h3>
              <TextArea
                rows={5}
                placeholder="Description"
                onChange={(e: any) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <h3>*Status</h3>
              <Input
                placeholder="Status"
                onChange={(e: any) => setStatus(e.target.value)}
              />
            </div>
          </div>
          <div className="product-button">
            <Button type="primary" onClick={() => handleOnPress()}>
              Thêm sản phẩm
            </Button>
          </div>
        </Col>
        <Col lg={8}></Col>
      </Row>
    </WraperApp>
  );
}
export default FormProducts;
