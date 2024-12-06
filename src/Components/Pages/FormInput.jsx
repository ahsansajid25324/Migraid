import React, { useState } from "react";
import {
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Textarea,
  Checkbox,
  IconButton,
  Flex,
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
  checkboxLabel,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {/* Label */}
      {component !== "checkbox" && <FormLabel>{label}</FormLabel>}

      {/* Password Input */}
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
        // Regular Input (Including Phone Number Field)
        <Input
          type={type}
          placeholder={placeholder}
          {...register(name, validation)}
        />
      ) : component === "select" ? (
        // Dropdown Select
        <Select placeholder={placeholder} {...register(name, validation)}>
          {options?.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      ) : component === "textarea" ? (
        // Textarea Field
        <Textarea placeholder={placeholder} {...register(name, validation)} />
      ) : component === "checkbox" ? (
        <Flex alignItems="center">
          <Checkbox {...register(name, validation)} colorScheme="green">
            {checkboxLabel}
          </Checkbox>
        </Flex>
      ) : null}

      {/* Error Message */}
      {errors[name] && <p style={{ color: "red" }}>{errors[name].message}</p>}
    </>
  );
};

export default FormInput;
