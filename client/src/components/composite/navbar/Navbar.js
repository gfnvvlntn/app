import React, { useContext } from "react";
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";
import styled, { css } from "styled-components";

import { ReactComponent as IconSettings } from "../../../assets/image/icons/icon-nav-settings.svg";
import { ReactComponent as IconLogin } from "../../../assets/image/icons/icon-nav-login.svg";
import { ReactComponent as IconRegistration } from "../../../assets/image/icons/icon-nav-registration.svg";
import { ReactComponent as IconLogo } from "../../../assets/image/icons/icon-logo.svg";
import { ReactComponent as IconWarning } from "../../../assets/image/icons/icon-warning.svg";
import { ReactComponent as IconLogout } from "../../../assets/image/icons/icon-nav-logout.svg";
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
          <IconLogo />
          <NavbarLine />
        </NavbarGroupLink>
        <NavbarGroupLink>
          {!authStore.user.isActivated && <IconWarning />}
        </NavbarGroupLink>
        <NavbarGroupLink>
          <NavbarLine />
          <NavbarLink to={"/setting"} icon={<IconSettings />} />
          <NavbarLink
            to={"/login"}
            icon={<IconLogout />}
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
    // background-color: ${theme.color.second};
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  `
);

const NavbarGroupLink = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  gap: 20px;
`;

const NavbarLine = styled("div")`
  width: 100%;
  height: 1.5px;
  background-color: white;
  opacity: 0.7;
`;
