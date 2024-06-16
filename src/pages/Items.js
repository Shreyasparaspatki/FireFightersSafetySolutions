import React from "react";
import { LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Row,
  Space,
  Table,
  message,
  Modal,
  Dropdown,
} from "antd";

const { confirm } = Modal;

const data = [
  {
    _id: 1,
    name: "ABC Fire Extinguisher",
    hsn: "1234",
    gstRate: 18,
    price: 500,
  },
  {
    _id: 2,
    name: "CO2 Fire Extinguisher",
    hsn: "5678",
    gstRate: 18,
    price: 800,
  },
  {
    _id: 3,
    name: "Water Fire Extinguisher",
    hsn: "9012",
    gstRate: 12,
    price: 600,
  },
  {
    _id: 4,
    name: "Foam Fire Extinguisher",
    hsn: "3456",
    gstRate: 18,
    price: 700,
  },
  {
    _id: 5,
    name: "Dry Powder Fire Extinguisher",
    hsn: "7890",
    gstRate: 12,
    price: 900,
  },
  {
    _id: 6,
    name: "Clean Agent Fire Extinguisher",
    hsn: "2345",
    gstRate: 18,
    price: 1200,
  },
  {
    _id: 7,
    name: "Carbon Dioxide Fire Extinguisher",
    hsn: "6789",
    gstRate: 18,
    price: 1000,
  },
  {
    _id: 8,
    name: "Wet Chemical Fire Extinguisher",
    hsn: "0123",
    gstRate: 12,
    price: 1500,
  },
  {
    _id: 9,
    name: "Automatic Fire Extinguisher",
    hsn: "4567",
    gstRate: 18,
    price: 2000,
  },
  {
    _id: 10,
    name: "Portable Fire Extinguisher",
    hsn: "8901",
    gstRate: 12,
    price: 1800,
  },
];
const Items = () => {
  const handleDelete = (record) => {
    confirm({
      title: "Confirm Delete",
      content: `Are you sure you want to delete item ${record.name}?`,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: () => {
        // Delete logic goes here
        message.success("Item deleted successfully!");
      },
      onCancel: () => {
        message.info("Delete canceled");
      },
    });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "HSN",
      dataIndex: "hsn",
      key: "hsn",
    },
    {
      title: "GST Rate",
      dataIndex: "gstRate",
      key: "gstRate",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
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
                label: <Link to={`/items/manage/${11}`}>Edit</Link>,
              },
              {
                key: 2,
                label: <Link to={`/items/${11}`}>Open</Link>,
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
          title="Items"
          extra={
            <>
              <Link to="/items/manage">
                <Button
                  type="primary"
                  icon={<LuPlus style={{ paddingTop: "2px" }} />}
                >
                  Add New
                </Button>
              </Link>
            </>
          }
        >
          <Table columns={columns} dataSource={data} size="large" />
        </Card>
      </Col>
    </Row>
  );
};

export default Items;
