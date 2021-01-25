import React from "react";
import {
  Layout,
  Menu,
  Image,
} from "antd";
import {
  PlusCircleOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import logoImage from "../../Image/logo_white.png";
const {  Sider } = Layout;

function campaignReturn(key: any) {
  console.log(key);
  window.location.href = "/campaign";
}

function homeReturn(key: any) {
  console.log(key);
  window.location.href = "/dashboard";
}

function returnReports(key: any) {
  console.log(key);
  window.location.href = "/reports";
}

function returnAnalyze(key: any) {
  console.log(key);
  window.location.href = "/analyze";
}

function MenuComponent() {
    return (
<Sider
        breakpoint="lg"
        collapsedWidth="100"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo">
          <Image src={logoImage} />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item
            key="1"
            icon={<BarChartOutlined style={{ fontSize: "20px" }} />}
            onClick={returnAnalyze}
          >
            Analyze
          </Menu.Item>
        <Menu.Item
            key="2"
            icon={<BarChartOutlined style={{ fontSize: "20px" }} />}
            onClick={homeReturn}
          >
            Campaign Status
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<PlusCircleOutlined style={{ fontSize: "20px" }} />}
            onClick={campaignReturn}
          >
          Campaign Setup
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<BarChartOutlined style={{ fontSize: "20px" }} />}
            onClick={returnReports}
          >
            Reports
          </Menu.Item>
          
        </Menu>
      </Sider>
       );
    }
    
    export default MenuComponent;