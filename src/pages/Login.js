import {
  Col,
  Row,
  Button,
  Form,
  Input,
  Card,
  Space,
  Typography,
  message,
} from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const onFinish = (formData) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(formData.email)) {
      message.success("Success", FormData.email);
      navigate("/dashboard");
    } else {
      message.error("Invalid Email");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <Col span={8}>
          <Row justify="center" style={{ marginBottom: "3rem" }}>
            <Space>
              <img src="Logo.png" alt="" />
              <Typography.Title level={3}>
                Fire Fight Safety Solutions
              </Typography.Title>
            </Space>
            <Typography.Paragraph>
              We aim to save lives, places, belongings, and emotional trauma
              fire can cause!
            </Typography.Paragraph>
          </Row>
          <Card title="LOGIN">
            <Form
              name="login"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout="vertical"
            >
              <Form.Item
                label="Email Address"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email address!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ float: "right" }}
                >
                  LOGIN
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
