import React from "react";
import { Button, Card, Form, Input, Typography, Checkbox } from "antd";

const SignupStep1 = (props: any) => {
  const { next } = props;

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
        <Form>
          <Form.Item label="Email">
            <Input placeholder="Email"></Input>
          </Form.Item>
          <Form.Item label="Password">
            <Input placeholder="Password"></Input>
          </Form.Item>
          <Form.Item>
            <Checkbox>I agree the Terms and Conditions</Checkbox>
          </Form.Item>
          <Form.Item className="align-center">
            <Button className="signup-button" onClick={() => next()}>
              CREATE ACCOUNT
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default SignupStep1;
