import React from "react";
import { Button, Card, Form, Input, Typography, DatePicker } from "antd";

const SignupStep2 = (props: any) => {
  const { next } = props;
  return (
    <div className="signup-wrapper">
      <Card className="signup-card">
        <Typography.Title level={3} className="signup-title">
          Hi there!
        </Typography.Title>
        <div className="signup-subtitle">
          <p>Tell us a bit more about yourself to set up your account.</p>
        </div>
        <Form>
          <Form.Item>
            <Input placeholder="First Name"></Input>
          </Form.Item>
          <Form.Item>
            <Input placeholder="Last Name"></Input>
          </Form.Item>
          <Form.Item>
            <DatePicker placeholder="Date of Birth" />
          </Form.Item>
          <p className="sub-heading">
            We use your date of birth to determine eligibility for certain
            competitions.
          </p>
          <Form.Item className="align-center">
            <Button className="signup-button" onClick={() => next()}>
              CONTINUE
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default SignupStep2;
