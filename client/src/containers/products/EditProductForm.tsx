import { Button, Input, Row, Col } from "antd";
import { useParams } from "react-router-dom";
import WraperApp from "../../components/WraperApp";
import { useEffect, useState } from "react";
import { getProduct } from "../../redux/products/action";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";
const { TextArea } = Input;

function FormProducts(props: any) {
  const paramData = useParams();
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (paramData) {
      setIsEdit(true);
      dispatch(getProduct(paramData));
    }
  }, []);
  const product = useSelector((state) => state);
  const productData = get(product, "products.item.data.data", []);
  const [body, setBody] = useState({ ...productData } as any);

  const handleOnPress = () => {};

  if (!productData) {
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
                value={body.title}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
            <div>
              <h3>*Price</h3>
              <Input
                placeholder="Price"
                value={body.price}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
            <div>
              <h3>*Sale Price</h3>
              <Input
                placeholder="Sale Price"
                value={body.sale_price}
                onChange={(e: any) => setBody(e.target.value)}
              />
            </div>
            <div>
              <h3>Description</h3>
              <TextArea
                value={body.description}
                rows={5}
                placeholder="Description"
                onChange={(e: any) => setBody(e.target.value)}
              />
            </div>
            <div>
              <h3>*Status</h3>
              <Input
                placeholder="Status"
                value={body.status}
                onChange={(e: any) => setBody(e.target.value)}
              />
            </div>
          </div>
          <div className="product-button">
            <Button type="primary" onClick={() => handleOnPress()}>
              Edit Product
            </Button>
          </div>
        </Col>
        <Col lg={8}></Col>
      </Row>
    </WraperApp>
  );
}
export default FormProducts;
