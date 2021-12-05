import React, { useState } from "react";

import SignupStep1 from "../../Components/SignupStep1";
import SignupStep2 from "../../Components/SignupStep2";
import SignupStep3 from "../../Components/SignupStep3";
import SignupStep4 from "../../Components/SignupStep4";

const Signup = (): any => {
  const [step, setStep] = useState(0);

  switch (step) {
    case 0:
      return <SignupStep1 next={() => setStep(step + 1)} />;
    case 1:
      return <SignupStep2 next={() => setStep(step + 1)} />;
    case 2:
      return <SignupStep3 next={() => setStep(step + 1)} />;
    case 3:
      return <SignupStep4 next={() => setStep(step + 1)} />;
  }
};

export default Signup;
