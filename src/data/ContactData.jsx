export const contactData = [
  {
    label: "Full Name",
    type: "text",
    name: "fullName",
    placeholder: "Full Name",
    component: "input",
    validation: { required: "Full Name is required" },
  },
  {
    label: "Phone Number",
    type: "number",
    name: "phoneNumber",
    placeholder: "Phone Number",
    component: "input",
    validation: {
      required: "Phone Number is required",
      pattern: {
        value: /^[0-9]+$/,
        message: "Phone number must contain only digits",
      },
    },
  },
  {
    label: "Email Address",
    type: "email",
    name: "email",
    placeholder: "Email",
    component: "input",
    validation: {
      required: "Email Address is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email address",
      },
    },
  },
  {
    label: "Specify your Reason to Contact Us",
    name: "reason",
    placeholder: "Your Reason...",
    component: "textarea",
    validation: { required: "Reason is required" },
  },
  {
    label: "Agreement",
    name: "agreement",
    type: "checkbox",
    component: "checkbox",
    validation: { required: "You must agree to receive SMS from Migraid" },
    checkboxLabel: "By clicking here, I will receive SMS from Migraid.",
  },
];
