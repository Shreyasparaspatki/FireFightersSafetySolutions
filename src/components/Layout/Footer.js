import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;
const SiteFooter = () => {
  return (
    <Footer
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>Footer</div>
    </Footer>
  );
};

export default SiteFooter;
