import { Props } from "./types";
import { FC, useEffect, useState } from "react";
import FormWrapper from "components/FormWrapper";
import { useFormContext, useWatch } from "react-hook-form";
import {
  RegistrationFormType,
  RegistrationStepsEnum,
} from "pages/Registration/types";
import PencilIcon from "components/SvgIcons/PencilIcon";
import ReactCodeInput from "react-code-input";
import Button from "components/Button";
import RetryIcon from "components/SvgIcons/RetryIcon";

const CodeStep: FC<Props> = ({ handleChangeStep }) => {
  const [otp, setOtp] = useState("");
  const { control } = useFormContext<RegistrationFormType>();

  const phoneNumber = useWatch({
    control,
    name: "phoneNumber",
  });

  useEffect(() => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
      input.setAttribute("placeholder", "-");
    });
  }, []);

  return (
    <>
      <FormWrapper size="small">
        <p className="roboto text-lg text-[#242426] mb-0.5">{phoneNumber}</p>
        <p className="text-xs text-[#575F6E]">Number not confirmed yet</p>
        <div
          className="absolute right-4 bottom-4 cursor-pointer"
          onClick={handleChangeStep(RegistrationStepsEnum.PHONE)}
        >
          <PencilIcon />
        </div>
      </FormWrapper>
      <div className="flex gap-4 items-center">
        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#242426]">Confirmation code</p>
          <ReactCodeInput
            fields={4}
            name="code"
            value={otp}
            type="number"
            onChange={setOtp}
            inputMode="numeric"
            className="pb-2 border-b border-b-[#BBBFC1]!"
            inputStyle={{
              width: "26px",
              height: "26px",
              border: "none",
              textAlign: "center",
            }}
          />
          <p className="text-xs text-[#575F6E]">
            Confirm phone number with code from sms message
          </p>
        </div>
        <Button
          variant="text"
          className="flex gap-2 items-center min-w-[144px] px-3! text-[#007AFF]!"
        >
          <RetryIcon />
          Send again
        </Button>
      </div>
      <Button disabled={otp?.length !== 4}>Confirm</Button>
    </>
  );
};

export default CodeStep;
