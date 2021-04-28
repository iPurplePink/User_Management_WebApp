import React, { useState } from "react";
import LoginLayout from "../../components/LoginLayout";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import Checkbox from "antd/lib/checkbox";
import Alert from "antd/lib/alert";
import Link from "next/link";
import firebase from "firebase";

const Login = () => {
  const [loginErrorMessage, setLoginErrorMessage] = useState<string>();
  const handleFormFinish = (values: any) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then((userCredential) => {
        setLoginErrorMessage(undefined);
        console.log("userCredential", userCredential);
      })
      .catch((error) => {
        setLoginErrorMessage(error.message);
        console.log("error", error);
      });
  };

  return (
    <LoginLayout>
      <section className={"login-section"}>
        <h1 className="title">Welcome back!</h1>
        {loginErrorMessage && (
          <Alert
            type="error"
            message={loginErrorMessage}
            className="_spacer-24"
          />
        )}
        <Form
          layout="vertical"
          onFinish={handleFormFinish}
          validateMessages={{
            required: "${label} is required",
            whitespace: "${label} is required",
            types: {
              email: "${label} format is not valid",
            },
          }}
          validateTrigger="onSubmit"
          requiredMark={false}
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, whitespace: true, type: "email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            className="password-form-item"
            rules={[{ required: true }]}
          >
            <Input type="password" />
          </Form.Item>
          <Link href="/login/forgot-password">
            <a className="forgot-password">Forgot your Password?</a>
          </Link>
          <Form.Item
            name="remember"
            className="remember-form-item"
            valuePropName="checked"
          >
            <Checkbox className="remember-me">Remember me</Checkbox>
          </Form.Item>
          <Button htmlType="submit" className="_button-solid">
            Log in
          </Button>
        </Form>
      </section>
    </LoginLayout>
  );
};

export default Login;
