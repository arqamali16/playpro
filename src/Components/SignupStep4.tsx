import React from "react";
import { Button, Card, Form, Input, Typography, Radio } from "antd";

const SignupStep4 = (props: any): any => {
  const { next } = props;
  return (
    <div className="signup-wrapper">
      <Card className="signup-card">
        <Typography.Title level={3} className="signup-title">
          Add Your School Email ID
        </Typography.Title>
        <p className="sub-heading">
          Is abc@xyz.com your personal or school email address?
        </p>

        <Form>
          <Form.Item>
            <Radio.Group>
              <Radio value={1}>Personal</Radio>
              <Radio value={2}>School</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Provide Your School Email Address">
            <Input placeholder="Enter Email ID"></Input>
          </Form.Item>
          <p className="sub-heading">
            We use your personal email to create your PlayPRO account, while a
            separate school email is required to participate in scholastic
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

export default SignupStep4;
