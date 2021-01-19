import React from "react";
import { Image } from "antd";
import { Col, Row } from "antd";
import "./campaign.scss";
import { Select, Cascader } from "antd";
import { Collapse } from "antd";
import { DatePicker, Space } from "antd";
import { InputNumber } from "antd";
import { Button } from "antd";
import { Radio } from "antd";
import { Checkbox, Tooltip } from "antd";
import { Layout } from "antd";
import { Tabs } from "antd";
import barCodeImage from "../../Image/barcode_plain.jpg";
import { Modal } from 'antd';
import MenuComponent from "../components/menuComponent";
import HeaderComponent from "../components/headerComponent";
import FooterComponent from "../components/footerComponent";

import {
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Form, Input} from 'antd';
import { Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const { RangePicker } = DatePicker;
const { TabPane } = Tabs;
const { Option } = Select;
const { Content } = Layout;
const { Panel } = Collapse;

function formatDate(date: string | number | Date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

      return `${year}年 ${month}月 ${day}日`;
}

const areaData = [
  {
    value: "ABC",
    label: "ABC",
    children: [
      {
        value: "Store 1",
        label: "Store 1",
      },
      {
        value: "Store 2",
        label: "Store 2",
      },
    ],
  },
  {
    value: "XYZ",
    label: "XYZ",
    children: [
      {
        value: "Store 3",
        label: "Store 3",
      },
      {
        value: "Store 4",
        label: "Store 4",
      },
    ],
  },
];

const productData = [
  {
    value: "Bread",
    label: "Bread",
    children: [
      {
        value: "White Bread",
        label: "White Bread",
      },
      {
        value: "Brown Bread",
        label: "Brown Bread",
      },
    ],
  },
  {
    value: "Beer",
    label: "Beer",
    children: [
      {
        value: "Suntory",
        label: "Suntory",
      },
      {
        value: "Asahi",
        label: "Asahi",
      },
    ],
  },
];

const { confirm } = Modal;

function showConfirm() {
  confirm({
    title: 'Do you want to submit the request to create a Campaign?',
    icon: <ExclamationCircleOutlined />,
    content: 'A new Campaign will be created after confirming',
    onOk() {
      console.log('OK');
      window.location.href = "/result";
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

function onCascaderChange(value: any) {
  console.log(value);
}

function onChange(date: any, dateString: any) {
  console.log(date, dateString);
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

let breadCategoryData = {
  campaignCategory: "Choose Campaign Category",
  options: ["White-Bread", "Brown-Bread", "Crossiant"],
};

let campaignTypologyData = {
  metadata: {
    typology: [
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
          "Frequency",
          "Unit/Trips",
          "Unit/Shopper",
          "Retention",
          "New Buyer",
        ],
      },
    ],
  },
};
function Campaign(props: HomeProps) {

  const [form] = Form.useForm();

  const printCategory = (value: string) => {
    switch (value) {
      case "White-Bread":
        form.setFieldsValue({ brandCategory: "White Bread" });
        return;
      case "Brown-Bread":
        form.setFieldsValue({ brandCategory: "Brown Bread" });
        return;
      case "Crossiant":
        form.setFieldsValue({ brandCategory: "Crossiant" });
        return;
    }
  };

  const onCheckChange = (value: any) => {
    console.log("checked = ", value);
    switch (value[0]) {
      case "Print Budget":
        form.setFieldsValue({ printBudget: false });
        return;
    }
  }

  const fillBrand = (e: any) => {
    form.setFieldsValue({ brandName: e.target.value });
  };

  const onPrintNumber = (e: any) => {
    form.setFieldsValue({ discountPrice: "¥ " + e + " Off" });
  };

  const imageUpload = (e: any) => {
    form.setFieldsValue({ brandImage: e.thumbUrl });
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Layout>
      <MenuComponent/>
      <Layout>
      <HeaderComponent isLoggedIn={true} message={"Welcome"} name={"Admin"}/>
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
                      <Col span={2}></Col>
                      <Col span={2}>
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
                            <Row gutter={24}>
                              <Col>
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
                              </Col>
                              {categories.category === "Secondary" && (
                                <Col span={24}>
                                  </Col>
                              )}
                            </Row>
                          </div>
                        );
                      }
                    )}
                  </div>
                </Panel>
                <Panel header="Print Trigger" key="3">
                  <div>
                    <Tabs defaultActiveKey="1">
                      <TabPane
                        tab={
                          <span>
                            Fixed Format
                          </span>
                        }
                        key="1"
                      >
                        <Tabs defaultActiveKey="1">
                          <TabPane
                            tab={
                              <span>
                                Transaction based
                              </span>
                            }
                            key="1"
                          >
                            <div>
                              <Radio.Group defaultValue="a" buttonStyle="solid">
                                <Space>
                                  <Radio.Button value="a">Repeat</Radio.Button>
                                  <Radio.Button value="b">Related</Radio.Button>
                                </Space>
                              </Radio.Group>
                            </div>
                          </TabPane>
                          <TabPane
                            tab={
                              <span>
                                Card based
                              </span>
                            }
                            key="2"
                          >
                            <div>
                              <Radio.Group defaultValue="a" buttonStyle="solid">
                                <Space>
                                  <Radio.Button value="a">Heavy</Radio.Button>
                                  <Radio.Button value="b">Middle</Radio.Button>
                                  <Radio.Button value="c">Light</Radio.Button>
                                </Space>
                              </Radio.Group>
                            </div>
                          </TabPane>
                          <TabPane
                            tab={
                              <span>
                                Mixed based
                              </span>
                            }
                            key="3"
                          >
                            <div>
                              <Radio.Group defaultValue="a" buttonStyle="solid">
                                <Space>
                                  <Radio.Button value="a">Repeat</Radio.Button>
                                  <Radio.Button value="b">Related</Radio.Button>
                                </Space>
                              </Radio.Group>
                            </div>
                            <br />
                            <div>
                              <Radio.Group defaultValue="a" buttonStyle="solid">
                                <Space>
                                  <Radio.Button value="a">Heavy</Radio.Button>
                                  <Radio.Button value="b">Middle</Radio.Button>
                                  <Radio.Button value="c">Light</Radio.Button>
                                </Space>
                              </Radio.Group>
                            </div>
                            <br />
                            <div>
                              <Radio.Group defaultValue="a" buttonStyle="solid">
                                <Space>
                                  <Radio.Button value="a">Did Buy</Radio.Button>
                                  <Radio.Button value="b">
                                    Didn't Buy
                                  </Radio.Button>
                                </Space>
                              </Radio.Group>
                            </div>
                          </TabPane>
                        </Tabs>
                      </TabPane>
                      <TabPane
                        tab={
                          <span>
                            Free Format
                          </span>
                        }
                        key="2"
                      >
                        <div className="site-card-wrapper">
                          <Row gutter={16}>
                            <Col span={8}>
                              <div>
                                <label>Period</label>
                              </div>
                              <div>
                                <RangePicker onChange={onChange} />
                              </div>
                            </Col>
                            <Col span={8}>
                              <div>
                                <label>Store</label>
                              </div>
                              <div>
                                <Cascader
                                  options={areaData}
                                  onChange={onCascaderChange}
                                  placeholder="Please Select the Store"
                                  changeOnSelect
                                />
                              </div>
                            </Col>
                            <Col span={8}>
                              <div>
                                <label>Customer</label>
                              </div>
                              <div>
                                <Space>
                                  <Select
                                    placeholder="Gender"
                                    onChange={onChange}
                                    style={{ width: 100 }}
                                  >
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                    <Option value="other">Other</Option>
                                  </Select>
                                  <Select
                                    placeholder="Age"
                                    onChange={onChange}
                                    style={{ width: 100 }}
                                  >
                                    <Option value="1">1-5</Option>
                                    <Option value="6">6-10</Option>
                                    <Option value="11">11-15</Option>
                                    <Option value="16">16-20</Option>
                                    <Option value="21">21-25</Option>
                                    <Option value="26">26-30</Option>
                                  </Select>
                                </Space>
                              </div>
                            </Col>
                            </Row>
                            <br/>
                            <Row gutter={16}>
                            <Col span={8}>
                              <div>
                                <label>Product</label>
                              </div>
                              <div>
                                <Space>
                                <Cascader
                                  options={productData}
                                  onChange={onCascaderChange}
                                  placeholder="Product Category"
                                  changeOnSelect
                                />
                                <InputNumber
                                placeholder="Min"
                                  min={0}
                                  max={1000}
                                  step={1}
                                  onChange={onChangeNumber}
                                />
                                ~
                                <InputNumber
                                placeholder="Max"
                                  min={0}
                                  max={1000}
                                  step={1}
                                  onChange={onChangeNumber}
                                />
                                </Space>
                              </div>
                            </Col>
                          </Row>
                          <br/>
                        </div>
                      </TabPane>
                    </Tabs>
                    {/* <div className="home">
                      <Space>
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
                          Next
                        </Button>
                      </Space>
                    </div> */}
                  </div>
                </Panel>
                <Panel header="Coupon Design" key="4">
                <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 660 }}
          >
            <div className="site-card-wrapper">
              <Row gutter={16}>
                <Col span={6}>
                  <label>Brand Name</label>
                </Col>
                <Col span={6}>
                  <label>Brand Category</label>
                </Col>
                <Col span={6}>
                  <label>Discount Price in JPY</label>
                </Col>
                <Col span={6}>
                  <label>Please Upload Campaign Print</label>
                </Col>
              </Row>
              <br />
              <Row gutter={16}>
                <Col span={4}>
                  <div>
                    <Tooltip title="Enter the Brand name">
                      <Input placeholder="Brand Name" onChange={fillBrand} />
                    </Tooltip>
                  </div>
                </Col>
                <Col span={2} />
                <Col span={6}>
                  <div>
                    <Select
                      defaultValue={breadCategoryData.options[0]}
                      style={{ width: 120 }}
                      onChange={printCategory}
                    >
                      {breadCategoryData.options.map((answer) => {
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
                    <InputNumber
                      min={0}
                      max={10000}
                      step={10}
                      onChange={onPrintNumber}
                    />
                  </div>
                </Col>
                <Col span={6}>
                  <Space
                    direction="vertical"
                    style={{ width: "100%" }}
                    size="large"
                  >
                    <Upload
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture"
                      onPreview={imageUpload}
                    >
                      <Button icon={<UploadOutlined />}>
                        Please upload the image
                      </Button>
                    </Upload>
                  </Space>
                </Col>
              </Row>
              <br />
              <div title="Coupon Design" style={{ fontSize: "20px" }}>
                Coupon design
              </div>
              <br />
              <div
                title="Coupon Design"
                style={{
                  border: "groove",
                  fontSize: "20px",
                  width: "60%",
                  height: "260px",
                }}
              >
                <Form
                  {...layout}
                  form={form}
                  name="control-hooks"
                  onFinish={onFinish}
                >
                  <Row gutter={26}>
                    <Col span={8}>
                      <Form.Item
                        style={{ fontSize: "30px", paddingLeft: "10px" , paddingTop: "10px" }}
                        name="brandName"
                      >
                        <Input style={{ width: "200px",fontSize: "25px", color:"red"}} />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item
                        style={{ fontSize: "30px", paddingLeft: "20px", paddingTop: "10px" }}
                        name="brandCategory"
                      >
                        <Input style={{ width: "150px", fontSize: "20px"}} />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item
                        style={{ fontSize: "30px", paddingLeft: "10px" }}
                      >
                        <label style={{ width: "200px", fontSize: "13px",  color:"grey",
                            fontWeight:"bolder", paddingLeft: "10px"
                            }}>
                          {formatDate(new Date())}
                        </label>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={26}>
                    <Col span={8}>
                      <Form.Item
                        style={{ fontSize: "30px", paddingLeft: "10px" }}
                        name="brandImage"
                        valuePropName="src"
                      >
                        <Image
                          style={{ height: "140px", width: "200px" }}
                        ></Image>
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Row>
                        <label style={{ width: "200px", paddingLeft: "30px" }}>
                          XXXXXXXXXXXXX
                        </label>
                      </Row>
                      <Row>
                        <Form.Item
                          style={{ fontSize: "30px", paddingLeft: "20px" }}
                          name="discountPrice"
                        >
                          <Input style={{ width: "150px", fontSize: "25px"}}></Input>
                        </Form.Item>
                      </Row>
                      <Row>
                        <label style={{ width: "200px", paddingLeft: "30px" }}>
                          XXXXXXXXXXXXX
                        </label>
                      </Row>
                    </Col>
                    <Col span={8}>
                      <Row>
                        <label
                          style={{
                            width: "180px",
                            fontSize: "20px",
                            paddingLeft: "10px",
                            color:"grey",
                            fontWeight:"bolder"
                          }}
                        >
                          Checkout Markets
                        </label>
                      </Row>
                      <Row>
                        <Form.Item
                          style={{ fontSize: "30px", paddingLeft: "10px" }}
                        >
                          <Image
                            style={{ height: "140px", width: "170px" }}
                            src={barCodeImage}
                          ></Image>
                        </Form.Item>
                      </Row>
                    </Col>
                  </Row>

                  
                </Form>
              </div>
            </div>
          </div>
                </Panel>
                <Panel header="Approve Budget" key="5">
                <Form
      name="kpi_list"
      className="kpi_list"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
                  <div>
                  
                    <div>
                      <label>{kpiListData.kpiType}</label>
                    </div>
                    {/* <Form.Item name="printBudgetCheck" valuePropName="checked" noStyle>
          <Checkbox onChange={onCheckChange}>Print Budget</Checkbox>
        </Form.Item>
        <Form.Item name="redemptionBudgetCheck" valuePropName="checked" noStyle>
          <Checkbox>Redemption Budget</Checkbox>
        </Form.Item>
        <Form.Item name="totalBudgetCheck" valuePropName="checked" noStyle>
          <Checkbox>Total Budget</Checkbox>
        </Form.Item>
        <Form.Item name="redemptionContributionCheck" valuePropName="checked" noStyle>
          <Checkbox>Redemption Contribution</Checkbox>
        </Form.Item>
        <Form.Item name="trialCheck" valuePropName="checked" noStyle>
          <Checkbox>Trial</Checkbox>
        </Form.Item> */}
                    
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
                      <Form.Item name="printBudget" valuePropName="visible">
                        <div>
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
                        
                        </Form.Item>
                        
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
                    <Row gutter={24}>
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
                      <Row gutter={16}>
                            <Col span={8}></Col>
                            <Col span={8}>
                        <Space>
                          {/* <Button
                            type="primary"
                            style={{ verticalAlign: "End", width: 80 }}
                          >
                            Previous
                          </Button> */}

                          <Button
                            type="primary"
                            style={{ verticalAlign: "End", width: 80 }}
                            onClick={showConfirm}
                          >
                            Approve
                          </Button>
                        </Space>
                        </Col>
                        </Row>
                        
                      </Col>
                    </Row>
                  </div>
                  </Form>
                </Panel>
              </Collapse>
            </div>
          </div>
        </Content>
        <FooterComponent/>
      </Layout>
    </Layout>
  );
}

export default Campaign;
