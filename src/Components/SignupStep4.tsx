import React, { useState } from "react";
import { Button, Card, Form, Input, Typography, Radio } from "antd";
import { useActions } from "kea";

import SignupLogic from "../Redux/signupLogics";

const SignupStep4 = (props: any): any => {
  const [form] = Form.useForm();
  const { getSignupDetails, signup } = useActions(SignupLogic);

  const [isPersonal, setIsPersonal] = useState(true);

  const { next } = props;

  const onEmailTypeChange = ({ target }: any) => {
    setIsPersonal(target.value === "school" ? true : false);
  };

  const onSignup = () => {
    form.validateFields().then((values) => {
      getSignupDetails(values);
      signup();
    });
  };

  return (
    <div className="signup-wrapper">
      <Card className="signup-card">
        <Typography.Title level={3} className="signup-title">
          Add Your School Email ID
        </Typography.Title>
        <p className="sub-heading">
          Is abc@xyz.com your personal or school email address?
        </p>

        <Form form={form}>
          <Form.Item>
            <Radio.Group onChange={onEmailTypeChange}>
              <Radio value={"personal"}>Personal</Radio>
              <Radio value={"school"}>School</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Provide Your School Email Address"
            name="schoolEmail"
            rules={[
              {
                required: !isPersonal ? true : false,
                type: "email",
                message: "Please input your scool email!",
              },
            ]}
          >
            <Input placeholder="Enter Email ID" disabled={isPersonal}></Input>
          </Form.Item>
          <p className="sub-heading">
            We use your personal email to create your PlayPRO account, while a
            separate school email is required to participate in scholastic
            competitions.
          </p>
          <Form.Item className="align-center">
            <Button className="signup-button" onClick={onSignup}>
              CONTINUE
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default SignupStep4;
