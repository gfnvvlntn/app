import styled, { css } from "styled-components";

export const IncomesFormContainer = styled("div")(
  ({ theme }) => css`
    width: 50%;
    background-color: ${theme.color.second};
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 12px;
  `
);

export const FormContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;