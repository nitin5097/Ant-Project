import React, { useState } from "react";
import "./campaign status.scss";
import MenuComponent from "../components/menuComponent";
import HeaderComponent from "../components/headerComponent";
import FooterComponent from "../components/footerComponent";
import {
  Layout,
  Tooltip,
  Select,
  Statistic,
  Card,
  Row,
  Col,
  Button,
  Table,
  Space,
  Form,
} from "antd";
import {
  RocketFilled,
  StopOutlined,
  SearchOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
const { Option } = Select;

const { Content } = Layout;

const data = [
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
    status: "Expired",
    campaignName: "Camp_Aug03_2020",
  },
];

interface HomeProps {
  message: string;
  name: string;
  isLoggedIn: boolean;
}

function CampaignStatus(props: HomeProps) {
  // const [expand, setExpand] = useState(false);
  // const [form] = Form.useForm();

  const [dataSource, setDataSource] = useState(data);
  const [value, setValue] = useState("");

  const columns = [
    {
      title: "Campaign Key",
      dataIndex: "key",
      key: "key",
    },
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

      render: (text: any, record: any) => (
        // render: (text: React.ReactNode) => (
        <Space size="middle">
          <a href="">{<RocketFilled style={{ fontSize: "20px" }} />} /</a>
          <a href=""> {<StopOutlined style={{ fontSize: "20px" }} />}</a>
        </Space>
      ),
    },
  ];

  function statusFilter(value: any) {
    let filteredData: React.SetStateAction<
      {
        key: string;
        campaignType: string;
        createDate: string;
        startDate: string;
        endDate: string;
        status: string;
        campaignName: string;
      }[]
    > = [];
    if (value.length === 0) {
      setDataSource(data);
    } else {
      filteredData = data.filter((entry) => value.includes(entry.status));
      setDataSource(filteredData);
    }
  }

  function typeFilter(value: any) {
    let filteredData: React.SetStateAction<
      {
        key: string;
        campaignType: string;
        createDate: string;
        startDate: string;
        endDate: string;
        status: string;
        campaignName: string;
      }[]
    > = [];
    if (value.length === 0) {
      setDataSource(data);
    } else {
      filteredData = data.filter((entry) => value.includes(entry.campaignType));
      setDataSource(filteredData);
    }
  }

  const onFinish = (values: any) => {
    console.log("Received values from form: ", values);
    // let filteredData: React.SetStateAction<{ key: string; campaignType: string; createDate: string; startDate: string; endDate: string; status: string; campaignName: string; }[]>=[];

    //   filteredData = data.filter(entry =>
    //       values.status.includes(entry.status)
    //   );
    //   setDataSource(filteredData);
  };

  return (
    <Layout>
      <MenuComponent />
      <Layout>
        <HeaderComponent isLoggedIn={true} message={"Welcome"} name={"Admin"} />
        <Content style={{ margin: "24px 16px 0" }}>
          <Form
            name="form_controls"
            onFinish={onFinish}
            initialValues={{
              status: "Active",
              type: "In-Store",
              idName: "",
            }}
          >
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
                      <Form.Item name="status">
                        <Select
                          mode="multiple"
                          style={{ width: "100%" }}
                          placeholder="select campaign status"
                          onChange={statusFilter}
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
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={6}>
                    <div>
                      <Form.Item name="type">
                        <Select
                          mode="multiple"
                          style={{ width: "100%" }}
                          placeholder="select campaign type"
                          onChange={typeFilter}
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
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={6}>
                    <div>
                      <Form.Item name="idName">
                        <Tooltip title="Search by ID/Name">
                          <Input
                            placeholder="ID/Name"
                            value={value}
                            onChange={(e) => {
                              const currValue = e.target.value;
                              setValue(currValue);
                              const filteredData = data.filter((entry) =>
                                entry.campaignName.includes(currValue)
                              );
                              setDataSource(filteredData);
                            }}
                          />
                        </Tooltip>
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={1}></Col>

                  <Col span={2}>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        icon={<SearchOutlined />}
                      >
                        Search
                      </Button>
                    </Form.Item>
                  </Col>
                  <Col span={3}>
                    <DownloadOutlined style={{ fontSize: "30px" }} />
                  </Col>
                </Row>
              </div>
              <br></br>
              <Table columns={columns} dataSource={dataSource} />
            </div>
          </Form>
        </Content>
        <FooterComponent />
      </Layout>
    </Layout>
  );
}

export default CampaignStatus;
