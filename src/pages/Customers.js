import React, { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import {
  Row,
  Col,
  Card,
  Button,
  Table,
  Tag,
  message,
  Modal,
  Dropdown,
} from "antd";
import { Link } from "react-router-dom";
import APICall from "../services/apiservices";

const { confirm } = Modal;

const Customers = () => {
  const [customers, setCustomers] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(false);

  const handleDelete = (record) => {
    confirm({
      title: "Confirm Delete",
      content: `Are you sure you want to delete customer ${record.user.name}?`,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: async () => {
        try {
          const response = await APICall(`/customer/${record._id}`, {}, 4);
          if (response.data) {
            message.success("Customer deleted successfully!");
            setReload(true);
          }
        } catch (error) {
          message.error(error.response.data.message);
        }
      },
      onCancel: () => {
        message.info("Delete canceled");
      },
    });
  };

  const getCustomers = async () => {
    try {
      const response = await APICall("/customer?page=1&limit=10", {}, 1);
      setCustomers(response.data.documents);
      setIsLoading(false);
    } catch (error) {
      message.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCustomers();
  }, [reload]);

  const columns = [
    {
      title: "Name",
      key: "name",
      render: (_, record) => {
        return record.user.name;
      },
    },
    {
      title: "Address",
      key: "address",
      render: (_, record) => {
        return record.user.address;
      },
    },
    {
      title: "State",
      key: "state",
      render: (_, record) => {
        return record.user.state;
      },
    },
    {
      title: "Mobile",
      key: "mobile",
      render: (_, record) => {
        return record.user.mobile;
      },
    },
    {
      title: "Email",
      key: "email",
      render: (_, record) => {
        return record.user.email;
      },
    },
    {
      title: "GSTIN",
      key: "GSTIN",
      render: (_, record) => {
        return record.gstNumber;
      },
    },
    {
      title: "Access Status",
      key: "accessStatus",
      render: (_, record) => (
        <Tag color={record.user.isActive ? "green" : "red"}>
          {record.user.isActive ? "Active" : "Inactive"}
        </Tag>
      ),
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
                label: <Link to={`/customers/manage/${record._id}`}>Edit</Link>,
              },
              {
                key: 2,
                label: <Link to={`/customers/${record._id}`}>Open</Link>,
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
          title="Customer Management"
          extra={
            <>
              <Link to="/customers/manage">
                <Button
                  type="primary"
                  icon={<LuPlus style={{ paddingTop: "2px" }} />}
                >
                  Add Customer
                </Button>
              </Link>
            </>
          }
        >
          <Table
            loading={isLoading}
            columns={columns}
            dataSource={customers}
            size="middle"
          />
        </Card>
      </Col>
    </Row>
  );
};

export default Customers;
