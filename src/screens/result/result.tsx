import React from "react";
import { Result, Space } from "antd";
import "./result.scss";
import {
  Layout,
  Menu,
  Image,
  Select,
  Button,
} from "antd";
import {
  PlusCircleOutlined,
  LinkedinOutlined,
  GlobalOutlined,
  FacebookOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import logoImage from "../../Image/logo_white.png";
const { Header, Footer, Sider, Content } = Layout;

function signOut(key: any) {
  console.log(key);
  window.location.href = "/login";
}

function campaignReturn(key: any) {
  console.log(key);
  window.location.href = "/campaign";
}

function returnReports(key: any) {
  console.log(key);
  window.location.href = "/reports";
}

function homeReturn(key: any) {
  console.log(key);
  window.location.href = "/";
}

interface HomeProps {
  message: string;
  name: string;
  isLoggedIn: boolean;
}

function ThankYouResult(props: HomeProps) {
  return (
    <Layout>
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
        <Menu.Item
            key="1"
            icon={<BarChartOutlined style={{ fontSize: "20px" }} />}
            onClick={homeReturn}
          >
            Campaign Status
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<PlusCircleOutlined style={{ fontSize: "20px" }} />}
            onClick={campaignReturn}
          >
          Campaign Setup
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<BarChartOutlined style={{ fontSize: "20px" }} />}
            onClick={returnReports}
          >
            Reports
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ background: "White", padding: 0 }}
        >
          <div>
            <div className="ant-row">
              <div className="ant-col ant-col-4"></div>
              
              <div className="ant-col ant-col-4">
                <div style={{ fontSize: "20px", textAlign: "right" }}>
                  <a onClick={campaignReturn}>
                    {<PlusCircleOutlined />}Campaign Setup
                  </a>
                </div>
              </div>
              <div className="ant-col ant-col-1"></div>
              <div className="ant-col ant-col-4">
              <div style={{ fontSize: "20px", textAlign: "left" }}>
                  <a onClick={homeReturn}>{<BarChartOutlined />}Campaign Status</a>
                </div>
              </div>
              <div className="ant-col ant-col-2">
                <div style={{ fontSize: "20px", textAlign: "left" }}>
                  <a onClick={returnReports}>{<BarChartOutlined />}Reports</a>
                </div>
              </div>
              <div className="ant-col ant-col-2"></div>
              <div
                className="ant-col ant-col-6"
                style={{ fontSize: "20px", textAlign: "end" }}
              >
                {props.isLoggedIn && (
                  <div className="home">
                    <div>
                      {" "}
                      {props.message}, {props.name} <Space/> 
                      <a href="/login">{<LogoutOutlined disabled style={{ fontSize: "20px" }} />}</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
        <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 660 }}
          >
        <Result
    status="success"
    title="Successfully Submitted the Campaign request"
    subTitle="Your campaign is created with Campaign ID: Camp_001_04_2020"
    extra={[
      <Button type="primary" key="console" onClick={homeReturn}>
        Home
      </Button>,
    ]}
  />
  </div>
        </Content>
        <Footer>
          <div>
            <div className="ant-row">
              <div className="ant-col ant-col-8">
                <div>
                  <a
                    href="https://www.linkedin.com/company/catalina-marketing-japan/"
                    style={{ fontSize: "25px" }}
                  >
                    {<LinkedinOutlined />}
                  </a>
                  <a
                    href="https://www.facebook.com/catalinamkt.jp"
                    style={{ fontSize: "25px" }}
                  >
                    {<FacebookOutlined />}
                  </a>
                  <a
                    href="https://catalina-jp.com/"
                    style={{ fontSize: "25px" }}
                  >
                    {<GlobalOutlined />}
                  </a>
                </div>
              </div>
              <div className="ant-col ant-col-8" style={{ fontSize: "15px" }}>
                ©Copyright 2020 Catalina. All rights reserved.
              </div>
            </div>
          </div>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default ThankYouResult;
