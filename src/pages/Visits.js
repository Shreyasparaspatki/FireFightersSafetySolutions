import React from "react";
import { Link } from "react-router-dom";
import { LuPlus } from "react-icons/lu";
import { Card, Col, Row, Table, Dropdown, Button, Modal, message } from "antd";
const { confirm } = Modal;

const dataSource = [
  {
    _id: "uniqueId789",
    visitNumber: "V004",
    assignedTo: "Sarah Johnson",
    customer: "123 Industries",
    scheduledDate: "2021-08-17",
    visitDate: "2021-08-20",
  },
  {
    _id: "uniqueId456",
    visitNumber: "V002",
    assignedTo: "John Smith",
    customer: "ABC Corporation",
    scheduledDate: "2021-08-15",
    visitDate: "2021-08-18",
  },
  {
    _id: "uniqueId123",
    visitNumber: "V001",
    assignedTo: "Emily Davis",
    customer: "XYZ Corp",
    scheduledDate: "2021-08-10",
    visitDate: "2021-08-12",
  },
  {
    _id: "uniqueId789",
    visitNumber: "V004",
    assignedTo: "Sarah Johnson",
    customer: "123 Industries",
    scheduledDate: "2021-08-17",
    visitDate: "2021-08-20",
  },
  {
    _id: "uniqueId456",
    visitNumber: "V002",
    assignedTo: "John Smith",
    customer: "ABC Corporation",
    scheduledDate: "2021-08-15",
    visitDate: "2021-08-18",
  },
  {
    _id: "uniqueId123",
    visitNumber: "V001",
    assignedTo: "Emily Davis",
    customer: "XYZ Corp",
    scheduledDate: "2021-08-10",
    visitDate: "2021-08-12",
  },
  {
    _id: "uniqueId987",
    visitNumber: "V005",
    assignedTo: "Michael Brown",
    customer: "456 Enterprises",
    scheduledDate: "2021-08-25",
    visitDate: "2021-08-28",
  },
  {
    _id: "uniqueId654",
    visitNumber: "V003",
    assignedTo: "Jessica Wilson",
    customer: "789 Corporation",
    scheduledDate: "2021-08-20",
    visitDate: "2021-08-23",
  },
  {
    _id: "uniqueId321",
    visitNumber: "V006",
    assignedTo: "David Thompson",
    customer: "XYZ Corp",
    scheduledDate: "2021-08-30",
    visitDate: "2021-09-02",
  },
  {
    _id: "uniqueId246",
    visitNumber: "V007",
    assignedTo: "Emma Roberts",
    customer: "ABC Corporation",
    scheduledDate: "2021-09-05",
    visitDate: "2021-09-08",
  },
];
const Visits = () => {
  const handleDelete = (record) => {
    confirm({
      title: "Confirm Delete",
      content: `Are you sure you want to delete visit ${record.visitNumber}?`,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: () => {
        // Delete logic goes here
        message.success("Customer deleted successfully!");
      },
      onCancel: () => {
        message.info("Delete canceled");
      },
    });
  };

  const columns = [
    {
      title: "Visit Number",
      dataIndex: "visitNumber",
      key: "visitNumber",
    },
    {
      title: "Assigned To",
      dataIndex: "assignedTo",
      key: "assignedTo",
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Scheduled Date",
      dataIndex: "scheduledDate",
      key: "scheduledDate",
    },
    {
      title: "Visit Date",
      dataIndex: "visitDate",
      key: "visitDate",
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
                label: <Link to={`/visits/manage/${11}`}>Edit</Link>,
              },
              {
                key: 2,
                label: <Link to={`/visits/${11}`}>Open</Link>,
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
          title="Visits Management"
          extra={
            <>
              <Link to="/visits/manage">
                <Button
                  type="primary"
                  icon={<LuPlus style={{ paddingTop: "2px" }} />}
                >
                  Add Visit
                </Button>
              </Link>
            </>
          }
        >
          <Table dataSource={dataSource} columns={columns} />
        </Card>
      </Col>
    </Row>
  );
};

export default Visits;
