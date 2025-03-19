import CheckboxController from "components/FormControllers/CheckboxController";
import FormWrapper from "components/FormWrapper";
import InputController from "components/FormControllers/InputController";
import SelectController from "components/FormControllers/SelectController";
import TickIcon from "components/SvgIcons/TickIcon";
import Button from "components/Button";
import ArrowRightIcon from "components/SvgIcons/ArrowRightIcon";
import { FC } from "react";
import { ProfileStepProps, ProfileStepsEnum } from "pages/Profile/types";

const PersonalDataStep: FC<ProfileStepProps> = ({ handleChangeStep }) => (
  <>
    <div className="flex flex-row gap-3">
      <CheckboxController name="agree" />
      <div className="flex flex-row gap-2">
        <p className="roboto font-normal text-black">I agree with</p>
        <a
          href="/profile"
          className="roboto font-medium text-[#007AFF] hover:underline"
        >
          Terms of use
        </a>
      </div>
    </div>
    <FormWrapper>
      <div>
        <h3 className="text-[20px] text-[#242731] font-semibold">
          Personal data
        </h3>
        <p className="text-xs text-[#575F6E] font-light">
          Specify exactly as in your passport
        </p>
      </div>
      <InputController name="firstName" label="First name" />
      <InputController name="secondName" label="Second name" />
      <div className="flex flex-row gap-8">
        <SelectController
          name="dateOfBirth"
          label="Date of Birth"
          options={[{ label: "12.05.1992", value: "12.05.1992" }]}
        />
        <SelectController
          name="placeOfBirth"
          label="Place of Birth"
          options={[{ label: "New York, USA", value: "New York, USA" }]}
        />
      </div>
    </FormWrapper>
    <FormWrapper size="small">
      <p className="roboto text-[#242426]">123-45-678</p>
      <p className="text-[13px] text-[#575F6E]">
        <TickIcon className="inline-block mr-1" />
        Your ITIN
      </p>
    </FormWrapper>
    <Button
      endAdornment={<ArrowRightIcon />}
      onClick={handleChangeStep(ProfileStepsEnum.CONTACTS)}
    >
      Go Next
    </Button>
  </>
);

export default PersonalDataStep;
