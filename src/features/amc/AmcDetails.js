import React from "react";
import { Card, Descriptions } from "antd";
import { Link } from "react-router-dom";

const AmcDetails = ({ amcData }) => {
  return (
    <Card title="AMC Details" extra={<Link to="/back">Back</Link>}>
      <Descriptions>
        <Descriptions.Item label="AMC Number">
          {amcData?.amcNumber}
        </Descriptions.Item>
        <Descriptions.Item label="AMC Type">
          {amcData?.amcType}
        </Descriptions.Item>
        <Descriptions.Item label="Customer">
          {amcData?.customer}
        </Descriptions.Item>
        <Descriptions.Item label="AMC Period">
          {amcData?.amcPeriod}
        </Descriptions.Item>
        <Descriptions.Item label="Total Visits">
          {amcData?.totalVisits}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default AmcDetails;
