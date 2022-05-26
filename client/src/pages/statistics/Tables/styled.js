import styled, { css } from "styled-components";

export const TableContainer = styled("div")(
  ({ theme }) => css`
    height: 78vh;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
      cursor: pointer;
      margin-right: 10px;
    }

    &::-webkit-scrollbar-track {
      width: 10px;
      margin: 20px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background-color: ${theme.color.main};
    }
  `
);

export const TableHeader = styled("div")``;
export const ActionGroup = styled("div")`
  display: flex;
`;