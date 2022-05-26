import styled, { css } from "styled-components";

export const ListContainer = styled("div")(
  ({ theme }) => css`
    background-color: ${theme.color.second};
    display: flex;
    flex-direction: column;
    gap: 10px;
  `
);

export const ItemContainer = styled("div")(
  ({ theme }) => css`
    background-color: ${theme.color.main};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0 8px 10px;
    border-radius: 10px;
  `
);

export const FormContainer = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
`;

export const Content = styled("div")`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
