import { Input } from "antd";
import { Upload, message, Button } from "antd";
import { Row, Col } from "antd";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import WraperApp from "../../components/WraperApp";
import { useEffect, useLayoutEffect, useState } from "react";
import { createProduct } from "../../redux/products/action";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";
const { TextArea } = Input;

function FormProducts(props: any) {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const handleOnPress = async () => {
    const onSuccess = async () => {
      await navigate("/");
    };
    const onError = async () => {
      console.log("loi");
    };
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
        onSuccess,
        onError,
      })
    );
  };

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
              Add Product
            </Button>
          </div>
        </Col>
        <Col lg={8}></Col>
      </Row>
    </WraperApp>
  );
}
export default FormProducts;
