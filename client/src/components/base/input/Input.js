import React from "react";
import { Field, FieldWrapper } from "./styled";

const Input = ({ name, onChange, error, value }) => {
  return (
    <FieldWrapper error={error}>
      <Field name={name} onChange={onChange} value={value} />
    </FieldWrapper>
  );
};

Input.displayName = "Input";

export default Input;
