import React from "react";
import { Card, Descriptions } from "antd";
import { Link } from "react-router-dom";

const VisitDetails = ({ visitData }) => {
  return (
    <Card title="Visit Details" extra={<Link to="/">Back</Link>}>
      <Descriptions layout="vertical" bordered>
        <Descriptions.Item label="Visit Number">
          {visitData?.visitNumber}
        </Descriptions.Item>
        <Descriptions.Item label="Assigned To">
          {visitData?.assignedTo}
        </Descriptions.Item>
        <Descriptions.Item label="Customer">
          {visitData?.customer}
        </Descriptions.Item>
        <Descriptions.Item label="Scheduled Date">
          {visitData?.scheduledDate}
        </Descriptions.Item>
        <Descriptions.Item label="Visit Date">
          {visitData?.visitDate}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default VisitDetails;
