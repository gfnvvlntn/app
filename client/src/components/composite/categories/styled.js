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
      box-shadow: ${theme.boxShadow}
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

      &:hover {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      }
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
