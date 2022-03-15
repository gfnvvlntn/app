import styled, { css } from "styled-components";

export const ButtonVariant = {
  PRIMARY: "PRIMARY",
  SECONDARY: "SECONDARY",
};

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
  `;
};

const getVariantStyle = ({ theme, variant }) => {
  switch (variant) {
    case ButtonVariant.PRIMARY: {
      return css`
        color: ${theme.font.color};
        background-color: ${theme.button.primary};
        &:hover {
          color: ${theme.color.main};
          background-color: ${theme.font.color};
        }
        &:active {
          color: ${theme.color.main};
          background-color: ${theme.font.color};
          border: 1px solid ${theme.color.main};
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
          color: #${theme.color.third};
          background-color: ${theme.font.color};
          border: 1px solid ${theme.color.third};
        }
        &:active {
          color: ${theme.color.third};
          background-color: ${theme.font.color};
          border: 1px solid ${theme.color.third};
        }

        &[disabled] {
          opacity: 0.7;
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
