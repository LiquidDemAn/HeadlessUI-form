import {
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { FC, useRef, useState } from "react";
import ChevronDownIcon from "components/SvgIcons/ChevronDownIcon";
import { SelectControllerProps } from "components/FormControllers/SelectController/types";
import { useController } from "react-hook-form";
import { clsx } from "clsx";

const SelectController: FC<SelectControllerProps> = ({
  name,
  label,
  options,
  fullWidth = true,
  listBoxButtonClasses,
}) => {
  const { field } = useController({ name });
  const [_, setKey] = useState(Math.random());
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const onButtonClick = () => {
    setKey(Math.random());
  };

  return (
    <Field className={clsx(fullWidth && "flex-1")}>
      {label && <Label className="text-[14px] text-[#242426]">{label}</Label>}
      <Listbox
        as="div"
        name={name}
        ref={field.ref}
        value={field.value}
        onChange={field.onChange}
      >
        <ListboxButton
          ref={buttonRef}
          onClick={onButtonClick}
          className={clsx(
            "flex justify-between min-h-11 min-w-20 items-center roboto text-lg py-2 pl-4 border-b border-[#BBBFC1] cursor-pointer",
            fullWidth && "w-full",
            listBoxButtonClasses,
          )}
        >
          {field.value}
          <ChevronDownIcon aria-hidden="true" className="ml-auto size-3" />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          className="bg-white border min-w-20"
          style={{ width: buttonRef.current?.clientWidth }}
        >
          {options.map(({ label, value }) => (
            <ListboxOption
              key={value}
              value={value}
              className="pl-2 data-[focus]:bg-blue-100 cursor-pointer"
            >
              {label}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </Field>
  );
};

export default SelectController;
