import React from "react";
import { Button, Card, Form, Input, Typography, Checkbox } from "antd";
import { useActions, useValues } from "kea";

import SignupLogic from "../Redux/signupLogics";

const SignupStep1 = (props: any) => {
  const [form] = Form.useForm();
  const { signupDetails } = useValues(SignupLogic);
  const { getSignupDetails } = useActions(SignupLogic);

  const { next } = props;

  const onSubmit = () => {
    form.validateFields().then((values) => {
      getSignupDetails(values);
      next();
    });
  };

  console.log(signupDetails);

  return (
    <div className="signup-wrapper">
      <Card className="signup-card">
        <Typography.Title level={3} className="signup-title">
          Create A PlayPRO Account
        </Typography.Title>
        <div className="signup-subtitle">
          <p>Join our community of esports players and coaches</p>
          <p>
            If you are a student, you are required to sign up with your school
            email address.
          </p>
        </div>
        <Form form={form}>
          <Form.Item
            label="Email"
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
            <Input placeholder="Email"></Input>
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input placeholder="Password"></Input>
          </Form.Item>
          <Form.Item>
            <Checkbox>I agree the Terms and Conditions</Checkbox>
          </Form.Item>
          <Form.Item className="align-center">
            <Button className="signup-button" onClick={onSubmit}>
              CREATE ACCOUNT
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default SignupStep1;
