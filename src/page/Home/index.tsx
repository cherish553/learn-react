import { Menu } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { Outlet } from "react-router";

const { SubMenu } = Menu;
export const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Menu
        // onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<MailOutlined />} title="后台管理">
          <Menu.Item key="1">用户</Menu.Item>
          <Menu.Item key="2">菜单</Menu.Item>
        </SubMenu>
      </Menu>
      <div style={{ flex: 1 }}>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
