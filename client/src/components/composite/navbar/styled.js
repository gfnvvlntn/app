import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled("div")(
  () => css`
    width: 80px;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  `
);

export const NavbarGroupLink = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  gap: 20px;
`;

export const NavbarLine = styled("div")`
  width: 100%;
  height: 1.5px;
  background-color: white;
  opacity: 0.7;
`;

export const Link = styled(NavLink)`
  opacity: 0.6;

  &.active {
    opacity: 1;
  }
`;
