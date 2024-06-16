import React, { useEffect, useState } from "react";
import { Card, Descriptions, Button, message, Spin, Row } from "antd";
import { Link, useParams } from "react-router-dom";
import APICall from "../../services/apiservices";

const CustomerDetails = () => {
  const { customerId } = useParams();
  const [customerData, setCustomerData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getCustomerDetails = async () => {
    try {
      const response = await APICall(`/customer/${customerId}`);
      setCustomerData(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      message.error(error.response.data.message);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getCustomerDetails();
  }, []);
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
        <Card
          title="Customer Details"
          extra={
            <Link to="/customers">
              <Button type="primary">Back</Button>
            </Link>
          }
        >
          <Descriptions layout="vertical">
            <Descriptions.Item label="Name">
              {customerData?.user?.name}
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              {customerData?.user?.email}
            </Descriptions.Item>
            <Descriptions.Item label="Mobile">
              {customerData?.user?.mobile}
            </Descriptions.Item>
            <Descriptions.Item label="Address">
              {customerData?.user?.address}
            </Descriptions.Item>
            <Descriptions.Item label="State">
              {customerData?.user?.state}
            </Descriptions.Item>
            <Descriptions.Item label="Pincode">
              {customerData?.user?.pincode}
            </Descriptions.Item>

            <Descriptions.Item label="GSTIN">
              {customerData?.gstNumber}
            </Descriptions.Item>
            <Descriptions.Item label="Access Status">
              {customerData?.user?.accessStatus ? "Active" : "Inactive"}
            </Descriptions.Item>
          </Descriptions>
        </Card>
      )}
    </>
  );
};

export default CustomerDetails;
