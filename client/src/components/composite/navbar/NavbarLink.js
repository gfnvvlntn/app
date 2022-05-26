import React from "react";
import { Link } from "./styled";

const NavbarLink = ({ to, icon, onClick }) => {
  return (
    <Link to={to} onClick={onClick}>
      {icon}
    </Link>
  );
};

NavbarLink.displayName = "NavbarLink";

export default React.memo(NavbarLink);
