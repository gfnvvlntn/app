import React, { useContext } from "react";
import styled, { css } from "styled-components";

import { Context } from "index";
import { Typography, TypographyVariant } from "../../base";
import { observer } from "mobx-react-lite";

const HeaderMessage = ({ title }) => {
  const { authStore } = useContext(Context);

  return (
    <>
      <HeaderMessageContainer>
        {authStore.message && <MessageError>{authStore.message}</MessageError>}
      </HeaderMessageContainer>
      <HeaderTitle
        variant={TypographyVariant.h2}
        messageError={authStore.message}
      >
        {title}
      </HeaderTitle>
      <HeaderMessageLine messageError={authStore.message} />
    </>
  );
};

HeaderMessage.displayName = "HeaderMessage";

export default observer(HeaderMessage);

const HeaderMessageLine = styled("div")(
  ({ theme, messageError }) => css`
    background-color: ${messageError
      ? theme.button.secondary
      : theme.button.primary};
    width: 100%;
    height: 2px;
    margin: 20px 0 30px 0;
  `
);

const HeaderMessageContainer = styled("div")(({}) => css``);

const HeaderTitle = styled(Typography)(
  ({ theme, messageError }) => css`
    color: ${messageError ? theme.button.secondary : theme.button.primary};
    margin-top: 20px;
  `
);

const MessageError = styled("div")(
  ({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 8px;
    background-color: ${theme.button.secondary};
    color: white;
    text-align: center;
  `
);
