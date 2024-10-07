import React from "react";
import style from "./input.module.scss"
import { useForm } from "react-hook-form";

export const Input = ({ variant, register, name, placeholder, type, size }) => {
  return (
    <input
      {...register(name, { required: true })}
      type={type}
      placeholder={placeholder}
      className={`${style[variant]} ${style[size]}`}
    />
  );
};
