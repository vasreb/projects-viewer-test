import React from "react";

import cn from "classnames";

import "./styles.scss";

export interface SvgWrapperProps {
  size: "48" | "36" | "16";
  children: React.ReactNode;
  className?: string;
}

function SvgWrapper({ size, className, children }: SvgWrapperProps) {
  return (
    <div
      className={cn(className, "SvgWrapper", {
        [`SvgWrapper--${size}`]: size,
      })}
    >
      {children}
    </div>
  );
}

export default SvgWrapper;
