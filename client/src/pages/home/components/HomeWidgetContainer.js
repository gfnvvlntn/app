import React from "react";
import styled, { css } from "styled-components";

const HomeWidgetContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

HomeWidgetContainer.displayName = "HomeWidgetContainer";

export default HomeWidgetContainer;

const Container = styled("div")(
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