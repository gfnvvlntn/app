import styled, { css } from "styled-components";
import { ButtonVariant } from "../index";

const getBaseStyle = ({ theme }) => {
  return css`
    width: 100%;
    color: ${theme.font.color};
    font-size: 16px;
    font-weight: 500;
    padding: 12px;
    border-radius: 666px;
    cursor: pointer;
    border: none;
    box-shadow: ${theme.boxShadow};
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  `;
};

const getVariantStyle = ({ theme, variant }) => {
  switch (variant) {
    case ButtonVariant.PRIMARY: {
      return css`
        color: ${theme.font.color};
        background-color: ${theme.button.primary};

        &:hover {
          background-color: #406e85;
        }

        &:active {
          color: ${theme.color.main};
          background-color: ${theme.font.color};
        }

        &[disabled] {
          opacity: 0.7;
        }
      `;
    }
    case ButtonVariant.SECONDARY: {
      return css`
        color: ${theme.font.color};
        background-color: ${theme.button.secondary};

        &:hover {
          background-color: #ff2f20;
        }

        &:active {
          color: ${theme.color.third};
          background-color: ${theme.font.color};
        }

        &[disabled] {
          opacity: 0.7;
        }
      `;
    }
    case ButtonVariant.ICON: {
      return css`
        width: 30px;
        background-color: inherit;
        padding: 0;
        box-shadow: none;

        &:hover {
          opacity: 0.8;
          background-color: initial;
        }
      `;
    }
    default:
      return "";
  }
};

const BaseButton = styled("button")(getBaseStyle);

const Button = styled(BaseButton).withConfig({
  shouldForwardProp: (prop) => !["loading", "isFullWidth"].includes(prop),
})(getVariantStyle);

Button.displayName = "Button";

export default Button;
