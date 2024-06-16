import React from "react";
import { Form, Input, Button, Card, Row, Col, Select, InputNumber } from "antd";
import { Link } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";

const ManageAMCs = ({ isEdit, onFinish }) => {
  const [form] = Form.useForm();

  return (
    <Row>
      <Col span={24}>
        <Card
          title={isEdit ? "Edit AMC" : "Create AMC"}
          extra={
            <Link to="/amcs">
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
            <Row>
              <Col span={24}>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="customer"
                      label="Customer"
                      rules={[
                        {
                          required: true,
                          message: "Please select the customer",
                        },
                      ]}
                    >
                      <Select
                        showSearch
                        style={{
                          width: "100%",
                        }}
                        placeholder="Select Customer"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          (option?.label ?? "").includes(input)
                        }
                        filterSort={(optionA, optionB) =>
                          (optionA?.label ?? "")
                            .toLowerCase()
                            .localeCompare((optionB?.label ?? "").toLowerCase())
                        }
                        options={[
                          {
                            value: "1",
                            label: "Not Identified",
                          },
                          {
                            value: "2",
                            label: "Closed",
                          },
                          {
                            value: "3",
                            label: "Communicated",
                          },
                          {
                            value: "4",
                            label: "Identified",
                          },
                          {
                            value: "5",
                            label: "Resolved",
                          },
                          {
                            value: "6",
                            label: "Cancelled",
                          },
                        ]}
                      />
                    </Form.Item>

                    <Form.Item
                      name="amcDuration"
                      label="AMC Duration"
                      rules={[
                        {
                          required: true,
                          message: "Please enter the total visits",
                        },
                      ]}
                    >
                      <Select
                        showSearch
                        style={{
                          width: "100%",
                        }}
                        placeholder="Select Customer"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          (option?.label ?? "").includes(input)
                        }
                        filterSort={(optionA, optionB) =>
                          (optionA?.label ?? "")
                            .toLowerCase()
                            .localeCompare((optionB?.label ?? "").toLowerCase())
                        }
                        options={[
                          {
                            value: "monthly",
                            label: "Monthly",
                          },
                          {
                            value: "annually",
                            label: "Annualy",
                          },
                        ]}
                      />
                    </Form.Item>

                    <Form.Item name="amcNotes" label="Notes">
                      <TextArea placeholder="Notes...." />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name="amcNotes" label="Notes">
                      <Select
                        style={{
                          width: "100%",
                        }}
                        placeholder="Select AMC Type"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          (option?.label ?? "").includes(input)
                        }
                        filterSort={(optionA, optionB) =>
                          (optionA?.label ?? "")
                            .toLowerCase()
                            .localeCompare((optionB?.label ?? "").toLowerCase())
                        }
                        options={[
                          {
                            value: "comprehensive",
                            label: "Comprehensive",
                          },
                          {
                            value: "nonComprehensive",
                            label: "Non-Comprehensive",
                          },
                        ]}
                      />
                    </Form.Item>

                    <Form.Item
                      name="amcPeriod"
                      label="AMC Period"
                      rules={[
                        {
                          required: true,
                          message: "Please enter the AMC period",
                        },
                      ]}
                    >
                      <InputNumber
                        style={{ width: "100%" }}
                        placeholder="Enter AMC period"
                        controls={false}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Form.Item style={{ marginTop: "20px", marginLeft: "20px" }}>
              <Button
                type="primary"
                htmlType="submit"
                // style={{ float: "right" }}
              >
                {isEdit ? "Save" : "Create"}
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default ManageAMCs;
