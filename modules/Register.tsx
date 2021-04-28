import React, { useState, useEffect } from "react";
import LoginLayout from "../components/LoginLayout";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import Alert from "antd/lib/alert";
import firebase from "firebase";

const Register = () => {
  const [registerErrorMessage, setRegisterErrorMessage] = useState<string>();
  const { auth } = firebase;

  useEffect(() => {
    // console.log("currentUser", auth()?.currentUser);
  }, []);

  const handleFormFinish = (values: any) => {
    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((userCredential) => {
        setRegisterErrorMessage(undefined);
        auth()
          .currentUser?.updateProfile({
            displayName: values.name,
          })
          .then(() => {});
        console.log("userCredential", userCredential);
      })
      .catch((error) => {
        setRegisterErrorMessage(error.message);
        console.log("error", error);
      });
  };

  return (
    <LoginLayout>
      <section className={"login-section"}>
        <h1 className="title">Get started!</h1>
        {registerErrorMessage && (
          <Alert
            type="error"
            message={registerErrorMessage}
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
            name="name"
            label="Name"
            rules={[{ required: true, whitespace: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, whitespace: true, type: "email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="New Password"
            rules={[{ required: true }]}
          >
            <Input type="password" />
          </Form.Item>
          <Button htmlType="submit" className="_button-solid">
            Sign up
          </Button>
        </Form>
      </section>
    </LoginLayout>
  );
};

export default Register;
