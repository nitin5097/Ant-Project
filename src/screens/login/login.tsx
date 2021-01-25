import React from "react";
import { Row, Col } from "antd";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Image, message } from "antd";
import "./login.scss";
import homeImage from "../../Image/home.png";

const error = () => {
  message.error('Invalid credentials');
};

const onFinish = (values: any) => {
  console.log("Received values of form: ", values);
  if((values.username==='Admin')&&(values.password==='Admin')){
    window.location.href = "/dashboard";
  }
  else{
    message.error('Invalid credentials');
  }
};

const layout = {
  wrapperCol: { offset: 12, span: 16 },
};

function redirectLogin(key: any) {
  console.log(key);
  window.location.href = "/";
}
function Login() {
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
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                formNoValidate={false}
              >
                Log in
              </Button>
              Or <a href="/signup">register now!</a>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
