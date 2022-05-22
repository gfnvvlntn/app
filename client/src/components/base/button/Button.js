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
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  `;
};

const getVariantStyle = ({ theme, variant }) => {
  switch (variant) {
    case ButtonVariant.PRIMARY: {
      return css`
        color: ${theme.font.color};
        background-color: ${theme.button.primary};

        &:hover {
          opacity: 0.8;
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
          opacity: 0.8;
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
