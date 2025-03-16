import { Button as HUIButton } from "@headlessui/react";
import { FC, PropsWithChildren } from "react";
import { ButtonProps } from "./types";

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, onClick }) => {
  return (
    <HUIButton
      onClick={onClick}
      className="w-fit max-h-12 px-6 py-3 border-1 border-[#BBBFC1] rounded cursor-pointer"
    >
      {children}
    </HUIButton>
  );
};

export default Button;
