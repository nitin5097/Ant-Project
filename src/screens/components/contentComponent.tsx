import React from "react";
import { Content } from "antd/lib/layout/layout";
import { Route, Switch } from "react-router-dom";
import CampaignStatus from "../campaign status/campaign status";
import Campaign from "../campaign/campaign";
import CampaignDetail from "../campaignDetail/campaignDetail";

function ContentComponent() {
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 660 }}
      >

      <div className="HomeContent">
      <Switch>
    <Route path={`/home`} exact component={CampaignStatus} />
    <Route path={`/home/campaign`} exact component={Campaign} />
    <Route path={`/home/campaign`} component={Campaign} />
    <Route path={`/home/campaignDetail`} component={CampaignDetail} />
  </Switch>

       

  {/* <Switch>
      <Route
    path="/home"
    render={({ match: { url } }) => (
      <>
        <Route path={`${url}/`} component={CampaignStatus} exact />
        <Route path={`${url}/campaignDetail`} component={CampaignDetail} />
        <Route path={`${url}/campaign`} component={Campaign} />
      </>
    )}
  />
  </Switch> */}
        </div>
      

      </div>
    </Content>
  );
}

export default ContentComponent;
