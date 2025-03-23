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

export type CountryType = {
  iso3: string;
  country: string;
  cities: string[];
};
