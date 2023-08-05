import React from "react";

import { BaseButton, GoogleAuthButton, InvertedButton } from "./button.styles.jsx";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google",
  inverted: "inverted",
};

const getButton = (type = BUTTON_TYPE_CLASSES.base) => {
  switch (type) {
    case BUTTON_TYPE_CLASSES.base:
      return BaseButton;
    case BUTTON_TYPE_CLASSES.google:
      return GoogleAuthButton;
    case BUTTON_TYPE_CLASSES.inverted:
      return InvertedButton;
    default:
      return BaseButton;
  }
}

export default function Button({ children, buttonType, ...restProps }) {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton {...restProps}>
      {children}
    </CustomButton>
  );
}
