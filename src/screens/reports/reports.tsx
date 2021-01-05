import React from "react";
import "./reports.scss";
// import {Route, Switch} from "react-router-dom";
// import Campaign from "../../screens/campaign/campaign";
import { Bar } from "ant-design-pro/lib/Charts";
import {
  Layout,
  Menu,
  Image,
  Tooltip,
  Select,
  Statistic,
  Card,
  Row,
  Col,
  Button,
  Table,
  Space,
} from "antd";
import {
  PlusCircleOutlined,
  LinkedinOutlined,
  GlobalOutlined,
  FacebookOutlined,
  BarChartOutlined,
  SearchOutlined,
  DownloadOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import logoImage from "../../Image/logo_white.png";
import { Input } from "antd";
const { Option } = Select;
const { Header, Footer, Sider, Content } = Layout;
const salesData: { x: string; y: number }[] = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}
const dataSource = [
  {
    key: "1",
    campaignType: "In-Store",
    createDate: "01/09/2020",
    startDate: "01/09/2020",
    endDate: "01/10/2020",
    status: "Active",
    campaignName: "Camp_Aug01_2020",
  },
  {
    key: "2",
    campaignType: "In-Store",
    createDate: "01/09/2020",
    startDate: "01/09/2020",
    endDate: "01/10/2020",
    status: "Active",
    campaignName: "Camp_Aug02_2020",
  },
  {
    key: "3",
    campaignType: "In-Store",
    createDate: "01/09/2020",
    startDate: "01/09/2020",
    endDate: "01/10/2020",
    status: "Active",
    campaignName: "Camp_Aug03_2020",
  },
];

const columns = [
  {
    title: "Campaign Type",
    dataIndex: "campaignType",
    key: "campaignType",
  },
  {
    title: "Create Date",
    dataIndex: "createDate",
    key: "createDate",
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
  },
  {
    title: "End Date",
    dataIndex: "endDate",
    key: "endDate",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Campaign Name",
    dataIndex: "campaignName",
    key: "campaignName",
    render: (text: React.ReactNode) => <a href="/campaignDetail">{text}</a>,
  },
  {
    title: "Launch/Stop",
    dataIndex: "launchStop",
    key: "launchStop",
  },
];

function handleChange(value: any) {
  console.log(`selected ${value}`);
}

function signOut(key: any) {
  console.log(key);
  window.location.href = "/login";
}

function campaignReturn(key: any) {
  console.log(key);
  window.location.href = "/campaign";
}

function homeReturn(key: any) {
  console.log(key);
  window.location.href = "/";
}

function returnReports(key: any) {
  console.log(key);
  window.location.href = "/reports";
}

interface HomeProps {
  message: string;
  name: string;
  isLoggedIn: boolean;
}

function Reports(props: HomeProps) {
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
                  <a onClick={homeReturn}>
                    {<BarChartOutlined />}Campaign Status
                  </a>
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
                      {props.message}, {props.name} <Space />
                      <a href="/login">
                        {
                          <LogoutOutlined
                            disabled
                            style={{ fontSize: "20px" }}
                          />
                        }
                      </a>
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
            <Row>
              <Col span={24}>
                <Bar height={200} title="Sales Trend" data={salesData} />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div>
                  <iframe
                    width="100%"
                    height="500"
                    src="https://app.powerbi.com/reportEmbed?reportId=94f8e10f-00db-4990-b207-7d97e7248d38&autoAuth=true&ctid=2eddc39c-2996-4c2a-ab97-f767c39ea155&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLWVhc3QyLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9"
                  ></iframe>
                </div>
              </Col>
            </Row>
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

export default Reports;
