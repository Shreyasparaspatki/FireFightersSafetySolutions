import { Layout } from "antd";
import SiteHeader from "./Header";
import SiteFooter from "./Footer";
import SiteSidebar from "./Sidebar";
import { useState } from "react";

const { Content } = Layout;

const MainLayout = ({ active, children }) => {
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <SiteHeader />
        <Layout>
          <SiteSidebar active={active} />
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content style={{ paddingTop: "1.5rem", overflowY: "scroll" }}>
              {children}
            </Content>
          </Layout>
        </Layout>
        {/* <SiteFooter /> */}
      </Layout>
    </>
  );
};

export default MainLayout;
