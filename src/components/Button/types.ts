import { MouseEventHandler } from "react";

export type ButtonProps = {
  className?: string;
  disabled?: boolean;
  variant?: "outlined" | "text" | "contained";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
