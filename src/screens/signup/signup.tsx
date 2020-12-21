import React from "react";
import { Row, Col } from "antd";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Image } from "antd";
import "./signup.scss";
import homeImage from "../../Image/home.png";

const onFinish = (values: any) => {
  console.log("Received values of form: ", values);
};

const layout = {
  wrapperCol: { offset: 12, span: 16 },
};

function redirectLogin(key: any) {
  console.log(key);
}
function Signup() {
  return (
    <div>
      <div className="login"></div>
      <Row>
        <Col span={12}>
          <div className="catalinaImage">
            <div>
              <Image width={850} height={600} src={homeImage} />
            </div>
          </div>
        </Col>
        <Col span={12}>
          <br></br>
          <br></br>
          <div style={{ textAlign: "center", fontSize: "xx-large" }}>
            WELCOME TO CATALINA
          </div>
          <br></br>
          <div style={{ textAlign: "center", fontSize: "large" }}>
            Join our community
          </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Form
            {...layout}
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email ID"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input.Password 
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "The two passwords that you entered do not match!"
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={redirectLogin}
              >
                Continue
              </Button>
              <a href="/login">Already have an account?</a>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Signup;
