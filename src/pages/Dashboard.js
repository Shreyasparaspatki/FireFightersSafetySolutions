import React, { useEffect, useState } from "react";
import { GoInfo } from "react-icons/go";
import { BiSolidUpArrow } from "react-icons/bi";
import {
  Card,
  Col,
  Row,
  Space,
  Statistic,
  Table,
  Typography,
  Descriptions,
  Image,
  Button,
} from "antd";

const stats = [
  {
    customers: {
      total: 467,
      lastMonth: 12,
      thisMonthSales: "12,423",
    },
    employees: {
      total: 34,
      percent: 80,
    },
    visits: {
      total: 145,
      dailyAvg: 3,
    },
    items: {
      total: 78,
    },
  },
];

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const Dashboard = () => {
  const [visible, setVisible] = useState(false);
  const [img, setImg] = useState();
  const showImage = (img) => {
    setImg(img);
    setVisible(true);
  };
  const data = stats[0];
  return (
    <Space direction="vertical" size={20}>
      <Row gutter={10}>
        <Col className="gutter-row" span={6}>
          <Card bordered={false}>
            <Statistic
              title={
                <>
                  <Row justify="space-between">
                    <Col>Employees</Col>
                    <Col>
                      <GoInfo style={{ fontSize: "20px" }} />
                    </Col>
                  </Row>
                </>
              }
              value={data.employees.total}
            />
            <Typography.Text>Progress bar</Typography.Text>
            <hr style={{ opacity: "25%" }}></hr>
            <Typography.Text>Percent {data.employees.percent}%</Typography.Text>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card bordered={false}>
            <Statistic
              title={
                <>
                  <Row justify="space-between">
                    <Col>Visits</Col>
                    <Col>
                      <GoInfo style={{ fontSize: "20px" }} />
                    </Col>
                  </Row>
                </>
              }
              value={data.visits.total}
            />
            <Typography.Text>Chart</Typography.Text>
            <hr style={{ opacity: "25%" }}></hr>
            <Typography.Text>
              Average Daily Visits {data.visits.dailyAvg}
            </Typography.Text>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card bordered={false}>
            <Statistic
              title={
                <>
                  <Row justify="space-between">
                    <Col>Customers</Col>
                    <Col>
                      <GoInfo style={{ fontSize: "20px" }} />
                    </Col>
                  </Row>
                </>
              }
              value={data.customers.total}
            />
            <Typography.Text>
              {data.customers.lastMonth} new customers in last month
            </Typography.Text>
            <hr style={{ opacity: "25%" }}></hr>
            <Typography.Text>
              This month sales {data.customers.thisMonthSales}
            </Typography.Text>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card bordered={false}>
            <Statistic
              title={
                <>
                  <Row justify="space-between">
                    <Col>Items</Col>
                    <Col>
                      <GoInfo style={{ fontSize: "20px" }} />
                    </Col>
                  </Row>
                </>
              }
              value={data.items.total}
            />
            <Typography.Text>Progress bar</Typography.Text>
            <hr style={{ opacity: "25%" }}></hr>
            <Typography.Text>""</Typography.Text>
          </Card>
        </Col>
      </Row>
      <Row gutter={10}>
        <Col span={12}>
          <Card
            title="Upcoming Visits"
            extra={"..."}
            style={{
              width: 610,
            }}
          >
            <Row gutter={10}>
              <Col className="gutter-row" span={12}>
                <Card bordered={false}>
                  <Statistic
                    title={
                      <>
                        <Row gutter={9}>
                          <Col>Visits</Col>
                          <Col>
                            <GoInfo style={{ fontSize: "20px" }} />
                          </Col>
                        </Row>
                      </>
                    }
                    value={data.employees.total}
                    suffix={
                      <Row style={{ marginLeft: "1rem" }}>
                        <Space size={3}>
                          <>{12}</>
                          <BiSolidUpArrow
                            style={{
                              color: "#52C41A",
                              fontSize: "15px",
                            }}
                          />
                        </Space>
                      </Row>
                    }
                  />
                  Chart
                </Card>
              </Col>
              <Col className="gutter-row" span={12}>
                <Card bordered={false}>
                  <Statistic
                    title={
                      <>
                        <Row gutter={9}>
                          <Col>AMC</Col>
                          <Col>
                            <GoInfo style={{ fontSize: "20px" }} />
                          </Col>
                        </Row>
                      </>
                    }
                    value={data.employees.total}
                    suffix={
                      <Row style={{ marginLeft: "1rem" }}>
                        <Space size={3}>
                          <>{12}</>
                          <BiSolidUpArrow
                            style={{
                              color: "#52C41A",
                              fontSize: "15px",
                            }}
                          />
                        </Space>
                      </Row>
                    }
                  />
                  Chart
                </Card>
              </Col>
            </Row>
            <Row style={{ marginTop: "1rem" }}>
              <Col className="gutter-row" span={24}>
                <Table columns={columns} dataSource={dataSource} />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            style={{
              width: 610,
            }}
          >
            <Descriptions
              title="About Company"
              size="middle"
              layout="vertical"
              bordered
              extra={"..."}
            >
              <Descriptions.Item label="Company">
                Fire Fight Safety Solution
              </Descriptions.Item>
              <Descriptions.Item label="Mobile">9857385723</Descriptions.Item>
              <Descriptions.Item label="Email">
                ffsspune@gmail.com
              </Descriptions.Item>
              <Descriptions.Item label="License Number">
                8472859682930
              </Descriptions.Item>
              <Descriptions.Item label="Active Finance Year" span={2}>
                2023-2024
              </Descriptions.Item>
              <Descriptions.Item label="Address" span={3}>
                23, Somvar Peth, Pune 411002
              </Descriptions.Item>
              <Descriptions.Item label="Company Logo">
                <Button
                  type="link"
                  onClick={() => {
                    showImage("Logo.png");
                  }}
                >
                  Click Here To View
                </Button>
              </Descriptions.Item>
              <Descriptions.Item label="Letterhead Header">
                <Button
                  type="link"
                  onClick={() => {
                    showImage("LetterheadHeader.jpg");
                  }}
                >
                  Click Here To View
                </Button>
              </Descriptions.Item>
              <Descriptions.Item label="Letterhead Footer">
                <Button
                  type="link"
                  onClick={() => {
                    showImage("LetterheadFooter.jpg");
                  }}
                >
                  Click Here To View
                </Button>
              </Descriptions.Item>
            </Descriptions>
            <Image
              preview={{
                visible,
                src: img,
                onVisibleChange: (value) => {
                  setVisible(value);
                },
              }}
            />
          </Card>
        </Col>
      </Row>
    </Space>
  );
};

export default Dashboard;
