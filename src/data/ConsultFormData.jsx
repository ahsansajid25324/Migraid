// src/data/formFields.js

export const formData = [
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
    label: "Phone Number",
    type: "tel",
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
    label: "Select Service",
    name: "service",
    placeholder: "Select service",
    component: "select",
    options: [
      { label: "Immigration Consultation", value: "immigration" },
      { label: "Visa Application Assistance", value: "visa" },
      { label: "Business Setup Abroad", value: "business" },
    ],
    validation: { required: "Service selection is required" },
  },
  {
    label: "Message",
    name: "message",
    placeholder: "Enter your message...",
    component: "textarea",
    validation: { required: "Message is required" },
  },
];
