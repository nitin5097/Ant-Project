import React from "react";
import {
  Input,
  InputNumber,
  Result,
  Space,
  Tooltip,
  Form,
  Layout,
  Menu,
  Image,
  Select,
  Button,
} from "antd";
import "./campaignDesign.scss";
import { Col, Row } from "antd";
import { Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import {
  PlusCircleOutlined,
  LinkedinOutlined,
  GlobalOutlined,
  FacebookOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import logoImage from "../../Image/logo_white.png";
import { Width } from "devextreme-react/chart";
const { Header, Footer, Sider, Content } = Layout;
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

let campaignCategoryData = {
  campaignCategory: "Choose Campaign Category",
  options: ["White-Bread", "Brown-Bread", "Crossiant"],
};

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info: { file: { status: string; name: any }; fileList: any }) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  beforeUpload(info: { file: { type: string; size: number } }) {
    const isJpgOrPng =
    info.file.type === "image/jpg" || info.file.type === "image/jpeg" || info.file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = info.file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  },
};

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

// function onChangeNumber(value: any) {
//   console.log("changed", value);
// }

interface HomeProps {
  message: string;
  name: string;
  isLoggedIn: boolean;
}

function CampaignDesign(props: HomeProps) {
  const [form] = Form.useForm();

  const handleChange = (value: string) => {
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

  const fillBrand = (e: any) => {
    form.setFieldsValue({ brandName: e.target.value });
  };

  const onChangeNumber = (e: any) => {
    form.setFieldsValue({ discountPrice: e });
  };
  
  const imageUpload = (e: any) => {
    form.setFieldsValue({ brandImage: e.target.value });
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: "Template Category",
    });
  };

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
                      <Input
                        placeholder="Brand Name"
                        onChange={fillBrand}
                      />
                    </Tooltip>
                  </div>
                </Col>
                <Col span={2} />
                <Col span={6}>
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
                <Col span={6}>
                  <Upload {...props}>
                    <Button icon={<UploadOutlined />}>
                      Click to Upload Image
                    </Button>
                  </Upload>
                </Col>
              </Row>
              <br />
              <div title="Coupon Design" style={{ fontSize: "20px" }}>
                {" "}
                Coupon design
              </div>
              <br />
              <div
                title="Coupon Design"
                style={{
                  border: "groove",
                  fontSize: "20px",
                  width: "50%",
                  height: "250px",
                }}
              >
                <Form
                  {...layout}
                  form={form}
                  name="control-hooks"
                  onFinish={onFinish}
                >
                  <br/>
                  <Row gutter={26}>
                    <Col span={8}>
                      <Form.Item style={{fontSize: "30px", paddingLeft:"10px"}} name="brandName">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item style={{fontSize: "30px"}} name="brandCategory">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={4}>
                      <Form.Item style={{fontSize: "30px"}} name="discountPrice">
                        <Input/>
                      </Form.Item>
                    </Col>
                  </Row>
                  <br/>
                  <Row gutter={26}>
                    <Col span={8}>
                      <Form.Item style={{fontSize: "30px", paddingLeft:"10px"}} name="brandImage">
                        <image></image>
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item style={{fontSize: "30px"}}>
                        <label>{new Date().toDateString()}</label>
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item style={{fontSize: "30px"}}>
                        <label>Bar code</label>
                      </Form.Item>
                    </Col>
                  </Row>

                  {/* <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button>
      </Form.Item> */}
                </Form>
              </div>
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

export default CampaignDesign;
