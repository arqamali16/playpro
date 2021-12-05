import React from "react";
import { Button, Card, Form, Input, Typography, DatePicker } from "antd";
import { useActions } from "kea";

import SignupLogic from "../Redux/signupLogics";

const SignupStep2 = (props: any) => {
  const [form] = Form.useForm();
  const { getSignupDetails } = useActions(SignupLogic);

  const { next } = props;

  const onSubmit = () => {
    form.validateFields().then((values) => {
      getSignupDetails(values);
      next();
    });
  };

  return (
    <div className="signup-wrapper">
      <Card className="signup-card">
        <Typography.Title level={3} className="signup-title">
          Hi there!
        </Typography.Title>
        <div className="signup-subtitle">
          <p>Tell us a bit more about yourself to set up your account.</p>
        </div>
        <Form form={form}>
          <Form.Item
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please input your first name!",
              },
            ]}
          >
            <Input placeholder="First Name"></Input>
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please input your last name!",
              },
            ]}
          >
            <Input placeholder="Last Name"></Input>
          </Form.Item>
          <Form.Item
            name="dob"
            rules={[
              {
                required: true,
                message: "Please input your last name!",
              },
            ]}
          >
            <DatePicker placeholder="Date of Birth" />
          </Form.Item>
          <p className="sub-heading">
            We use your date of birth to determine eligibility for certain
            competitions.
          </p>
          <Form.Item className="align-center">
            <Button className="signup-button" onClick={onSubmit}>
              CONTINUE
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default SignupStep2;
