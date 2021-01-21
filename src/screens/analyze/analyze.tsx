import React from "react";
import "./analyze.scss";
import MenuComponent from "../components/menuComponent";
import HeaderComponent from "../components/headerComponent";
import FooterComponent from "../components/footerComponent";
import { Layout, Row, Col } from "antd";
import Tree from 'react-d3-tree';
const { Content } = Layout;
const salesData: { x: string; y: number }[] = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}

const salesChart = {
  name: 'Sales',
  attributes: {
    'actual results/Yoy ': '4,705,608 / 104.9%',
  },
  children: [
    {
      name: 'Customers',
      attributes: {
        'actual results/Yoy ': '1,851,054 / 98.9%',
      },
    },
    {
      name: 'Sales per Order',
      attributes: {
        'actual results/Yoy ': '2542.1 / 106%',
      },
      children: [
        {
          name: 'Product Per Order',
          attributes: {
            'actual results/Yoy ': '10.2 / 105.7%',
          }, 
        },
        {
          name: 'Sales Per Product',
          attributes: {
            'actual results/Yoy ': '248.4 / 100.3%',
          },
        },
      ],
    },
  ],
};

interface HomeProps {
  message: string;
  name: string;
  isLoggedIn: boolean;
}

function Analyze(props: HomeProps) {
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
                  Summary Report
                </div>
              </Col>
              <Col span={15}>
              <div
                  style={{
                    padding: "5px",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  Sales Trend
                </div>
                <iframe
                  title="Sales trend"
                  width="100%"
                  height="500"
                  src="https://app.powerbi.com/reportEmbed?reportId=5b2ce1f6-3441-4f41-bd58-6b5d83d48abd&autoAuth=true&ctid=2eddc39c-2996-4c2a-ab97-f767c39ea155&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLWVhc3QyLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9"
                ></iframe>
              </Col>
              <Col span={9}>
                
              <div
                  style={{
                    padding: "5px",
                    textAlign: "center",
                    fontSize: "20px"
                  }}
                >
                  KPI Tree
                </div>
                <br></br>
              <div id="treeWrapper" style={{  width: '100%', height: '80%', fontKerning: "normal"}}>
      <Tree data={salesChart} />
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
                  Trade Area Analysis
                </div>
              </Col>
              <Col span={24}>
                <iframe
                  title="Sales By Location"
                  width="100%"
                  height="500"
                  src="https://app.powerbi.com/reportEmbed?reportId=99550f66-b0d0-4701-9055-9fec5ddc1ed0&autoAuth=true&ctid=2eddc39c-2996-4c2a-ab97-f767c39ea155&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLWVhc3QyLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9"
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
                  Category Sales
                </div>
              </Col>
              <Col span={24}>
                <iframe
                  title="Sales By Category"
                  width="100%"
                  height="500"
                  src="https://app.powerbi.com/reportEmbed?reportId=3bd7d5aa-8425-4576-bf59-6aa5555fd5a2&autoAuth=true&ctid=2eddc39c-2996-4c2a-ab97-f767c39ea155&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLWVhc3QyLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9"
                ></iframe>
              </Col>
            </Row>
          </div>
        </Content>
        <FooterComponent />
      </Layout>
    </Layout>
  );
}

export default Analyze;
