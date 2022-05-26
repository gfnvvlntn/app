import styled, { css } from "styled-components";

export const Container = styled("div")(
  ({ theme }) => css`
    width: 40%;
    background-color: ${theme.color.second};
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `
);
