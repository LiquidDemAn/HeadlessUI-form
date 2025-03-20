import { FC } from "react";
import { ProfileStepProps, ProfileStepsEnum } from "pages/Profile/types";
import FormWrapper from "components/FormWrapper";
import { FormProvider, useForm } from "react-hook-form";
import InputController from "components/FormControllers/InputController";
import EmailIcon from "components/SvgIcons/EmailIcon";
import PhoneIcon from "components/SvgIcons/PhoneIcon";
import SelectController from "components/FormControllers/SelectController";
import { socialSelectItems } from "./utils";
import Button from "components/Button";
import PlusIcon from "components/SvgIcons/PlusIcon";
import ArrowRightIcon from "components/SvgIcons/ArrowRightIcon";

const ContactsStep: FC<ProfileStepProps> = ({ handleChangeStep }) => {
  const form = useForm({
    defaultValues: { firstSocial: "skype", secondSocial: "facebook" },
  });

  return (
    <FormProvider {...form}>
      <FormWrapper>
        <div>
          <h3 className="text-[20px] text-[#242731] font-semibold">Contacts</h3>
          <p className="text-xs text-[#575F6E] font-light">
            These contacts are used to inform about orders
          </p>
        </div>
        <InputController StartAdornment={EmailIcon} name="email" />
        <InputController StartAdornment={PhoneIcon} name="phone" />
        <div>
          <h3 className="text-[20px] text-[#242731] font-semibold">
            Social network
          </h3>
          <p className="text-xs text-[#575F6E] font-light">
            Indicate the desired communication method
          </p>
        </div>
        <div className="flex flex-row gap-2">
          <SelectController name="firstSocial" options={socialSelectItems} />
          <InputController name="firstProfile" placeholder="@profile" />
        </div>
        <div className="flex flex-row gap-2">
          <SelectController name="secondSocial" options={socialSelectItems} />
          <InputController name="secondProfile" placeholder="@profile" />
        </div>
        <Button
          variant="text"
          startAdornment={<PlusIcon />}
          className="text-[#007AFF]!"
        >
          Add more
        </Button>
      </FormWrapper>
      <Button
        endAdornment={<ArrowRightIcon />}
        onClick={handleChangeStep(ProfileStepsEnum.DELIVERY_ADDRESS)}
      >
        Go Next
      </Button>
    </FormProvider>
  );
};

export default ContactsStep;
