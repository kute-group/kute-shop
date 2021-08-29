import WraperApp from 'components/WraperApp';
import productImg from 'assets/images/testjpg.jpg';
import { Row, Col } from 'antd';
import { PlusOutlined } from "@ant-design/icons"
import {
  Button,
  Tooltip,
  Table,
  Space,
  Radio,
  Divider,
  Tag,
  Modal,
  notification,
} from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getPosts } from 'redux/posts/action';
import { deletePost } from 'redux/posts/action';
import { getPost } from 'redux/posts/action';
import { List, Avatar } from 'antd';
import { API_URL } from 'config/config'

const { Column } = Table;


function ListPosts() {
  const [state, setState] = useState({
    checkedList: [],
    checkAll: false,
  });
  const onDelete = id => {
    Modal.confirm({
      title: "Bạn có chắc muốn xoá bài viết",
      onOk() {
        const callback = () => {
          setState({ ...state, checkedList: [], checkAll: false });
          getPosts();
          notification.success({
            message: "Xoá bài viết thành công",
          });
        };
        dispatch(deletePost({ id }, callback));
      },
    });
  };
  const [selectionType, setSelectionType] = useState('checkbox');
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };
  const postsData = useSelector(state => state.posts);
  const dispatch = useDispatch();
  console.log('postsData', postsData);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  if (!postsData) {
    return null;
  }

  return (
    <WraperApp>
      <Row>
        <Col lg={20}></Col>
        <Col lg={4}>
          <Link to="/post/add"><Button type="primary" shape="round" icon={<PlusOutlined />}>
            Thêm mới bài viết
          </Button></Link>

        </Col>
      </Row>
      <div className="clear"></div>
      <div class="list-post-table">
        <Row>
          <Col lg={24}>
            <Divider />
            <Button
              className="delete act"
              type="primary"
              onClick={() => onDelete([postsData._id])}
            >
              xoá bài viết
            </Button>
            <Radio.Group
              onChange={({ target: { value } }) => {
                setSelectionType(value);
              }}
              value={selectionType}
            >
              <Radio value="checkbox">Checkbox</Radio>
              <Radio value="radio">radio</Radio>
            </Radio.Group>
            <Divider />
            <Table
              value={selectionType}
              dataSource={postsData.list.data.data}
              rowSelection={{
                type: selectionType,
                ...rowSelection,
              }}
            >
              <Column title="Hình Ảnh" dataIndex="image" key="image" />
              <Column title="Tiêu đề" dataIndex="title" key="title"/>
              <Column title="Nội dung" dataIndex="content" key="content" />
              <Column title="Người tạo" dataIndex="createdBy" key="createdBy" />
              <Column title="Ngày tạo" dataIndex="createdAt" key="createdAt" />

            </Table>
          </Col>
        </Row>
      </div>
    </WraperApp>
  );
}
export default ListPosts;