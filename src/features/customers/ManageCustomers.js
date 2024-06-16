import React, { useEffect, useState } from "react";
import { Card, Form, Input, Button, Col, Row, message, Spin } from "antd";
import { Link, useParams } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import APICall from "../../services/apiservices";

const ManageCustomer = ({ isEdit }) => {
  const { customerId } = useParams();
  const [customerData, setCustomerData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();


  const getCustomerDetails = async () => {
    try {
      const response = await APICall(`/customer/${customerId}`);
      setCustomerData(response.data);
      setIsLoading(false);
    } catch (error) {
      message.error(error.response.data.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isEdit) {
      setIsLoading(true);
      getCustomerDetails();
    }
  }, []);

  useEffect(() => {
    if (customerData) {
      const initialValues = {
        name: customerData?.user?.name,
        email: customerData?.user?.email,
        mobile: customerData?.user?.mobile,
        address: customerData?.user?.address,
        state: customerData?.user?.state,
        pincode: customerData?.user?.pincode,
        gstNumber: customerData?.gstNumber,
      };
      form.setFieldsValue(initialValues);
    }
  }, [customerData]);

  const onFinish = async (formData) => {
    setIsLoading(!isLoading);
    if (isEdit) {
      const response = await APICall(`/customer/${customerId}`, formData, 3);
      if (response.data) {
        setIsLoading(false);
        message.success("Employee has been updated successfully.");
      }
      try {
      } catch (error) {
        setIsLoading(false);
        message.error(error.response.data.message);
      }
    } else {
      try {
        const response = await APICall(`/customer`, formData, 2);
        if (response.data) {
          setIsLoading(false);
          message.success("Customer has been created successfully.");
        }
      } catch (error) {
        setIsLoading(false);
        message.error(error.response.data.message);
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <Row
          justify="center"
          align="middle"
          style={{ position: "absolute", top: "50%", left: "50%" }}
        >
          <Spin tip={"Loading"} />
        </Row>
      ) : (
        <Row>
          <Col span={24}>
            <Card
              title={isEdit ? "Edit Customer" : "Create Customer"}
              extra={
                <Link to="/customers">
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
                  <Col span={24}>
                    <Card title="Personal Information" bordered={false}>
                      <Row gutter={10}>
                        <Col span={12}>
                          <Form.Item
                            name="name"
                            label="Name"
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
                            name="email"
                            label="Email"
                            rules={[
                              {
                                required: true,
                                message: "Please enter the customer email",
                              },
                              {
                                type: "email",
                                message: "Please enter a valid email address",
                              },
                            ]}
                          >
                            <Input placeholder="Enter customer email" />
                          </Form.Item>

                        </Col>
                        <Col span={12}>
                        <Form.Item
                          name="mobile"
                          label="Mobile"
                          rules={[
                            {
                              required: true,
                              message: "Please enter the customer mobile number",
                            },
                            {
                              pattern: /^[0-9]{10}$/,
                              message: "Please enter a valid 10-digit mobile number",
                            },
                          ]}
                        >
                          <Input placeholder="Enter customer mobile number" />
                        </Form.Item>
                        </Col>
                      </Row>
                    </Card>
                    <Card title="Address" bordered={false}>
                      <Row gutter={10}>
                        <Col span={12}>
                          <Form.Item
                            name="address"
                            label="Address"
                            rules={[
                              {
                                required: true,
                                message: "Please enter the customer address",
                              },
                            ]}
                          >
                            <TextArea
                              rows={5}
                              placeholder="Enter customer address"
                            />
                          </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Form.Item
                            name="state"
                            label="State"
                            rules={[
                              {
                                required: true,
                                message: "Please enter the customer state",
                              },
                            ]}
                          >
                            <Input placeholder="Enter customer state" />
                          </Form.Item>

                          <Form.Item
                            name="pincode"
                            label="Pincode"
                            rules={[
                              {
                                required: true,
                                message: "Please enter the customer address pincode",
                              },
                              {
                                pattern: /^[0-9]{6}$/,
                                message: "Please enter a valid 6-digit pincode",
                              },
                            ]}
                          >
                            <Input placeholder="Enter customer address pincode" />
                          </Form.Item>

                        </Col>
                      </Row>
                    </Card>
                    <Card title="Other Details" bordered={false}>
                      <Row gutter={10}>
                        <Col span={12}>
                        <Form.Item
                          name="gstNumber"
                          label="GSTIN"
                          rules={[
                            {
                              required: true,
                              message: "Please enter the customer GSTIN",
                            },
                            {
                              pattern: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/,
                              message: "Please enter a valid GSTIN",
                            },
                          ]}
                        >
                          <Input placeholder="Enter customer GST Number" />
                        </Form.Item>

                        </Col>
                        <Col span={12}></Col>

                        <Col span={12}>
                          <Form.Item
                            name="accountStatus"
                            label="Account Status"
                            rules={[
                              {
                                pattern: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/,
                                message: "Please enter a valid GSTIN",
                              },
                            ]}
                          >
                            <Input placeholder="Enter customer GST Number" />
                          </Form.Item>
                        </Col>
                        <Col span={12}></Col>
                      </Row>
                    </Card>
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
      )}
    </>
  );
};

export default ManageCustomer;
