import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavbarLink = ({ to, icon, onClick }) => {
  return (
    <Link to={to} onClick={onClick}>
      {icon}
    </Link>
  );
};

NavbarLink.displayName = "NavbarLink";

export default React.memo(NavbarLink);

const Link = styled(NavLink)`
  opacity: 0.6;

  &.active {
    opacity: 1;
  }
`;
