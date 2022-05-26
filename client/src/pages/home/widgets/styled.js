import styled, { css } from "styled-components";

export const Container = styled("div")(
  ({ theme }) => css`
    background-color: ${theme.color.second};
    width: 400px;
    height: 200px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 12px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  `
);

export const HomeWidgetBalance = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HomeBalanceLine = styled("div")`
  display: flex;
  align-items: center;
`;

export const Euro = styled("div")(
  () =>
    css`
      display: flex;
      align-items: center;
    `
);
export const Dollar = styled("div")(
  () =>
    css`
      display: flex;
      align-items: center;
    `
);
