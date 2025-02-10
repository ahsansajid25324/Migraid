export const registrationData = [
  {
    label: "First Name",
    type: "text",
    name: "firstName",
    placeholder: "First Name",
    component: "input",
    validation: { required: "First Name is required" },
  },
  {
    label: "Last Name",
    type: "text",
    name: "lastName",
    placeholder: "Last Name",
    component: "input",
    validation: { required: "Last Name is required" },
  },
  {
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "Email",
    component: "input",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email address",
      },
    },
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Password",
    component: "input",
    validation: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters long",
      },
    },
  },
  {
    label: "Confirm Password",
    type: "password",
    name: "confirmPassword",
    placeholder: "Confirm Password",
    component: "input",
    validation: {
      required: "Please confirm your password",
      validate: (value, context) =>
        value === context.password || "Passwords do not match",
    },
  },
];

export const loginData = [
  {
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "Email",
    component: "input",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email address",
      },
    },
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Password",
    component: "input",
    validation: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters long",
      },
    },
  },
];

export const updateData = [
  {
    label: "First Name",
    type: "text",
    name: "firstName",
    placeholder: "First Name",
    component: "input",
    validation: { required: "First Name is required" },
  },
  {
    label: "Last Name",
    type: "text",
    name: "lastName",
    placeholder: "Last Name",
    component: "input",
    validation: { required: "Last Name is required" },
  },
  {
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "Email",
    component: "input",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email address",
      },
    },
  },
];
