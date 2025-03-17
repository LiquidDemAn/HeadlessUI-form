import { Field, Input, Label } from "@headlessui/react";
import { useController } from "react-hook-form";
import { FC, useState } from "react";
import { InputControllerProps } from "./types";
import EyeIcon from "components/EyeIcon";
import TickIcon from "components/SvgIcons/TickIcon";

const InputController: FC<InputControllerProps> = ({
  name,
  label,
  type = "text",
}) => {
  const isPassword = type === "password";
  const { field } = useController({ name });
  const [isPassVisible, setIsPassVisible] = useState(false);

  const handleTogglePassVisible = () => {
    setIsPassVisible((prev) => !prev);
  };

  return (
    <Field>
      {label && <Label className="text-[14px] text-[#242426]">{label}</Label>}
      <div className="relative">
        <Input
          type={isPassword && isPassVisible ? "text" : type}
          name={name}
          ref={field.ref}
          value={field.value || ""}
          onChange={field.onChange}
          className="w-full focus-visible:outline-0 roboto text-lg py-2 px-4 border-b border-[#BBBFC1]"
        />
        {isPassword && (
          <EyeIcon
            onClick={handleTogglePassVisible}
            className="absolute right-0 bottom-2.75 cursor-pointer"
            {...(isPassVisible && { fill: "#242731" })}
          />
        )}
      </div>
      {isPassword && field?.value?.length >= 7 && (
        <p className="mt-2 text-xs text-[#34C759]">
          <TickIcon className="inline-block mr-1" fill="#34C759" />
          Good password
        </p>
      )}
    </Field>
  );
};

export default InputController;
