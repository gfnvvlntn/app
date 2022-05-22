import React from "react";
import styled, { css } from "styled-components";

const Input = ({ name, onChange, error, value }) => {
  return (
    <FieldWrapper error={error}>
      <Field name={name} onChange={onChange} value={value} />
    </FieldWrapper>
  );
};

Input.displayName = "Input";

export default Input;

const FieldWrapper = styled("div")(
  ({ error, theme }) => css`
    width: 100%;
    border: 1px solid ${error ? theme.color.red : theme.color.four};
    display: flex;
    border-radius: 0.428571rem;
    background-color: ${theme.color.four};
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  `
);

const Field = styled("input")`
  width: 90%;
  border: none;
  outline: none;
  background-color: inherit;
  padding: 9.5px 14px;
  border-radius: 0.428571rem;

  &::placeholder {
    color: white;
    font-size: 14px;
    opacity: 0.7;
  }
`;
