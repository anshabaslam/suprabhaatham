import React from "react";
import { useState } from "react";
import "./style.scss";
import { Button, Checkbox, Form, Input } from "antd";
import Logo from "../../assets/Images/suprabhathamlogo.svg";
import axios from "axios";
import { navigate } from "@reach/router"  
import { Alert, Space } from 'antd';
import { message } from 'antd';



const login = () => {
  const [loading, setLoading] = useState(false);
  const onFinish = (values:any) => {
    setLoading(true);
    let api = axios.create({
      baseURL: "https://suprabhaatham-dev.herokuapp.com/admin",
    });
    api
      .post
      ("/login", {
        email: values.username,
        password: values.password,
      })
      .then(function (response) {
        setLoading(false)
        if (response.status == 200){
           navigate("/CreateNews/")
          // <Link to="/CreateNews/"></Link>

           message.success('Login Sucessfully')
        }
      })
      .catch(function(error){
        message.error(error.response.data.error.message);
             setLoading(false)

      })
  };
  const onFinishFailed = (errorInfo:any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="loginSection">
      <div className="box1">
        <div className="box2">
          <div className="logo">
            <Logo />
          </div>
          <div>
            <Form
              name="basic"
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
              style={{
                width: "100%",
                textAlign:"center"
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input style={{width:"100%"}}/>
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    message: "Please input your password!",
                    required: true,
                  },
                ]}
              >
                <Input.Password style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 0,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  // offset: ,
                  span: 24,
                }}
              >
                <Button
                  className="antBttnLogin"
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
