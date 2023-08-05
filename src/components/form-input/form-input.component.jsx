import React from "react";

import { FormInputLabel, Group, Input, shrinkLabel } from "./form-input.styles";

export default function FormInput({ label, ...inputRest }) {

  return (
    <Group>
      {label && (
        <FormInputLabel
          shrink={inputRest.defaultValue.length}
          // className={`${inputRest?.value?.length ? "shrink" : ""
          //   } form-input-label`}
        ></FormInputLabel>
      )}
      <Input placeholder={label} {...inputRest} />
    </Group>
  );
}
