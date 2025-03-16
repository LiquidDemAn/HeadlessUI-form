import { Input } from "@headlessui/react";
import { useController } from "react-hook-form";
import { FC } from "react";
import { InputControllerProps } from "./types";

const InputController: FC<InputControllerProps> = ({ name }) => {
  const { field } = useController({ name });

  return (
    <Input
      type="text"
      name={name}
      ref={field.ref}
      value={field.value || ""}
      onChange={field.onChange}
      className="w-full focus-visible:outline-0 roboto text-lg py-2 px-4 border-b border-[#BBBFC1]"
    />
  );
};

export default InputController;
