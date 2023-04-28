import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form, Input, Button, Select, Upload, message, Switch } from "antd";
import axios from "axios";
import { any } from "prop-types";
// import { uploadFile } from 'aws-sdk';
// import S3con from "../../Config/S3Con";
// const { TextArea } = Input;
import { uploadImageToS3 } from "../../Config/S3Con";

const CreateNews = () => {
  // without s3------ direct to server
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { Option } = Select;
  const { TextArea } = Input;
  // const [cat, setCat] = useState(null);

  // const config = {
  //   bucketName: S3con.bucketName,
  //   region: S3con.region,
  //   accessKeyId: S3con.accessKeyId,
  //   secretAccessKey: S3con.secretAccessKey,
  // };

  const generateFilename = () => {
    let timestamp = new Date().getTime();
    return `image_${timestamp}.jpg`;
  };

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    uploadImageToS3(file, generateFilename())
      .then((response) => {
        console.log("Image uploaded to S3:", response.Location);
        setImageUrl(response.Location);
      })
      .catch((error) => {
        console.error("Error uploading image to S3:", error);
      });
  };

  // const handleFileInput = (e: any) => {
  //   setSelectedFile(e.target.files[0]);
  //   console.log("selected file ==>", e.target.files[0]);
  // };

  const PostNews = (nameValue: any) => {
    console.log("value ===>", nameValue);

    let reqObj = {
      data: {
        title: nameValue.title,
        image: imageUrl,
        head: nameValue.head,
        body: nameValue.body,
        category: nameValue.category,
      },
    };
    {
      console.log("reqObj===>", reqObj);
    }

    axios
      .post(
        `https://suprabhaatham-dev.herokuapp.com/api/${nameValue.category}`,
        reqObj
      )
      .then((response) => {
        console.log("axios post response===>", response);
        setLoading(false);
        setImageUrl("");
        setSelectedFile(null);
        message.success("news posted successfully")
      })
      .catch((error) => {
        console.log("axios post error ===>", error);
      });
  };

  return (
    <Container
      fluid
      className="d-flex justify-center align-center"
      style={{ height: "100vh" }}
    >
      <div
        className="d-flex flex-column justify-content-center"
        style={{ width: "100%" }}
      >
        <Form
          className="d-flex flex-column"
          onFinish={PostNews}
          layout="vertical"
        >
          <Row>
            <Col></Col>
            <Col sm="5" xs="11">
              <Form.Item
                name="title"
                label="News Title"
                rules={[{ required: true, message: "required" }]}
              >
                <Input placeholder="Enter News Title here...  " />
              </Form.Item>
            </Col>
            <Col></Col>
          </Row>

          <Row>
            <Col></Col>
            <Col sm="5" xs="11">
              <Form.Item
                name="head"
                label="News Head"
                rules={[{ required: true, message: "required" }]}
              >
                <Input placeholder="Enter News Head here...  " />
              </Form.Item>
            </Col>
            <Col></Col>
          </Row>

          <Row>
            <Col></Col>
            <Col sm="5" xs="11">
              <Form.Item
                name="body"
                label="News Body"
                rules={[{ required: true, message: "required" }]}
              >
                <TextArea rows={4} placeholder="Enter News Body here...  " />
              </Form.Item>
            </Col>
            <Col></Col>
          </Row>

          <Row>
            <Col></Col>
            <Col sm="5" xs="11">
              <Form.Item
                name="category"
                label="Category"
                rules={[{ required: true, message: "required" }]}
              >
                <Select placeholder="Select News Category" allowClear>
                  <Option value="business-news">Business News</Option>
                  <Option value="exclusives">Exclusive News</Option>
                  <Option value="featured-news">Featured News</Option>
                  <Option value="live-updates">Live Updates</Option>
                  <Option value="politics-specials">Politics Special</Option>
                  <Option value="readers-sections">Readers Section</Option>
                  <Option value="science-news">Science News</Option>
                  <Option value="tech-news">Tech</Option>
                  <Option value="topnews">Top News</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col></Col>
          </Row>

          <Row>
            <Col></Col>
            <Col sm="3" xs="11">
              <Form.Item
                name="image"
                label="Include snaps.!"
                rules={[{ message: "required" }]}
              >
                <Input
                  type="file"
                  accept="image/*, video/*"
                  onChange={handleImageUpload}
                />
              </Form.Item>
            </Col>
            <Col></Col>
          </Row>

          <Row>
            <Col></Col>
            <Col sm="3" xs="11">
              <Button
                type="primary"
                htmlType="submit"
                block
                onClick={() => {
                  // handleUpload(selectedFile);
                  loading ? loading : null;
                }}
              >
                Submit
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
};
export default CreateNews;
