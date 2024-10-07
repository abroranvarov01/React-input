import React from "react";
import style from "./btn.module.scss";

export const Btn = ({
  children,
  variant,
  type = "button",
  startIcon,
  endIcon,
  size,
}) => {
  return (
    <button
      className={`${style[variant]} ${style.btn} ${style[size]}`}
      type={type}
    >
      {children}
    </button>
  );
};
