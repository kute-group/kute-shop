import { Layout, Menu, Breadcrumb } from "antd";
import "../assets/css/style.css";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";

const { Header, Content, Sider, Footer } = Layout;

function WraperApp(props: any) {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken: boolean) => {
          console.log(broken);
        }}
        onCollapse={(collapsed: boolean, type: string) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="3" icon={<VideoCameraOutlined />}>
            <Link to="/">Trang Sản Phẩm</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          {props.children}
        </div>
      </Content>
    </Layout>
  );
}

export default WraperApp;
