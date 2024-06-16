import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Form,
  Input,
  Button,
  Row,
  Col,
  Space,
  Image,
  Upload,
} from "antd";

const ManageItems = ({ isEdit }) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [img, setImg] = useState();

  const showImage = (img) => {
    setImg(img);
    setVisible(true);
  };

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Card
      title={isEdit ? "Edit Item" : "Create Item"}
      extra={
        <>
          <Link to="/items">
            <Button type="primary">Back</Button>
          </Link>
        </>
      }
    >
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        wrapperCol={{
          span: 14,
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                  message: "Please enter the name of the item",
                },
              ]}
            >
              <Input placeholder="Enter name of the item" />
            </Form.Item>

            <Form.Item
              name="price"
              label="Price"
              rules={[
                {
                  required: true,
                  message: "Please enter the price of the item",
                },
                {
                  pattern: /^[0-9]+(\.[0-9]{1,2})?$/,
                  message: "Please enter a valid price",
                },
              ]}
            >
              <Input placeholder="Enter price of the item" />
            </Form.Item>


            <Form.Item name="description" label="Description">
              <Input.TextArea placeholder="Enter description of the item" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="hsn"
              label="HSN"
              rules={[
                { required: true, message: "Please enter the HSN of the item" },
              ]}
            >
              <Input placeholder="Enter HSN of the item" />
            </Form.Item>

            <Form.Item
              name="gstRate"
              label="GST Rate"
              rules={[
                {
                  required: true,
                  message: "Please enter the GST rate of the item",
                },
              ]}
            >
              <Input placeholder="Enter GST rate of the item" />
            </Form.Item>

            <Form.Item name="image" label="Photo">
              <Space>
                <Upload name="productPhoto" accept=".jpg,.png,.jpeg">
                  <Button type="primary">Click to Upload</Button>
                </Upload>
                <Button
                  type="link"
                  onClick={() => {
                    showImage("LetterheadFooter.jpg");
                  }}
                >
                  Click Here To Preview
                </Button>
              </Space>
              <Image
                preview={{
                  visible,
                  src: img,
                  onVisibleChange: (value) => {
                    setVisible(value);
                  },
                }}
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item style={{ marginTop: "20px", marginLeft: "20px" }}>
          <Button
            type="primary"
            htmlType="submit"
            //  style={{ float: "right" }}
          >
            {isEdit ? "Save" : "Create"}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ManageItems;
