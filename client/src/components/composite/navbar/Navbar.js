import React, { useContext } from "react";
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";
import styled, { css } from "styled-components";

import { ReactComponent as IconHome } from "../../../assets/image/icons/icon-nav-home.svg";
import { ReactComponent as IconIncome } from "../../../assets/image/icons/icon-nav-income.svg";
import { ReactComponent as IconExpenses } from "../../../assets/image/icons/icon-nav-expenses.svg";
import { ReactComponent as IconStatistics } from "../../../assets/image/icons/icon-nav-statistics.svg";
import { ReactComponent as IconSettings } from "../../../assets/image/icons/icon-nav-settings.svg";
import { ReactComponent as IconLogin } from "../../../assets/image/icons/icon-nav-login.svg";
import { ReactComponent as IconRegistration } from "../../../assets/image/icons/icon-nav-registration.svg";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  const { authStore } = useContext(Context);

  if (!authStore.isAuth) {
    return (
      <NavbarContainer>
        <NavbarGroupLink>
          <NavbarLink to={"/login"} icon={<IconLogin />} />
          <NavbarLink to={"/registration"} icon={<IconRegistration />} />
          <NavbarLine />
        </NavbarGroupLink>
      </NavbarContainer>
    );
  }
  if (authStore.isAuth) {
    return (
      <NavbarContainer>
        <NavbarGroupLink>
          <NavbarLink to={"/"} icon={<IconHome />} />
          <NavbarLink to={"/income"} icon={<IconIncome />} />
          <NavbarLink to={"/expenses"} icon={<IconExpenses />} />
          <NavbarLink to={"/statistics"} icon={<IconStatistics />} />
          <NavbarLine />
        </NavbarGroupLink>
        <NavbarGroupLink>
          <NavbarLine />
          <NavbarLink to={"/setting"} icon={<IconSettings />} />
          <NavbarLink
            to={"/login"}
            icon={<IconLogin />}
            onClick={() => authStore.logout()}
          />
        </NavbarGroupLink>
      </NavbarContainer>
    );
  }
};

Navbar.displayName = "Navbar";

export default observer(Navbar);

const NavbarContainer = styled("div")(
  ({ theme }) => css`
    width: 80px;
    min-height: 100vh;
    background-color: ${theme.color.main};
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  `
);

const NavbarGroupLink = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  gap: 20px;
`;

const NavbarLine = styled("div")`
  width: 100%;
  height: 1.5px;
  background-color: white;
  opacity: 0.7;
`;
