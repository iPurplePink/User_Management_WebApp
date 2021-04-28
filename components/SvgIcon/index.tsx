import React, { FC, SVGProps } from "react";

interface SvgIconProps extends SVGProps<SVGSVGElement> {
  symbolId: string;
}

const SvgIcon: FC<SvgIconProps> = ({ symbolId, ...props }) => (
  <svg {...props}>
    <use xlinkHref={`#${symbolId}`}></use>
  </svg>
);

export default SvgIcon;
