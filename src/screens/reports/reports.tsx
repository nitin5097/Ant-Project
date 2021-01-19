import React from "react";
import "./reports.scss";
import MenuComponent from "../components/menuComponent";
import HeaderComponent from "../components/headerComponent";
import FooterComponent from "../components/footerComponent";
import { Layout, Card, Row, Col } from "antd";

const { Content } = Layout;
const salesData: { x: string; y: number }[] = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}

interface HomeProps {
  message: string;
  name: string;
  isLoggedIn: boolean;
}

function Reports(props: HomeProps) {
  return (
    <Layout>
      <MenuComponent />
      <Layout>
        <HeaderComponent isLoggedIn={true} message={"Welcome"} name={"Admin"} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 660 }}
          >
            <br />

            <Row>
              <Col span={24}>
                <div
                  style={{
                    background: "#c2f8ff",
                    padding: "5px",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  History Of Print/Redeem
                </div>
              </Col>
              <Col span={24}>
                <iframe
                  width="100%"
                  height="500"
                  src="https://app.powerbi.com/reportEmbed?reportId=80658d2b-d6ba-49f8-8437-b1cd56377f3f&autoAuth=true&ctid=2eddc39c-2996-4c2a-ab97-f767c39ea155&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLWVhc3QyLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9"
                ></iframe>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div
                  style={{
                    background: "#c2f8ff",
                    padding: "5px",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  Results
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div style={{ background: "#ECECEC", padding: "5px" }}>
                  <Row
                    gutter={16}
                    style={{
                      padding: "5px",
                      textAlign: "center",
                      fontSize: "30px",
                    }}
                  >
                    <Col span={8}>
                      <Card title="# Prints" bordered={false}>
                        100,000
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card title="# Redeem" bordered={false}>
                        10,000
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card title="Redemption Rate" bordered={false}>
                        10 %
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div style={{ background: "#ECECEC", padding: "5px" }}>
                  <Row
                    gutter={16}
                    style={{
                      padding: "5px",
                      textAlign: "center",
                      fontSize: "30px",
                    }}
                  >
                    <Col span={8}>
                      <Card title="¥ Prints" bordered={false}>
                        500,000
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card title="¥ Redeem" bordered={false}>
                        200,000
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card title="¥ Total" bordered={false}>
                        700,000
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div style={{ background: "#ECECEC", padding: "5px" }}>
                  <Row
                    gutter={16}
                    style={{
                      padding: "5px",
                      textAlign: "center",
                      fontSize: "30px",
                    }}
                  >
                    <Col span={8}>
                      <Card title="ROI" bordered={false}>
                        2.5
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div
                  style={{
                    background: "#c2f8ff",
                    padding: "5px",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  Sales Trend
                </div>
              </Col>
              <Col span={24}>
                <div>
                  <iframe
                    width="100%"
                    height="500"
                    src="https://app.powerbi.com/reportEmbed?reportId=d1203688-5eeb-498c-ab25-8164b97e16e0&autoAuth=true&ctid=2eddc39c-2996-4c2a-ab97-f767c39ea155&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLWVhc3QyLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9"
                  ></iframe>
                </div>
              </Col>
            </Row>
          </div>
        </Content>
        <FooterComponent />
      </Layout>
    </Layout>
  );
}

export default Reports;
