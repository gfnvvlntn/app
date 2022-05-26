import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import {
  IconLogin,
  IconLogo,
  IconWarning,
  IconLogout,
  IconSettings,
  IconRegistration,
  IconUsa,
  IconRu,
} from "assets/image/icons";
import NavbarLink from "./NavbarLink";
import { Context } from "root";
import { useTranslation } from "react-i18next";
import { NavbarContainer, NavbarGroupLink, NavbarLine } from "./styled";

const Navbar = () => {
  const { authStore } = useContext(Context);

  const onLogout = async () => {
    await authStore.logout();
  };

  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  if (!authStore.isAuth) {
    return (
      <NavbarContainer>
        <NavbarGroupLink>
          <NavbarLink to={"/login"} icon={<IconLogin />} />
          <NavbarLink to={"/registration"} icon={<IconRegistration />} />
          <NavbarLine />
          <IconRu
            style={{ cursor: "pointer" }}
            onClick={() => changeLanguage("ru")}
          />
          <IconUsa
            onClick={() => changeLanguage("en")}
            style={{ cursor: "pointer" }}
          />
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
