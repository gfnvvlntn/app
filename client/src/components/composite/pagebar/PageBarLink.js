import React from "react";
import { IconContainer, Link, TitleContainer } from "./styled";

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
