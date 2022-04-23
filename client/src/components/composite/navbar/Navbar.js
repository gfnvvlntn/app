import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import styled, { css } from "styled-components";
import {IconLogin, IconLogo, IconWarning, IconLogout, IconSettings, IconRegistration} from "assets/image/icons";
import NavbarLink from "./NavbarLink";
import { Context } from "root";

const Navbar = () => {
  const { authStore } = useContext(Context);

  const onLogout = async () => {
    await authStore.logout();
  };

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
          <NavbarLink to={"/login"} icon={<IconLogout />} onClick={onLogout} />
        </NavbarGroupLink>
      </NavbarContainer>
    );
  }
};

Navbar.displayName = "Navbar";

export default observer(Navbar);

const NavbarContainer = styled("div")(
  () => css`
    width: 80px;
    min-height: 100vh;
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
