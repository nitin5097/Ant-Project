import React from "react";
import { Image, Input, Space } from "antd";
import { Col, Row } from "antd";
import "./campaignDetail.scss";
import {Slider } from "antd";
import { InputNumber } from "antd";
import { Layout, Menu } from "antd";
import DescriptionList from "ant-design-pro/lib/DescriptionList";
import { Pie, TimelineChart } from "ant-design-pro/lib/Charts";
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

const chartData: { x: number; y1: number; y2?: number | undefined}[] = [];
for (let i = 0; i < 20; i += 1) {
  chartData.push({
    x: new Date().getTime() + 1000 * 60 * 30 * i,
    y1: Math.floor(Math.random() * 100) + 1000,
    y2: Math.floor(Math.random() * 100) + 10,
  });
}

const redemptionScore = {
  0: "0",
  40: "Redemption Used: 1100",
  100: {
    style: {
      color: "#f50",
    },
    label: <strong>2600</strong>,
  },
};

const printScore = {
  0: "0",
  50: "Number of Prints: 10000",
  100: {
    style: {
      color: "#f50",
    },
    label: <strong>20000</strong>,
  },
};

let campaignDataTemp = {
  info: {
    detail: {
      General: [
        {
          "Start Date": "01/09/2020",
          "End Date": "01/10/2020",
          "Campaign Status": "Active",
          "Campaign Type": "In-Store",
          "Distribution Capping": "2600 Redemptions",
        },
      ],
    },
  },
};

let campaignData = {
  info: [
    {
      General: {
        "Create Date": "01/09/2020",
        "Start Date": "01/09/2020",
        "End Date": "01/10/2020",
        Status: "Active",
        "Campaign Type": "In-Store",
        "Distribution Capping": "2600 Redemptions",
      },
      "Campaign Typology": [
        {
          "Promoted Product": "Leader",
          "Objective Principal": "Volumes",
          "Objective Secondary": "Frequency",
          "Category Health": "Growing",
          Seasonability: "Winter",
        },
      ],
    },
  ],
};

function signOut(key: any) {
  console.log(key);
  window.location.href = "/login";
}

