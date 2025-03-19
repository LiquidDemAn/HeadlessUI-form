import Stepper from "components/Stepper";
import Description from "components/Description";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import { HandleChangeProfileStep, ProfileStepsEnum } from "pages/Profile/types";
import { profileSteps } from "pages/Profile/utils";
import PersonalDataStep from "./components/PersonalDataStep";
import ContactStep from "./components/ContactsStep";

const Profile = () => {
  const form = useForm();
  const [step, setStep] = useState(ProfileStepsEnum.PERSONAL_DATA);

  const handleChangeStep: HandleChangeProfileStep = (step) => () =>
    setStep(step);

  return (
    <div className="flex flex-col justify-center max-w-[456px] mx-auto pt-14">
      <Stepper steps={profileSteps} activeStep={step} />
      <div className="mt-20 flex flex-col gap-8">
        <Description
          title="Profile info"
          subtitle="Fill in the data for profile. It will take a couple of minutes. You only need a passport"
        />
        <FormProvider {...form}>
          {step === ProfileStepsEnum.PERSONAL_DATA && (
            <PersonalDataStep handleChangeStep={handleChangeStep} />
          )}
          {step === ProfileStepsEnum.CONTACTS && (
            <ContactStep handleChangeStep={handleChangeStep} />
          )}
        </FormProvider>
      </div>
    </div>
  );
};

export default Profile;
