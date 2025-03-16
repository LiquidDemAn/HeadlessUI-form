import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { FC } from "react";
import ChevronDownIcon from "components/SvgIcons/ChevronDownIcon";
import { SelectControllerProps } from "components/FormControllers/SelectController/types";
import { useController } from "react-hook-form";

const SelectController: FC<SelectControllerProps> = ({ name, options }) => {
  const { field } = useController({ name });

  return (
    <Listbox
      as="div"
      name={name}
      ref={field.ref}
      value={field.value}
      onChange={field.onChange}
    >
      <ListboxButton className="flex justify-between min-w-20 items-center roboto text-lg py-2 pl-4 border-b border-[#BBBFC1] cursor-pointer">
        {field.value}
        <ChevronDownIcon
          aria-hidden="true"
          className="group fill-red pointer-events-none size-4 fill-white/60"
        />
      </ListboxButton>
      <ListboxOptions anchor="bottom" className="bg-white border min-w-20">
        {options.map(({ label, value }) => (
          <ListboxOption
            key={value}
            value={value}
            className="w-full pl-2 data-[focus]:bg-blue-100 cursor-pointer"
          >
            {label}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default SelectController;