function homeReturn(key: any) {
  console.log(key);
  window.location.href = "/";
}
function campaignReturn(key: any) {
  console.log(key);
  window.location.href = "/campaign";
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

function CampaignDetail(props: HomeProps) {
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
          <br></br>

          <div style={{ textAlign: "center", fontSize: "25px" }}>
            Cmp_Apr_01
          </div>
          <br></br>
          <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
            <div>
              <Slider disabled defaultValue={40} marks={redemptionScore} />
            </div>
            <br></br>
            <div>
              <Row gutter={16}>
                <Col span={8}>01/09/2020</Col>
                <Col span={16} style={{ textAlign: "end" }}>
                  01/10/2020
                </Col>
              </Row>
            </div>
            <br></br>
            <div>
              <Slider disabled defaultValue={50} marks={printScore} />
            </div>
          </div>
          <div>
            {/* {Object.keys(campaignInfoSection1.camp_info).map(key => {
              return (
                <DescriptionList title={key}>
                  {Object.keys(key).map(
                    (key1,value) => {
                      return (
                        <Description term={key1}>
                         {key1}
                        </Description>
                      );
                    }
                  )}
                </DescriptionList>
              );
            })} */}

            {/* {Object.keys(campaignInfoSection1.camp_info).map(key => {
              return (
                <Descriptions title={key}>
                  {Object.keys(campaignInfoSection1.camp_info.General_info).map(
                    key1 => {
                      return (
                        <Descriptions.Item label={key1}>
                         {campaignInfoSection1.camp_info.General_info[key1]}
                          
                          {key1}
                        </Descriptions.Item>
                      );
                    }
                  )}
                </Descriptions>
              );
            })} */}
          </div>

          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 660 }}
          >
            <div>
              <div style={{ fontWeight: "bold" }}>General</div>
              <div className="site-card-wrapper">
                <Row gutter={26}>
                  <Col span={4}>
                    <div>
                      <label>Create Date</label>
                    </div>
                    <div>
                      <Input disabled value={"01/09/2020"} />
                    </div>
                  </Col>
                  <Col span={4}>
                    <div>
                      <label>Start Date</label>
                    </div>
                    <div>
                      <Input disabled value={"01/09/2020"} />
                    </div>
                  </Col>
                  <Col span={4}>
                    <div>
                      <label>End Date</label>
                    </div>
                    <div>
                      <Input disabled value={"01/10/2020"} />
                    </div>
                  </Col>
                  <Col span={4}>
                    <div>
                      <label>Status</label>
                    </div>
                    <div>
                      <Input disabled value={"Active"} />
                    </div>
                  </Col>
                  <Col span={4}>
                    <div>
                      <label>Campaign Type</label>
                    </div>
                    <div>
                      <Input disabled value={"In-Store"} />
                    </div>
                  </Col>
                  <Col span={4}>
                    <div>
                      <label>Distribution Capping</label>
                    </div>
                    <div>
                      <Input disabled value={"2600 Redemptions"} />
                    </div>
                  </Col>
                </Row>
              </div>

              {/* <DescriptionList
              size="large"
              title="General"
              style={{ fontWeight: "bold" }}
              layout="vertical"
            >
              <Description term="Create Date" style={{ fontWeight: "normal" }}>01/09/2020</Description>
              <Description term="Start Date" style={{ fontWeight: "normal" }}>01/09/2020</Description>
              <Description term="End Date" style={{ fontWeight: "normal" }}>01/10/2020</Description>              
              <Description term="Status" style={{ fontWeight: "normal" }}>Active</Description>
              <Description term="Campaign Type" style={{ fontWeight: "normal" }}>In-Store</Description>
              <Description term="Distribution Capping" style={{ fontWeight: "normal" }}>2600 Redemptions</Description>
            </DescriptionList> */}
            </div>
            <br />
            <div>
              <div style={{ fontWeight: "bold" }}>Campaign Typology</div>
              <div className="site-card-wrapper">
                <Row gutter={26}>
                  <Col span={4}>
                    <div>
                      <label>Promoted Product</label>
                    </div>
                    <div>
                      <Input disabled value={"Leader"} />
                    </div>
                  </Col>
                  <Col span={4}>
                    <div>
                      <label>Objective Principal</label>
                    </div>
                    <div>
                      <Input disabled value={"Volumes"} />
                    </div>
                  </Col>
                  <Col span={4}>
                    <div>
                      <label>Objective Secondary</label>
                    </div>
                    <div>
                      <Input disabled value={"Volume"} />
                    </div>
                  </Col>
                  <Col span={4}>
                    <div>
                      <label>Category Health</label>
                    </div>
                    <div>
                      <Input disabled value={"Growing"} />
                    </div>
                  </Col>
                  <Col span={4}>
                    <div>
                      <label>Seasonability</label>
                    </div>
                    <div>
                      <Input disabled value={"Winter"} />
                    </div>
                  </Col>
                  <Col span={4}></Col>
                </Row>
              </div>
            </div>
            <br></br>
            <div>
              <br />
              <div style={{ fontWeight: "bold" }}>Campaign Monitoring</div>
              <br />
              <div>
                <Row gutter={20}>
                  <Col span={3}>
                    <div>Sold Budget</div>
                  </Col>
                  <Col span={3}>
                    <div>Set-up Budget</div>
                  </Col>
                </Row>
                <Row gutter={20}>
                  <Col span={1}>
                    <div>
                      <Input style={{ background: "#f7f5f5" }} />
                    </div>
                  </Col>
                  <Col span={2}></Col>

                  <Col span={1}>
                    <div>
                      <Input style={{ background: "#1890ff" }} />
                    </div>
                  </Col>
                </Row>
              </div>
              <br />
              <div className="site-card-wrapper">
                <Row gutter={16}>
                  <Col span={6}>
                    <div className="totoalContacts">
                      <label>Total Contacts</label>
                    </div>
                    <div className="site-card-wrapper">
                      <Row gutter={16}>
                        <Col span={8}>
                          <div>
                            <label>Setup </label>
                          </div>
                          <div>
                            <InputNumber disabled value={4233} />
                          </div>
                        </Col>
                        <Col span={8}>
                          <div>
                            <label>Sold </label>
                          </div>
                          <div>
                            <InputNumber value={2233} disabled />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col span={6}>
                    <div className="printBudget">
                      <label>Print Budget In JPY</label>
                    </div>
                    <div className="site-card-wrapper">
                      <Row gutter={16}>
                        <Col span={8}>
                          <div>
                            <label>Setup </label>
                          </div>
                          <div>
                            <InputNumber precision={0} disabled value={53341} />
                          </div>
                        </Col>
                        <Col span={8}>
                          <div>
                            <label>Sold </label>
                          </div>
                          <div>
                            <InputNumber precision={0} disabled value={53341} />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col span={6}>
                    <div className="redemptionBudget">
                      <label>Redemption Budget In JPY</label>
                    </div>
                    <div className="site-card-wrapper">
                      <Row gutter={16}>
                        <Col span={8}>
                          <div>
                            <label>Setup </label>
                          </div>
                          <div>
                            <InputNumber precision={0} disabled value={22532} />
                          </div>
                        </Col>
                        <Col span={8}>
                          <div>
                            <label>Sold </label>
                          </div>
                          <div>
                            <InputNumber precision={0} disabled value={22532} />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>

                  <Col span={6}>
                    <div className="totalBudget">
                      <label>Total Budget In JPY</label>
                    </div>
                    <div className="site-card-wrapper">
                      <Row gutter={16}>
                        <Col span={8}>
                          <div>
                            <label>Setup </label>
                          </div>
                          <div>
                            <InputNumber precision={0} disabled value={82031} />
                          </div>
                        </Col>
                        <Col span={8}>
                          <div>
                            <label>Sold </label>
                          </div>
                          <div>
                            <InputNumber precision={0} disabled value={82031} />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col span={6}>
                    <div className="redemptionContribution">
                      <label>Redemption Contribution in %</label>
                    </div>
                    <div className="site-card-wrapper">
                      <Row gutter={16}>
                        <Col span={8}>
                          <div>
                            <label>Setup </label>
                          </div>
                          <div>
                            <InputNumber precision={0} disabled value={31} />
                          </div>
                        </Col>
                        <Col span={8}>
                          <div>
                            <label>Sold </label>
                          </div>
                          <div>
                            <InputNumber precision={0} disabled value={31} />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col span={6}>
                    <div className="Trial">
                      <label>trial In JPY</label>
                    </div>
                    <div className="site-card-wrapper">
                      <Row gutter={16}>
                        <Col span={8}>
                          <div>
                            <label>Setup </label>
                          </div>
                          <div>
                            <InputNumber precision={0} disabled value={42031} />
                          </div>
                        </Col>
                        <Col span={8}>
                          <div>
                            <label>Sold </label>
                          </div>
                          <div>
                            <InputNumber precision={0} disabled value={42031} />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col span={6}></Col>
                </Row>
              </div>
              <div className="site-card-wrapper">
                <Row gutter={20}>
                  <Col span={6}>
                    <div>
                      <Pie
                        percent={50}
                        subTitle="Print Budget"
                        total="50%"
                        height={140}
                      />
                    </div>
                  </Col>
                  <Col span={6}>
                    <div>
                      <Pie
                        percent={60}
                        subTitle="Redemption Budget"
                        total="60%"
                        height={140}
                      />
                    </div>
                  </Col>
                  <Col span={6}>
                    <div>
                      <Pie
                        percent={70}
                        subTitle="Total Budget"
                        total="70%"
                        height={140}
                      />
                    </div>
                  </Col>
                  <Col span={6}>
                    <div>
                      <Pie
                        percent={60}
                        subTitle="Redemption Contibution"
                        total="60%"
                        height={140}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="site-card-wrapper">
                <TimelineChart height={200} data={chartData} titleMap={{ y1: 'Setup', y2: 'Sold'}} />
              </div>
            </div>

            <div></div>
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

export default CampaignDetail;
