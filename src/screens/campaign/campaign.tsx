import React from "react";
import { Image } from "antd";
import { Col, Row } from "antd";
import "./campaign.scss";
import { Select } from "antd";
import { Collapse } from "antd";
import { DatePicker, Space } from "antd";
import { InputNumber } from "antd";
import { Button } from "antd";
import { Radio } from "antd";
import { Checkbox } from "antd";
import { Layout, Menu } from "antd";
import {
  PlusCircleOutlined,
  LinkedinOutlined,
  GlobalOutlined,
  FacebookOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import logoImage from "../../Image/logo_white.png";

const { Option } = Select;
const { Header, Footer, Sider, Content } = Layout;
const { Panel } = Collapse;

function onChange(date: any, dateString: any) {
  console.log(date, dateString);
}

function onCheckChange(checkedValues: any) {
  console.log("checked = ", checkedValues);
}

function handleChange(value: any) {
  console.log(`selected ${value}`);
}

function callback(key: any) {
  console.log(key);
}

function onChangeNumber(value: any) {
  console.log("changed", value);
}

function signOut(key: any) {
  console.log(key);
  window.location.href = "/login";
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

let kpiListData = {
  kpiType: "Choose KPIs",
  options: [
    "Print Budget",
    "Redemption Budget",
    "Total Budget",
    "Redemption Contribution",
    "Trail",
  ],
};

let campaignTypeData = {
  campaignType: "Choose Campaign type",
  options: ["In-Store", "Digital"],
};

let campaignListData = {
  campaignList: "Choose Existing Campaigns",
  options: ["Cmp_Jan_01", "Cmp_Apr_01", "Cmp_Aug_01", "Cmp_Dec_01"],
};

let campaignCategoryData = {
  campaignCategory: "Choose Campaign Category",
  options: ["Bread", "Onigiri", "Beer", "Wine"],
};

let campaignTypologyData = {
  metadata: {
    typology: [
      {
        category: "Promoted Product",
        options: ["Leader", "Innovation", "Challenger", "Other"],
      },
      {
        category: "Pricipal",
        options: [
          "Volumes",
          "Incremental Volumes",
          "Trials",
          "Incremental Trials",
          "Mix",
        ],
      },
      {
        category: "Secondary",
        options: [
          "Frequesncy",
          "Unit/Trips",
          "Unit/Shopper",
          "Retention",
          "New Buyer",
        ],
      },
      {
        category: "Category Health",
        options: ["Growing", "Stable", "Decreasing"],
      },
      {
        category: "Seasonability",
        options: ["Winter", "Summer", "NO"],
      },
    ],
  },
};
function Campaign(props: HomeProps) {
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
            onClick={homeReturn}
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
                  <a onClick={homeReturn}>
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
            <div>
              <Collapse defaultActiveKey={["1"]} onChange={callback}>
                <Panel header="Choose Campaign Industrial and cycle" key="1">
                  <div className="site-card-wrapper">
                    <Row gutter={16}>
                      <Col span={6}>
                        <div>
                          <label>{campaignTypeData.campaignType}</label>
                        </div>
                        <div>
                          <Select
                            defaultValue={campaignTypeData.options[0]}
                            style={{ width: 120 }}
                            onChange={handleChange}
                          >
                            {campaignTypeData.options.map((answer) => {
                              return (
                                <Option key={answer} value={answer}>
                                  {answer}
                                </Option>
                              );
                            })}
                          </Select>
                        </div>
                      </Col>
                      <Col span={6}>
                        <div>
                          <label>{campaignListData.campaignList}</label>
                        </div>
                        <div>
                          <Select
                            defaultValue={campaignListData.options[0]}
                            style={{ width: 120 }}
                            onChange={handleChange}
                          >
                            {campaignListData.options.map((answer) => {
                              return (
                                <Option key={answer} value={answer}>
                                  {answer}
                                </Option>
                              );
                            })}
                          </Select>
                        </div>
                      </Col>
                      <Col span={6}>
                        <div>
                          <label>{campaignCategoryData.campaignCategory}</label>
                        </div>
                        <div>
                          <Select
                            defaultValue={campaignCategoryData.options[0]}
                            style={{ width: 120 }}
                            onChange={handleChange}
                          >
                            {campaignCategoryData.options.map((answer) => {
                              return (
                                <Option key={answer} value={answer}>
                                  {answer}
                                </Option>
                              );
                            })}
                          </Select>
                        </div>
                      </Col>
                    </Row>
                    <br></br>
                    <Row gutter={16}>
                      <Col span={6}>
                        <div>Start Date</div>
                      </Col>
                      <Col span={6}>
                        <div>End Date</div>
                      </Col>
                      <Col span={6}>
                        <div>
                          <label>Discount Amount (In JPY)</label>
                        </div>
                      </Col>
                      <Col span={6}></Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={6}>
                        <div>
                          <Space direction="vertical">
                            <DatePicker onChange={onChange} />
                          </Space>
                        </div>
                      </Col>
                      <Col span={6}>
                        <div>
                          <Space direction="vertical">
                            <DatePicker onChange={onChange} />
                          </Space>
                        </div>
                      </Col>
                      <Col span={6}>
                        <div>
                          <InputNumber
                            min={0}
                            max={10000}
                            step={10}
                            onChange={onChangeNumber}
                          />
                        </div>
                      </Col>
                      <Col span={2}>
                      </Col>
                      <Col span={4}>
                        <Button type="primary">Next</Button>
                      </Col>
                    </Row>
                  </div>
                </Panel>

                <Panel header="Choose Campaign Typology" key="2">
                  <div>
                    {campaignTypologyData.metadata.typology.map(
                      (categories) => {
                        return (
                          <div>
                            <br></br>
                            <div>
                              <label>{categories.category}</label>
                            </div>
                            <Radio.Group
                              defaultValue={categories.options[0]}
                              buttonStyle="solid"
                              key={categories.category}
                              name={categories.category}
                            >
                              {categories.options.map((option) => {
                                return (
                                  <Radio.Button value={option}>
                                    {option}
                                  </Radio.Button>
                                );
                              })}
                            </Radio.Group>
                          </div>
                        );
                      }
                    )}
                  </div>
                </Panel>
                <Panel header="Approve Budget" key="3">
                  <div>
                    <div>
                      <label>{kpiListData.kpiType}</label>
                    </div>
                    <Checkbox.Group
                      options={kpiListData.options}
                      onChange={onCheckChange}
                    />
                  </div>
                  <br></br>
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
                                <InputNumber
                                  min={0}
                                  max={10000}
                                  step={10}
                                  onChange={onChangeNumber}
                                />
                              </div>
                            </Col>
                            <Col span={8}>
                              <div>
                                <label>Sold </label>
                              </div>
                              <div>
                                <InputNumber
                                  min={0}
                                  max={10000}
                                  step={10}
                                  onChange={onChangeNumber}
                                />
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
                                <InputNumber
                                  min={0}
                                  max={10000}
                                  step={10}
                                  onChange={onChangeNumber}
                                />
                              </div>
                            </Col>
                            <Col span={8}>
                              <div>
                                <label>Sold </label>
                              </div>
                              <div>
                                <InputNumber
                                  min={0}
                                  max={10000}
                                  step={10}
                                  onChange={onChangeNumber}
                                />
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                    </Row>
                    <br></br>
                    <Row gutter={20}>
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
                                <InputNumber
                                  min={0}
                                  max={10000}
                                  step={10}
                                  onChange={onChangeNumber}
                                />
                              </div>
                            </Col>
                            <Col span={8}>
                              <div>
                                <label>Sold </label>
                              </div>
                              <div>
                                <InputNumber
                                  min={0}
                                  max={10000}
                                  step={10}
                                  onChange={onChangeNumber}
                                />
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
                                <InputNumber
                                  min={0}
                                  max={100}
                                  step={1}
                                  onChange={onChangeNumber}
                                />
                              </div>
                            </Col>
                            <Col span={8}>
                              <div>
                                <label>Sold </label>
                              </div>
                              <div>
                                <InputNumber
                                  min={0}
                                  max={100}
                                  step={1}
                                  onChange={onChangeNumber}
                                />
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
                                <InputNumber
                                  min={0}
                                  max={10000}
                                  step={10}
                                  onChange={onChangeNumber}
                                />
                              </div>
                            </Col>
                            <Col span={8}>
                              <div>
                                <label>Sold </label>
                              </div>
                              <div>
                                <InputNumber
                                  min={0}
                                  max={10000}
                                  step={10}
                                  onChange={onChangeNumber}
                                />
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      <Col span={6}>
                        <Button
                          type="primary"
                          style={{ verticalAlign: "End", width: 80 }}
                        >
                          Previous
                        </Button>

                        <Button
                          type="primary"
                          style={{ verticalAlign: "End", width: 80 }}
                        >
                          Approve
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Panel>
              </Collapse>
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

export default Campaign;
