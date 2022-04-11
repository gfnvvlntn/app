import React from "react";
import { useFormContext } from "react-hook-form";
import styled, { css } from "styled-components";

const InputField = React.memo(
  ({ register, formState, name, ...rest }) => {
    return <Field {...register(name)} {...rest} />;
  },
  (prevProps, nextProps) =>
    prevProps.formState.isDirty === nextProps.formState.isDirty
);

const Input = ({ name, label, ...rest }) => {
  const method = useFormContext();
  const error = method.formState.errors[name];
  return (
    <FieldWrapper error={error}>
      <InputField {...method} name={name} {...rest} />
      <Label error={error}>{error ? error.message : label}</Label>
    </FieldWrapper>
  );
};

Input.displayName = "Input";

export default Input;

const FieldWrapper = styled("div")(
  ({ error, theme }) => css`
    position: relative;
    width: 100%;
    border: 1px solid ${error ? theme.color.red : theme.color.four};
    display: flex;
    border-radius: 0.428571rem;
    background-color: ${theme.color.four};
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

const Label = styled("div")(
  ({ error, theme }) => css`
    color: ${error ? theme.color.red : theme.color.border};
    position: absolute;
    font-size: 10px;
    top: -20px;
  `
);
