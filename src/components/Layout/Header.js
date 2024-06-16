import { RiLogoutCircleLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import React from "react";
import { Layout, Tag, Row, Avatar, Space, Typography, Dropdown } from "antd";
const { Header } = Layout;
const { Text } = Typography;

const SiteHeader = () => {
  return (
    <Header
      style={{
        backgroundColor: "#181D23",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "#fff",
        padding: "0px 22px",
        height: "48px",
      }}
    >
      <div className="demo-logo">
        <img src="Logo.png" alt="logo" />
        <span style={{ fontWeight: "500" }}>Fire Safety Solutions</span>
      </div>
      <div className="content">
        <Row justify={"center"} align={"middle"}>
          <Space>
            <div className="access">
              <Tag color="orange">Access</Tag>
            </div>
            <Dropdown
              trigger="click"
              menu={{
                items: [
                  {
                    label: "Profile",
                    key: "profile",
                    icon: <CgProfile style={{ fontSize: "18px" }} />,
                  },
                  {
                    label: "Log Out",
                    key: "logout",
                    icon: <RiLogoutCircleLine style={{ fontSize: "18px" }} />,
                  },
                ],
              }}
            >
              <div className="user-info">
                <Space>
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                  <Text strong style={{ color: "#fff" }}>
                    Gaurav Vaidya
                  </Text>
                </Space>
              </div>
            </Dropdown>
          </Space>
        </Row>
      </div>
    </Header>
  );
};

export default SiteHeader;
