import React from "react";
import styled, {css} from "styled-components";

const Input = (props) => {
  return (
    <FieldWrapper>
      <Field type="text" {...props} />
    </FieldWrapper>
  );
};

Input.displayName = "Input";

export default React.memo(Input);

const FieldWrapper = styled("div")(
    ({theme}) => css`
  width: 100%;
  border: 1px solid ${theme.color.border};
  display: flex;
  border-radius: 10px;
  padding: 10px;
`);

const Field = styled("input")`
  border: none;
  outline: none;
  background-color: inherit;
`;
