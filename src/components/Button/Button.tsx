import { Button as HUIButton } from "@headlessui/react";
import { FC, PropsWithChildren } from "react";
import { ButtonProps } from "./types";
import { clsx } from "clsx";

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  onClick,
  children,
  disabled,
  className,
  variant = "outlined",
}) => {
  return (
    <HUIButton
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        className,
        "roboto font-medium w-fit max-h-12 px-6 py-3 rounded cursor-pointer text-base text-[#242731]",
        variant === "outlined" && "border-1 border-[#BBBFC1]",
        variant === "contained" &&
          "px-8 bg-[#007AFF] text-white border-0! popins",
        disabled && "opacity-50 cursor-default ",
      )}
    >
      {children}
    </HUIButton>
  );
};

export default Button;
