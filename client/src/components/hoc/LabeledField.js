import React from "react";
import styled, { css } from "styled-components";

const LabeledField =
  (FieldComponent) =>
  ({ label, error, ...props }) => {
    return (
      <FieldWrapper>
        <FieldComponent error={error} {...props} />
        <Label error={error}>{error ? error : label}</Label>
      </FieldWrapper>
    );
  };

LabeledField.displayName = "LabeledField";

export default LabeledField;

const FieldWrapper = styled("div")(
  () => css`
    position: relative;
    width: 100%;
  `
);

const Label = styled("div")(
  ({ error, theme }) => css`
    position: absolute;
    top: -20px;
    font-size: 10px;
    color: ${error ? theme.color.red : "white"};
  `
);
