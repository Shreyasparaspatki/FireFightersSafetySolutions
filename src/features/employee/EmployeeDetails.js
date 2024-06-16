import React from "react";
import { Button, Card, Descriptions } from "antd";
import { Link } from "react-router-dom";

const EmployeeDetails = ({ empData }) => {
  return (
    <Card
      title="Employee Details"
      extra={
        <Link to="/employees">
          <Button type="primary">Back</Button>
        </Link>
      }
    >
      <Descriptions layout="vertical">
        <Descriptions.Item label="Name">{empData?.name}</Descriptions.Item>
        <Descriptions.Item label="Address">
          {empData?.address}
        </Descriptions.Item>
        <Descriptions.Item label="Email">{empData?.email}</Descriptions.Item>
        <Descriptions.Item label="Mobile">{empData?.mobile}</Descriptions.Item>
        <Descriptions.Item label="Employee Code">
          {empData?.employeeCode}
        </Descriptions.Item>
        <Descriptions.Item label="Employee Designation">
          {empData?.employeeDesignation}
        </Descriptions.Item>
        <Descriptions.Item label="Salary">{empData?.salary}</Descriptions.Item>
        <Descriptions.Item label="Salary per day">
          {empData?.salaryPerDay}
        </Descriptions.Item>
        <Descriptions.Item label="Aadhaar Number">
          {empData?.aadhaarNumber}
        </Descriptions.Item>
        <Descriptions.Item label="Date of birth">
          {empData?.dateOfBirth}
        </Descriptions.Item>
        <Descriptions.Item label="Date of Joining">
          {empData?.dateOfJoining}
        </Descriptions.Item>
        <Descriptions.Item label="Employee Qualification">
          {empData?.employeeQualification}
        </Descriptions.Item>
        <Descriptions.Item label="Bank Account Number">
          {empData?.bankAccountNumber}
        </Descriptions.Item>
        <Descriptions.Item label="Bank Account Name">
          {empData?.bankAccountName}
        </Descriptions.Item>
        <Descriptions.Item label="Bank Name">
          {empData?.bankName}
        </Descriptions.Item>
        <Descriptions.Item label="Bank IFSC Code">
          {empData?.bankIFSCCode}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default EmployeeDetails;
