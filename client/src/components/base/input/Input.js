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

const Input = ({ name, ...rest }) => {
  const method = useFormContext();
  const error = method.formState.errors[name];
  return (
    <FieldWrapper error={error}>
      <InputField {...method} name={name} {...rest} />
    </FieldWrapper>
  );
};

Input.displayName = "Input";

export default Input;

const FieldWrapper = styled("div")(
  ({ error, theme }) => css`
    width: 100%;
    border: 1px solid ${error ? theme.color.red : theme.color.border};
    display: flex;
    border-radius: 10px;
    padding: 10px;
  `
);

const Field = styled("input")`
  width: 90%;
  border: none;
  outline: none;
  background-color: inherit;

  &::placeholder {
    color: white;
    font-size: 12px;
    opacity: 0.7;
  }
`;
