import React from "react";
import styled, { css } from "styled-components";

const HeaderMessage = ({ messageError, messageSuccess, title }) => {
  return (
    <>
      {messageError && <MessageError>{messageError}</MessageError>}
      {messageSuccess && <MessageSuccess>{messageSuccess}</MessageSuccess>}
      <h2>{title}</h2>
      <HeaderMessageLine messageError={messageError}/>
    </>
  );
};

HeaderMessage.displayName = "HeaderMessage";

export default React.memo(HeaderMessage);

const HeaderMessageLine = styled("div")(
  ({ theme, messageError }) => css`
    background-color: ${messageError? theme.button.secondary : theme.button.primary};
    width: 100%;
    height: 2px;
    margin: 20px 0 30px 0;
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
const MessageSuccess = styled("div")(
  ({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 8px;
    background-color: ${theme.color.performance};
    color: white;
    text-align: center;
  `
);
