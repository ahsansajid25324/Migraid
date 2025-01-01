export const paymentDetails = [
    {
      name: "cardNumber",
      label: "Card Number*",
      placeholder: "Enter card number",
      validation: {
        required: "Card number is required",
        pattern: {
          value: /^[0-9]{16}$/,
          message: "Card number must be 16 digits",
        },
      },
    },
    {
      name: "cardHolder",
      label: "Card Holder*",
      placeholder: "Enter card holder name",
      validation: {
        required: "Card holder name is required",
      },
    },
    {
      name: "validThru",
      label: "Valid THRU*",
      placeholder: "MM/YY",
      validation: {
        required: "Expiration date is required",
        pattern: {
          value: /^(0[1-9]|1[0-2])\/\d{2}$/,
          message: "Enter a valid date (MM/YY)",
        },
      },
    },
    {
      name: "cvc",
      label: "CVC/CVV",
      placeholder: "CVC/CVV",
      validation: {
        required: "CVC is required",
        pattern: {
          value: /^[0-9]{3,4}$/,
          message: "CVC must be 3 or 4 digits",
        },
      },
    },
  ];