import React from "react";
import MenuComponent from "../components/menuComponent";
import HeaderComponent from "../components/headerComponent";
import FooterComponent from "../components/footerComponent";
import { Input } from "antd";
import { Col, Row } from "antd";
import "./campaignDetail.scss";
import {Slider } from "antd";
import { InputNumber } from "antd";
import { Layout} from "antd";
import { Pie, TimelineChart } from "ant-design-pro/lib/Charts";

const { Content } = Layout;

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

interface HomeProps {
  message: string;
  name: string;
  isLoggedIn: boolean;
}

function CampaignDetail(props: HomeProps) {
  return (
    <Layout>
      <MenuComponent/>
      <Layout>
      <HeaderComponent isLoggedIn={true} message={"Welcome"} name={"Admin"}/>
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
            </div>
            <br />
            <div>
              <div style={{ fontWeight: "bold" }}>Campaign Typology</div>
              <div className="site-card-wrapper">
                <Row gutter={26}>
                  
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
        <FooterComponent/>
      </Layout>
    </Layout>
  );
}

export default CampaignDetail;
