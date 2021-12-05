import React from "react";
import { Button, Card, Form, Input, Typography, Checkbox } from "antd";
import { useActions } from "kea";

import SignupLogic from "../Redux/signupLogics";

const SignupStep3 = (props: any): any => {
  const [form] = Form.useForm();
  const { getSignupDetails } = useActions(SignupLogic);

  const { next } = props;

  return (
    <div className="signup-wrapper">
      <Card className="signup-card">
        <Typography.Title level={3} className="signup-title">
          Welcome To PlayPRO
        </Typography.Title>
        <div className="signup-subtitle magin-top-bottom">
          <p>You can now create or join teams for PlayPRO Competions.</p>
          <p className="sub-heading">
            If you are a student, you are required to sign up with your school
            email address.
          </p>
        </div>

        <Form>
          <Form.Item className="align-center">
            <Button className="signup-button" onClick={() => next()}>
              JOIN YOUR SCHOOL
            </Button>
          </Form.Item>
          <Form.Item className="align-center">
            <Button type="link" onClick={() => next()}>
              SKIP
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default SignupStep3;
