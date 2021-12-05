import React from "react";
import { kea } from "kea";
import axios from "axios";
import { Modal, notification } from "antd";
import _ from "lodash";

const headers = {
  key: "x-api-key",
  value: "RMKi0JadEa2NDcZsUw3dS8ld8HKztPDn8L2gGoWy",
  type: "text",
};

const LoginLogic = kea({
  path: () => ["kea", "login"],

  defaults: {
    signupLoading: false,
    signupDetails: {},
  },

  actions: {
    getSignupDetails: (details: any) => ({ details }),
    setSignupDetails: (signupDetails: any) => ({ signupDetails }),
    signup: true,
  },

  reducers: {
    signupLoading: {
      signup: () => true,
    },
    signupDetails: [
      {},
      {
        setSignupDetails: (_: any, { signupDetails }: any) => signupDetails,
      },
    ],
  },

  listeners: ({ actions, values }) => ({
    getSignupDetails: async ({ details, callback }: any) => {
      actions.setSignupDetails({ ...details, ...values.signupDetails });
    },
    signup: async ({ details, callback }: any) => {
      const { signupDetails } = values;

      const studentPayload = {
        user_email: signupDetails.email,
        user_password: signupDetails.password,
        user_first_name: signupDetails.firstName,
        user_last_name: signupDetails.lastName,
        user_date_of_birth: signupDetails.dob,
        user_role: 0,
        user_school: "Cornell University",
        user_grad_yr: "2022",
      };
      try {
        const res = axios.post(
          "https://jn3529pnk8.execute-api.us-east-1.amazonaws.com/dev/users",
          { mode: "raw", raw: JSON.stringify(studentPayload) },
          { headers }
        );
      } catch (err) {
        notification.error({
          message: "Adding user falied",
          description: _.get(err, "message", ""),
        });
      }
    },
  }),
});

export default LoginLogic;
