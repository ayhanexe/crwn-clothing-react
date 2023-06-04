import React from "react";

import "./form-input.styles.scss";

export default function FormInput({ label, ...inputRest }) {
  return (
    <div className="group">
      {label && (
        <label
          className={`${
            inputRest?.value?.length ? "shrink" : ""
          } form-input-label`}
        ></label>
      )}
      <input className="form-input" placeholder={label} {...inputRest} />
    </div>
  );
}
