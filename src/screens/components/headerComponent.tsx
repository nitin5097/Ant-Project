import React from "react";
import {
  Layout, Space,
} from "antd";
import {
  PlusCircleOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
const { Header } = Layout;
function campaignReturn(key: any) {
    console.log(key);
    window.location.href = "/campaign";
  }
  
  function homeReturn(key: any) {
    console.log(key);
    window.location.href = "/dashboard";
  }

  function returnAnalyze(key: any) {
    console.log(key);
    window.location.href = "/analyze";
  }
  
  interface HomeProps {
    message: string;
    name: string;
    isLoggedIn: boolean;
  }

function returnReports(key: any) {
  console.log(key);
  window.location.href = "/reports";
}

function HeaderComponent(props: HomeProps) {
    return (
<Header
          className="site-layout-sub-header-background"
          style={{ background: "White", padding: 0 }}
        >
          <div>
            <div className="ant-row">
              <div className="ant-col ant-col-4"></div>
              <div className="ant-col ant-col-2">
                <div style={{ fontSize: "20px", textAlign: "left" }}>
                  <a onClick={returnAnalyze}>{<BarChartOutlined />}Analyze</a>
                </div>
              </div>
              <div className="ant-col ant-col-3">
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
        );
    }
    
    export default HeaderComponent;