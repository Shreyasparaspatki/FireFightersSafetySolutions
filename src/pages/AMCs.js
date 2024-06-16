import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";
import PrintUtility from "../utils/Print";
import {
  Row,
  Card,
  Col,
  Table,
  Space,
  Button,
  message,
  Modal,
  Dropdown,
} from "antd";
import { Link } from "react-router-dom";
const { confirm } = Modal;
const data = [
  {
    amcNumber: "AMC001",
    amcType: "Annual",
    customer: "John Doe",
    amcPeriod: "2022-2023",
    totalVisits: 5,
  },
  {
    amcNumber: "AMC002",
    amcType: "Quarterly",
    customer: "Jane Smith",
    amcPeriod: "2022-2023",
    totalVisits: 3,
  },
  {
    amcNumber: "AMC003",
    amcType: "Monthly",
    customer: "Michael Johnson",
    amcPeriod: "2022-2023",
    totalVisits: 8,
  },
  {
    amcNumber: "AMC004",
    amcType: "Annual",
    customer: "Emily Davis",
    amcPeriod: "2022-2023",
    totalVisits: 2,
  },
  {
    amcNumber: "AMC005",
    amcType: "Quarterly",
    customer: "William Wilson",
    amcPeriod: "2022-2023",
    totalVisits: 6,
  },
  {
    amcNumber: "AMC006",
    amcType: "Monthly",
    customer: "Olivia Thompson",
    amcPeriod: "2022-2023",
    totalVisits: 4,
  },
  {
    amcNumber: "AMC007",
    amcType: "Annual",
    customer: "James Anderson",
    amcPeriod: "2022-2023",
    totalVisits: 7,
  },
  {
    amcNumber: "AMC008",
    amcType: "Quarterly",
    customer: "Sophia Taylor",
    amcPeriod: "2022-2023",
    totalVisits: 1,
  },
  {
    amcNumber: "AMC009",
    amcType: "Monthly",
    customer: "Benjamin Thomas",
    amcPeriod: "2022-2023",
    totalVisits: 9,
  },
  {
    amcNumber: "AMC010",
    amcType: "Annual",
    customer: "Ava Martinez",
    amcPeriod: "2022-2023",
    totalVisits: 3,
  },
];
const AMCs = () => {
  const [print, setPrint] = useState();
  const handleDelete = (record) => {
    confirm({
      title: "Confirm Delete",
      content: `Are you sure you want to delete ${record.amcNumber}?`,
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

  const handlePrint = (record) => {
    setPrint(record);
  };

  // Table columns
  const columns = [
    {
      title: "AMC Number",
      dataIndex: "amcNumber",
      key: "amcNumber",
    },
    {
      title: "AMC Type",
      dataIndex: "amcType",
      key: "amcType",
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "AMC Period",
      dataIndex: "amcPeriod",
      key: "amcPeriod",
    },
    {
      title: "Total Visits",
      dataIndex: "totalVisits",
      key: "totalVisits",
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
                label: <span onClick={() => handlePrint(record)}>Print</span>,
              },
              {
                key: 2,
                label: <span>Download</span>,
              },
              {
                key: 2,
                label: <Link to={`/amcs/manage/${11}`}>Edit</Link>,
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
          title="AMC Management"
          extra={
            <>
              <Link to="/amcs/manage">
                <Button
                  type="primary"
                  icon={<LuPlus style={{ paddingTop: "2px" }} />}
                >
                  Add AMC
                </Button>
              </Link>
            </>
          }
        >
          <Table dataSource={data} columns={columns} />
        </Card>
      </Col>
      {print && (
        <Modal open={print} onCancel={() => setPrint(null)} width={"100%"}>
          <PrintUtility data={print} />
        </Modal>
      )}
    </Row>
  );
};

export default AMCs;
