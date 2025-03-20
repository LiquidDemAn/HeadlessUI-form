import { Noop } from "utils/noop";

export type SvgIconProps = {
  fill?: string;
  onClick?: Noop;
  className?: string;
};

export type SelectItem = {
  label: string;
  value: string;
  icon?: (props: SvgIconProps) => JSX.Element;
};
