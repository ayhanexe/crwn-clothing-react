import React from "react";

import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

export default function Button({ children, buttonType }) {
  return (
    <div className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}>
      {children}
    </div>
  );
}