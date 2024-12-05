import React, { useState } from "react";
import {
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Textarea,
  IconButton,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

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
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <FormLabel>{label}</FormLabel>

      {component === "input" && type === "password" ? (
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            {...register(name, validation)}
          />
          <InputRightElement>
            <IconButton
              icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
              onClick={togglePasswordVisibility}
              variant="ghost"
              aria-label="Toggle Password Visibility"
            />
          </InputRightElement>
        </InputGroup>
      ) : component === "input" ? (
        <Input
          type={type}
          placeholder={placeholder}
          {...register(name, validation)}
        />
      ) : component === "select" ? (
        <Select
          placeholder={placeholder}
          {...register(name, validation)}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      ) : component === "textarea" ? (
        <Textarea placeholder={placeholder} {...register(name, validation)} />
      ) : null}

      {errors[name] && <p style={{ color: "red" }}>{errors[name].message}</p>}
    </>
  );
};

export default FormInput;
