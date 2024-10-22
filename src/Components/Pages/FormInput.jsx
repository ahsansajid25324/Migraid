// src/components/FormInput.js

import React from "react";
import { FormLabel, Input, Select, Textarea } from "@chakra-ui/react";
import "./../../index.css"
const FormInput = ({
  label,
  type,
  name,
  placeholder,
  component,
  options,
  register,
  errors,
  validation,
}) => {
  return (
    <>
      <FormLabel>{label}</FormLabel>
      {component === "input" && (
        <Input
          type={type}
          placeholder={placeholder}
          {...register(name, validation)}
        />
      )}

      {component === "select" && (
        <Select className="css-161pkch" placeholder={placeholder} {...register(name, validation)}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      )}

      {component === "textarea" && (
        <Textarea placeholder={placeholder} {...register(name, validation)} />
      )}

      {errors[name] && <p style={{ color: "red" }}>{errors[name].message}</p>}
    </>
  );
};

export default FormInput;
