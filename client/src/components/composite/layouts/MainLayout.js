import React from "react";
import styled, { css } from "styled-components";

const MainLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

MainLayout.displayName = "MainLayout";

export default MainLayout;

const Layout = styled("div")(
  ({ theme }) => css`
    width: 100%;
    background-color: ${theme.color.third};
    border-radius: 12px;
    margin: 20px;
  `
);
