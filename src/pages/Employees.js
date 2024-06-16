import React, { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import { Row, Col, Card, Button, Table, message, Modal, Dropdown } from "antd";
import { Link } from "react-router-dom";
import APICall from "../services/apiservices";
const { confirm } = Modal;

const Employees = () => {
  const [employees, setEmployees] = useState();

  const getEmployees = async (page, limit) => {
    try {
      const response = await APICall(
        `/employee?page=${page}&limit=${limit}`,
        {},
        1
      );
      setEmployees(response.data.documents);
    } catch (error) {
      message.error("failed to get employee data");
    }
  };

  const handleDelete = (record) => {
    confirm({
      title: "Confirm Delete",
      content: `Are you sure you want to delete employee ${record.name}?`,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: () => {
        // Delete logic goes here
        message.success("Employee deleted successfully!");
      },
      onCancel: () => {
        message.info("Delete canceled");
      },
    });
  };

  useEffect(() => {
    getEmployees(1, 2);
  }, []);

  const columns = [
    {
      title: "Name",
      key: "name",
      render: (_, record) => {
        return record.user.name;
      },
      responsive: ["md"],
    },
    {
      title: "Email",
      key: "email",
      render: (_, record) => {
        return record.user.email;
      },
      responsive: ["lg"],
    },
    {
      title: "Mobile",
      key: "mobile",
      render: (_, record) => {
        return record.user.mobile;
      },
    },
    {
      title: "Visits",
      dataIndex: "visits",
      key: "visits",
    },
    {
      title: "Surveys",
      dataIndex: "surveys",
      key: "surveys",
    },
    {
      title: "Attendance",
      dataIndex: "attendance",
      key: "attendance",
    },
    {
      title: "Access Type",
      dataIndex: "accessType",
      key: "accessType",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Dropdown
          menu={{
            items: [
              {
                key: 1,
                label: <Link to={`/employees/manage/${record._id}`}>Edit</Link>,
              },
              {
                key: 2,
                label: <Link to={`/employees/${record._id}`}>Open</Link>,
              },
              {
                key: 3,
                label: (
                  <span
                    style={{ color: "red" }}
                    onClick={() => handleDelete(record)}
                  >
                    Delete
                  </span>
                ),
              },
            ],
          }}
          placement="bottom"
        >
          <Button type="link">Actions</Button>
        </Dropdown>
      ),
      align: "center",
    },
  ];
  return (
    <Row>
      <Col span={24}>
        <Card
          title="Employee Management"
          extra={
            <>
              <Link to="/employees/manage">
                <Button
                  type="primary"
                  icon={<LuPlus style={{ paddingTop: "2px" }} />}
                >
                  Add Employee
                </Button>
              </Link>
            </>
          }
        >
          <Table columns={columns} dataSource={employees} size="large" />
        </Card>
      </Col>
    </Row>
  );
};

export default Employees;
