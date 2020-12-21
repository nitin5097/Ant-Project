import React from "react";
import "./home.scss";
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
} from "antd";
import {
  PlusCircleOutlined,
  LinkedinOutlined,
  GlobalOutlined,
  FacebookOutlined,
  BarChartOutlined,
  SearchOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import logoImage from "../../Image/logo_white.png";
import { Input} from "antd";
const { Option } = Select;
const { Header, Footer, Sider, Content } = Layout;

const dataSource = [
  {
    key: '1',
    campaignType: 'In-Store',
    createDate: '01/09/2020',
    startDate: '01/09/2020',
    endDate: '01/10/2020',
    status: 'Active',
    campaignName: 'Camp_Aug01_2020'
  },
  {
    key: '2',
    campaignType: 'In-Store',
    createDate: '01/09/2020',
    startDate: '01/09/2020',
    endDate: '01/10/2020',
    status: 'Active',
    campaignName: 'Camp_Aug02_2020'
  },
  {
    key: '3',
    campaignType: 'In-Store',
    createDate: '01/09/2020',
    startDate: '01/09/2020',
    endDate: '01/10/2020',
    status: 'Active',
    campaignName: 'Camp_Aug03_2020'
  },
];

const columns = [
  {
    title: 'Campaign Type',
    dataIndex: 'campaignType',
    key: 'campaignType',
  },
  {
    title: 'Create Date',
    dataIndex: 'createDate',
    key: 'createDate',
  },
  {
    title: 'Start Date',
    dataIndex: 'startDate',
    key: 'startDate',
  },
  {
    title: 'End Date',
    dataIndex: 'endDate',
    key: 'endDate',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Campaign Name',
    dataIndex: 'campaignName',
    key: 'campaignName',
     render: (text: React.ReactNode) => <a href="/campaignDetail">{text}</a>
  },
  {
    title: 'Launch/Stop',
    dataIndex: 'launchStop',
    key: 'launchStop',
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

interface HomeProps {
  message: string;
  name: string;
  isLoggedIn: boolean;
}

function Home(props: HomeProps) {
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
          <Image src={logoImage} onClick={signOut} />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item
            key="1"
            icon={<PlusCircleOutlined style={{ fontSize: "20px" }} />}
            onClick={campaignReturn}
          >
            New Campaign
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<BarChartOutlined style={{ fontSize: "20px" }} />}
            onClick={homeReturn}
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
              <div className="ant-col ant-col-3"></div>
              <div className="ant-col ant-col-3"></div>
              <div className="ant-col ant-col-3">
                <div style={{ fontSize: "20px", textAlign: "right" }}>
                  <a onClick={campaignReturn}>
                    {<PlusCircleOutlined />}New Campaign
                  </a>
                </div>
              </div>
              <div className="ant-col ant-col-1"></div>
              <div className="ant-col ant-col-2">
                <div style={{ fontSize: "20px", textAlign: "left" }}>
                  <a onClick={homeReturn}>{<BarChartOutlined />}Reports</a>
                </div>
              </div>
              <div
                className="ant-col ant-col-6"
                style={{ fontSize: "20px", textAlign: "end" }}
              >
                {props.isLoggedIn && (
                  <div className="home">
                    <div>
                      {" "}
                      {props.message}, {props.name}
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
            <div className="site-statistic-demo-card">
              <Row gutter={16}>
                <Col span={12}>
                  <Card>
                    <Statistic
                      title="Active Campaigns"
                      value={91}
                      precision={0}
                      valueStyle={{ color: "#3f8600" }}
                      // prefix={<ArrowUpOutlined />}
                      // suffix="%"
                    />
                  </Card>
                </Col>
                <Col span={12}>
                  <Card>
                    <Statistic
                      title="Scheduled Campaigns"
                      value={17}
                      precision={0}
                      valueStyle={{ color: "#cf1322" }}
                      // prefix={<ArrowDownOutlined />}
                      // suffix="%"
                    />
                  </Card>
                </Col>
              </Row>
            </div>
            <br></br>

            <div>
              <Row gutter={16}>
                <Col span={6}>
                  <div>Campaign Status</div>
                </Col>
                <Col span={6}>
                  <div>Campaign Type</div>
                </Col>
                <Col span={6}></Col>
                <Col span={6}></Col>
              </Row>
            </div>
            <div>
              <Row gutter={16}>
                <Col span={6}>
                  <div>
                    <Select
                      mode="multiple"
                      style={{ width: "100%" }}
                      placeholder="select campaign status"
                      defaultValue={["Active"]}
                      onChange={handleChange}
                      optionLabelProp="label"
                    >
                      <Option value="Active" label="Active">
                        <div className="demo-option-label-item">
                          <span role="img" aria-label="Active">
                            Active
                          </span>
                        </div>
                      </Option>
                      <Option value="Expired" label="Expired">
                        <div className="demo-option-label-item">
                          <span role="img" aria-label="Expired">
                            Expired
                          </span>
                        </div>
                      </Option>
                      <Option value="Scheduled" label="Scheduled">
                        <div className="demo-option-label-item">
                          <span role="img" aria-label="Scheduled">
                            Scheduled
                          </span>
                        </div>
                      </Option>
                    </Select>
                  </div>
                </Col>
                <Col span={6}>
                  <div>
                    <Select
                      mode="multiple"
                      style={{ width: "100%" }}
                      placeholder="select campaign type"
                      defaultValue={["In-Store"]}
                      onChange={handleChange}
                      optionLabelProp="label"
                    >
                      <Option value="In-Store" label="In-Store">
                        <div className="demo-option-label-item">
                          <span role="img" aria-label="In-Store">
                            In-Store
                          </span>
                        </div>
                      </Option>
                      <Option value="Digital" label="Digital">
                        <div className="demo-option-label-item">
                          <span role="img" aria-label="Digital">
                            Digital
                          </span>
                        </div>
                      </Option>
                    </Select>
                  </div>
                </Col>
                <Col span={6}>
                  <div>
                    <Tooltip title="Search by ID/Name">
                      <Input placeholder="ID/Name" />
                    </Tooltip>
                  </div>
                </Col>
                <Col span={1}></Col>
                <Col span={2}>
                  <Button type="primary" icon={<SearchOutlined />}>
                    Search
                  </Button>
                </Col>
                <Col span={3}>
                  <DownloadOutlined style={{ fontSize: "30px" }} />
                </Col>
              </Row>
            </div>
            <br></br>
            <div style={{ fontSize: "25px" }}>
          Total campaigns found : {dataSource.length} campaigns
          </div>
          <br></br>
            <div>
          <Table dataSource={dataSource} columns={columns} />
          </div>
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

export default Home;
