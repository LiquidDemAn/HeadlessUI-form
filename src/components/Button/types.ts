import { MouseEventHandler } from "react";

export type ButtonProps = {
  className?: string;
  disabled?: boolean;
  variant?: "outlined" | "text";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
