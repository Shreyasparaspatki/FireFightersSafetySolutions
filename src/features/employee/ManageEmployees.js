import React, { useEffect, useState } from "react";
import { Form, Input, DatePicker, Button, Row, Col, Card, Space } from "antd";
import { Link, useParams } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import APICall from "../../services/apiservices";
import { useForm } from "antd/es/form/Form";

const { Item } = Form;

const ManageEmployee = ({ isEdit }) => {
  const form = useForm();
  const { empId } = useParams();
  console.log(empId);
  const [employee, setEmployee] = useState({});

  const getEmployeeData = async (empID) => {
    const response = await APICall(`/employee/${empID}`);
    setEmployee(response.data);
  };

  const onFinish = (values) => {
    console.log(values);
  };

  useEffect(() => {
    if (isEdit) getEmployeeData(empId);
  }, []);

  return (
    <Row>
      <Col span={24}>
        <Card
          title={isEdit ? "Edit Employee" : "Create Employee"}
          extra={
            <Link to="/employees">
              <Button type="primary">Back</Button>
            </Link>
          }
        >
          <Form
            layout="vertical"
            wrapperCol={{
              span: 14,
            }}
            onFinish={onFinish}
            // initialValues={initialVal}
          >
            <Row gutter={16}>
              <Col span={24}>
                <Card title="Personal Information" bordered={false}>
                  <Row gutter={10}>
                    <Col span={12}>
                      <Item
                        label="Name"
                        name="name"
                        rules={[
                          {
                            required: true,
                            message: "Please enter the employee name",
                          },
                        ]}
                      >
                        <Input placeholder="Enter name of the employee" />
                      </Item>

                      <Item
                        label="Email"
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Please enter the employee email",
                          },
                        ]}
                      >
                        <Input placeholder="Enter email of the employee" />
                      </Item>

                      <Item
                        label="Date of Birth"
                        name="dob"
                        rules={[
                          {
                            required: true,
                            message: "Please select the date of birth",
                          },
                        ]}
                      >
                        <DatePicker
                          placeholder="Select date of birth of the employee"
                          style={{ width: "100%" }}
                        />
                      </Item>

                      <Item
                        label="Aadhaar Number"
                        name="aadhaarNumber"
                        rules={[
                          {
                            required: true,
                            message: "Please enter the Aadhaar number",
                          },
                        ]}
                      >
                        <Input placeholder="Enter Aadhaar number of the employee" />
                      </Item>
                    </Col>

                    <Col span={12}>
                      <Item
                        label="Address"
                        name="address"
                        rules={[
                          {
                            required: true,
                            message: "Please enter the employee address",
                          },
                        ]}
                      >
                        <TextArea
                          rows={5}
                          placeholder="Enter address of the employee"
                        />
                      </Item>

                      <Item
                        label="Mobile"
                        name="mobile"
                        rules={[
                          {
                            required: true,
                            message: "Please enter the employee mobile number",
                          },
                        ]}
                      >
                        <Input placeholder="Enter mobile of the employee" />
                      </Item>

                      <Item
                        label="Employee Qualification"
                        name="qualification"
                        rules={[
                          {
                            required: true,
                            message: "Please enter the employee qualification",
                          },
                        ]}
                      >
                        <Input placeholder="Enter qualification of the employee" />
                      </Item>
                    </Col>
                  </Row>
                </Card>
                <Card title="Employee Information" bordered={false}>
                  <Row gutter={10}>
                    <Col span={12}>
                      <Item
                        label="Employee Code"
                        name="employeeCode"
                        rules={[
                          {
                            required: true,
                            message: "Please enter the employee code",
                          },
                        ]}
                      >
                        <Input placeholder="Enter employee code of the employee" />
                      </Item>

                      <Item
                        label="Date of Joining"
                        name="dateOfJoining"
                        rules={[
                          {
                            required: true,
                            message: "Please select the date of joining",
                          },
                        ]}
                      >
                        <DatePicker
                          placeholder="Enter date of joining of the employee"
                          style={{ width: "100%" }}
                        />
                      </Item>

                      <Item
                        label="Salary per day"
                        name="salaryPerDay"
                        rules={[
                          {
                            required: true,
                            message: "Please enter the salary per day",
                          },
                        ]}
                      >
                        <Input placeholder="Enter salary per day of the employee" />
                      </Item>
                    </Col>

                    <Col span={12}>
                      <Item
                        label="Employee Designation"
                        name="designation"
                        rules={[
                          {
                            required: true,
                            message: "Please enter the employee designation",
                          },
                        ]}
                      >
                        <Input placeholder="Enter designation of the employee" />
                      </Item>

                      <Item
                        label="Salary"
                        name="salary"
                        rules={[
                          {
                            required: true,
                            message: "Please enter the employee salary",
                          },
                        ]}
                      >
                        <Input placeholder="Enter salary of the employee" />
                      </Item>
                    </Col>
                  </Row>
                </Card>
                <Card title="Bank Account Information" bordered={false}>
                  <Row gutter={10}>
                    <Col span={12}>
                      <Item
                        label="Bank Account Number"
                        name="accountNumber"
                        rules={[
                          {
                            required: true,
                            message: "Please enter the bank account number",
                          },
                        ]}
                      >
                        <Input placeholder="Enter bank account number of the employee" />
                      </Item>

                      <Item
                        label="Bank Name"
                        name="bankName"
                        rules={[
                          {
                            required: true,
                            message: "Please enter the bank name",
                          },
                        ]}
                      >
                        <Input placeholder="Enter bank name of the employee" />
                      </Item>
                    </Col>

                    <Col span={12}>
                      <Item
                        label="Bank Account Name"
                        name="accountName"
                        rules={[
                          {
                            required: true,
                            message: "Please enter the bank account name",
                          },
                        ]}
                      >
                        <Input placeholder="Enter bank account name of the employee" />
                      </Item>

                      <Item
                        label="Bank IFSC Code"
                        name="ifscCode"
                        rules={[
                          {
                            required: true,
                            message: "Please enter the bank IFSC code",
                          },
                        ]}
                      >
                        <Input placeholder="Enter bank IFSC code of the employee" />
                      </Item>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>

            <Item style={{ marginTop: "20px", marginLeft: "20px" }}>
              <Button
                type="primary"
                htmlType="submit"
                // style={{ float: "right", marginTop: "20px" }}
              >
                {isEdit ? "Save" : "Create"}
              </Button>
            </Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default ManageEmployee;
