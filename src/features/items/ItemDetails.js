import React from "react";
import { Button, Card, Descriptions } from "antd";
import { Link } from "react-router-dom";

const ItemDetails = ({ item }) => {
  return (
    <Card
      title="Item Details"
      extra={
        <Link to="/items">
          <Button type="primary">Back</Button>
        </Link>
      }
    >
      <Descriptions layout="vertical">
        <Descriptions.Item label="Name">{item?.name}</Descriptions.Item>
        <Descriptions.Item label="HSN">{item?.hsn}</Descriptions.Item>
        <Descriptions.Item label="Price">{item?.price}</Descriptions.Item>
        <Descriptions.Item label="GST Rate">{item?.gstRate}</Descriptions.Item>
        <Descriptions.Item label="Description">
          {item?.description}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default ItemDetails;
