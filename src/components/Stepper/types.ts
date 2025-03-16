import { RegistrationStepsEnum } from "pages/Registration/utils";

export type Props = {
  steps: number[];
  activeStep: RegistrationStepsEnum;
};
