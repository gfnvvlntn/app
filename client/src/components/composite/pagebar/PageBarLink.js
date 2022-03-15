import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const PageBarLink = ({ to, icon, onClick, title }) => {
  return (
    <Link to={to} onClick={onClick}>
      <IconContainer>{icon}</IconContainer>
      <TitleContainer>{title}</TitleContainer>
    </Link>
  );
};

PageBarLink.displayName = "PageBarLink";

export default React.memo(PageBarLink);

const Link = styled(NavLink)`
  opacity: 0.6;
  background-color: inherit;
  margin: 10px 30px;
  padding: 0 10px;
  display: flex;
  gap: 15px;
  text-decoration: none;

  &.active {
    opacity: 1;
    border-radius: 10px;
  }
`;

const IconContainer = styled("div")``;

const TitleContainer = styled("p")``;
