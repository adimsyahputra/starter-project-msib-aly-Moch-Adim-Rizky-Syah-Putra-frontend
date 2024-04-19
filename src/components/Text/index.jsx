import React from "react";

const sizes = {
  xs: "text-[10px] font-normal",
  lg: "text-xl font-normal",
  s: "text-xs font-normal",
  "2xl": "text-[32px] font-normal md:text-3xl sm:text-[28px]",
  xl: "text-2xl font-normal md:text-[22px]",
  md: "text-base font-normal",
};

const Text = ({ children, className = "", as, size = "xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-kantumruy ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
