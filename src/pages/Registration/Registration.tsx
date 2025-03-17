import Stepper from "components/Stepper";
import { registrationSteps } from "pages/Registration/utils";
import { useState } from "react";
import Description from "components/Description";
import { FormProvider, useForm } from "react-hook-form";
import PhoneStep from "./components/PhoneStep";
import {
  HandleChangeRegistrationStep,
  RegistrationFormType,
  RegistrationStepsEnum,
} from "./types";
import CodeStep from "pages/Registration/components/CodeStep";

const Registration = () => {
  const [step, setStep] = useState(RegistrationStepsEnum.PHONE);

  const form = useForm<RegistrationFormType>({
    defaultValues: { phoneFormat: "+1", phoneNumber: "+1 555 555-1234" },
  });

  const handleChangeStep: HandleChangeRegistrationStep =
    (step: RegistrationStepsEnum) => () => {
      setStep(step);
    };

  return (
    <div className="flex flex-col justify-center max-w-[456px] mx-auto pt-14">
      <Stepper steps={registrationSteps} activeStep={step} />
      <div className="mt-20 flex flex-col gap-8">
        <Description
          title="Registration"
          subtitle="Fill in the registration data. It will take a couple of minutes. All
            you need is a phone number and e-mail"
        />
        <FormProvider {...form}>
          {step === RegistrationStepsEnum.PHONE && (
            <PhoneStep handleChangeStep={handleChangeStep} />
          )}
          {step === RegistrationStepsEnum.CODE && (
            <CodeStep handleChangeStep={handleChangeStep} />
          )}
        </FormProvider>
      </div>
    </div>
  );
};

export default Registration;
