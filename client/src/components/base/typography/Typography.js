import styled, { css } from "styled-components";
import React from "react";
import { TypographyTag, TypographyVariant } from "../index";

const getDefaultStyle = ({ color }) => css`
  font-size: 1rem;
  margin: 0;
  padding: 0;
  color: ${color};
`;

const getVariantStyle = ({ variant, theme }) => {
  switch (variant) {
    case TypographyVariant.h1:
      return theme.typography.h1;

    case TypographyVariant.h2:
      return theme.typography.h2;

    case TypographyVariant.h3:
      return theme.typography.h3;

    case TypographyVariant.h4:
      return theme.typography.h4;

    case TypographyVariant.h5:
      return theme.typography.h5;

    case TypographyVariant.text1:
      return theme.typography.text1;

    case TypographyVariant.text2:
      return theme.typography.text2;

    case TypographyVariant.text3:
      return theme.typography.text3;

    default:
      return "";
  }
};

const TypographyStyled = styled("div")(getDefaultStyle, getVariantStyle);

const Typography = ({
  children,
  variant = TypographyVariant.text1,
  as = null,
  color,
  ...props
}) => {
  const tag = variant ? TypographyTag[variant] : TypographyTag.text1;

  return (
    <TypographyStyled
      as={as ? as : tag}
      variant={variant}
      color={color}
      {...props}
    >
      {children}
    </TypographyStyled>
  );
};

Typography.displayName = "Typography";

export default React.memo(Typography);
