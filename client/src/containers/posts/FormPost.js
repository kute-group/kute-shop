import WraperApp from 'components/WraperApp';
import { notification } from 'antd';
import { Input } from 'antd';
import { UnorderedListOutlined } from "@ant-design/icons";
import { Upload, message, Button, Form, Select, } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import * as postAction from 'redux/posts/action';
import { useState, useEffect } from 'react';
import { get } from 'lodash';
import { createPost, editPost, getPost } from 'redux/posts/action';
import queryString from 'query-string';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const { Option } = Select;

function FormPost(props) {
  const [form] = Form.useForm();
  const urlQuery = queryString.parse(props);

  const defaultForm = {
    title: '',
    image: '',
    description: '',
    status: '',
    content: '',
    isChanged: false,
  };

  const isEdit = props.match && props.match.params && props.match.params.id;
  const [state, setState] = useState(defaultForm);

  const handleSubmit = (values) => {
    if (props.match.params.id) {
      // edit a post
      const callback = () => {
        notification.success({
          message: "Sửa bài viết thành công",
        });
        setState(state => ({
          ...state,
          isChanged: false,
        }));
      };
      props.dispatch(postAction.editPost({ ...state, ...values }, callback));
    } else {
      // add a new post

      const callback = () => {
        notification.success({
          message: "Tạo mới bài viết thành công",
        });
        setState(state => ({
          ...state,
          isChanged: false,
        }));
      };
      props.dispatch(postAction.createPost({ ...state, ...values }, callback));
    }
  };
  const onResetForm = () => {
    if (props.post && isEdit) {
      form.setFieldsValue(props.post.data);
      setState(state => ({ ...state, ...props.post.data }));
    } else if (urlQuery.action === 'copy' && urlQuery.id) {
      form.setFieldsValue({
        ...get(props, 'post.result.data', {}),
        title: `${get(props, 'post.data.title', '')} copy`,
      });
      setState(state => ({
        ...state,
        ...get(props, 'post.data', {}),
        title: `${get(props, 'post.data.title', '')} copy`,
      }));
    } else {
      form.resetFields();
      setState(state => ({ ...state, ...defaultForm }));
    }
  };

  useEffect(() => {
    if (props.id && props.post) {
      setState(state => ({ ...state, ...props.post.data }));
    }
    onResetForm();
    window.onbeforeunload = null;
  }, [props]);

  useEffect(() => {
    if (props.id) {
      props.dispatch(
        postAction.getPost({
          id: props.id,
        })
      );
    } else if (urlQuery.action === 'copy' && urlQuery.id) {
      props.dispatch(
        postAction.getPost({
          id: urlQuery.id,
        })
      );
    }
    return () => (window.onbeforeunload = null);
  }, []);
  return (
    <WraperApp>
      <Row>
        <Col lg={18}>
          <Row>
            <Col span={16} className='add-post-form'>

              <Form name="add-post-form"
                className=""
                onFinish={handleSubmit}
                form={form}
                layout="vertical"
                initialValues={{
                  remember: true,
                }}
              >
                <Form.Item
                  name="title"
                  rules={[{ required: true, message: "Hãy Nhập Tên Bài Viết" }]}
                >
                  <Input placeholder="Tên Bài Viết" />
                </Form.Item>
                <Form.Item
                  name="description"
                  rules={[{ required: true, message: 'Hãy Nhập Mô Tả' }]}
                >
                  <Input
                    placeholder="Mô Tả"
                  />
                </Form.Item>
                <Form.Item name="content">
                  <Input.TextArea />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    block shape=""
                    htmlType="submit"
                    className="">
                    Xuất Bản
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button type="danger" block shape="" htmlType="reset" className="" onClick={() => onResetForm()} >
                    Làm Lại
                  </Button>
                </Form.Item>
                <Form.Item>
                  <h2>Thêm Ảnh</h2>
                  <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Chọn Ảnh</Button>
                  </Upload>
                </Form.Item>
              </Form>
            </Col>
            <Col span={8}></Col>
          </Row>
        </Col>
        <Col lg={6}>
          <div>
            <div className="product-button">
              <Link to="/post_categories"><Button type="primary" icon={<UnorderedListOutlined />}>Danh sách bài viết</Button></Link>
            </div>
          </div>
        </Col>
      </Row>
    </WraperApp>
  );
}
const mapStateToProps = state => {
  return {
    post: state.post,
    config: state.config,
  };
};
export default connect(mapStateToProps)(FormPost);;
