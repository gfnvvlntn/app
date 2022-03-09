import React from "react";
import styled, {css} from "styled-components";

export const ButtonVariant = {
    PRIMARY: 'PRIMARY',
    SECONDARY: 'SECONDARY'
}

const getBaseStyle = () => {
    return css`
      width: 100%;
      color: white;
      font-size: 16px;
      font-weight: 500;
      padding: 12px;
      border-radius: 10px;
      cursor: pointer;
      border: 1px solid white;
    `
}

const getVariantStyle = ({variant}) => {
    switch (variant) {
        case ButtonVariant.PRIMARY: {
            return css`
              color: white;
              background-color: #575C7C;
              &:hover {
                color: #575C7C;
                background-color: white;
                border: 1px solid #575C7C;
              }
              &:active {
                color: #575C7C;
                background-color: white;
                border: 1px solid #575C7C;
              }
              
              &[disabled] {
                opacity: 0.7;
              }
            `
        }
        case ButtonVariant.SECONDARY: {
            return css`
              color: white;
              background-color: #598C82;
              &:hover {
                color: #598C82;
                background-color: white;
                border: 1px solid #598C82;
              }
              &:active {
                color: #598C82;
                background-color: white;
                border: 1px solid #598C82;
              }
              
              &[disabled] {
                opacity: 0.7;
              }
            `
        }

    }
}


const BaseButton = styled('button')(getBaseStyle)


const Button = styled(BaseButton).withConfig({
    shouldForwardProp: (prop) => !['loading','isFullWidth'].includes(prop),
})(getVariantStyle)


Button.displayName = 'Button'

export default Button




