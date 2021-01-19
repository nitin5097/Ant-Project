import React from "react";
import "./home.scss";
import {
  Layout
} from "antd";
import MenuComponent from "../components/menuComponent";
import HeaderComponent from "../components/headerComponent";
import FooterComponent from "../components/footerComponent";
import ContentComponent from "../components/contentComponent";

function Home() {
  return (
    <Layout>
      <MenuComponent/>
      <Layout>
      <HeaderComponent isLoggedIn={true} message={"Welcome"} name={"Admin"}/>
      <ContentComponent/>
      <FooterComponent/>
      </Layout>
    </Layout>
  );
}

export default Home;
