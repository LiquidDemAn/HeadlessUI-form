import { FormProvider, useForm } from "react-hook-form";
import InputController from "components/FormControllers/InputController";
import SelectController from "components/FormControllers/SelectController";
import FormWrapper from "components/FormWrapper";
import Button from "components/Button";
import TickIcon from "components/SvgIcons/TickIcon";

const DeliveryAddressStep = () => {
  const form = useForm();

  return (
    <FormProvider {...form}>
      <FormWrapper>
        <div>
          <h3 className="text-[20px] text-[#242731] font-semibold">
            Delivery address
          </h3>
          <p className="text-xs text-[#575F6E] font-light">
            Used for shipping orders
          </p>
        </div>
        <InputController name="address" label="Address" />
        <SelectController
          name="city"
          label="City"
          placeholder="New York"
          options={[{ label: "New York", value: "New York" }]}
        />
        <div className="flex flex-row gap-8">
          <SelectController name="country" label="Country" options={[]} />
          <InputController name="zipCode" label="Zip code" />
        </div>
        <InputController name="optional" label="Optional" />
      </FormWrapper>
      <Button
        variant="contained"
        className="pl-6"
        startAdornment={<TickIcon className="h-6 w-6" fill="white" />}
      >
        Save
      </Button>
    </FormProvider>
  );
};

export default DeliveryAddressStep;
