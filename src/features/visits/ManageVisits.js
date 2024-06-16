import React from "react";
import { Form, Input, Button, Card, Row, Col } from "antd";
import { Link } from "react-router-dom";

const ManageVisits = ({ isEdit, onFinish }) => {
  const [form] = Form.useForm();

  return (
    <Row>
      <Col span={24}>
        <Card
          title={isEdit ? "Edit Visit" : "Schedule Visit"}
          extra={
            <Link to="/visits">
              <Button type="primary">Back</Button>
            </Link>
          }
        >
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            wrapperCol={{
              span: 14,
            }}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="visitNumber"
                  label="Visit Number"
                  rules={[
                    {
                      required: true,
                      message: "Please enter the visit number",
                    },
                  ]}
                >
                  <Input placeholder="Enter visit number" />
                </Form.Item>

                <Form.Item
                  name="assignedTo"
                  label="Assigned To"
                  rules={[
                    {
                      required: true,
                      message: "Please enter the assigned person",
                    },
                  ]}
                >
                  <Input placeholder="Enter assigned person" />
                </Form.Item>
                <Form.Item
                  name="visitDate"
                  label="Visit Date"
                  rules={[
                    {
                      required: true,
                      message: "Please enter the visit date",
                    },
                  ]}
                >
                  <Input placeholder="Enter visit date" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name="customer"
                  label="Customer"
                  rules={[
                    {
                      required: true,
                      message: "Please enter the customer name",
                    },
                  ]}
                >
                  <Input placeholder="Enter customer name" />
                </Form.Item>

                <Form.Item
                  name="scheduledDate"
                  label="Scheduled Date"
                  rules={[
                    {
                      required: true,
                      message: "Please enter the scheduled date",
                    },
                  ]}
                >
                  <Input placeholder="Enter scheduled date" />
                </Form.Item>
              </Col>
              <Form.Item style={{ marginTop: "20px", marginLeft: "20px" }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  // style={{ float: "right" }}
                >
                  {isEdit ? "Save" : "Create"}
                </Button>
              </Form.Item>
            </Row>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default ManageVisits;
