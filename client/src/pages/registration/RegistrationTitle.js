import React from "react";
import { Typography, TypographyVariant } from "../../components/base";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const RegistrationTitle = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <svg
        style={{ borderBottomLeftRadius: "12px", borderTopLeftRadius: "12px" }}
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_10_30)">
          <g opacity="0.5" filter="url(#filter0_f_10_30)">
            <path d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z" fill="#03FFE0" />
            <path
              d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z"
              fill="#7C87F8"
            />
            <path d="M320 400H400V78.75L106.2 134.75L320 400Z" fill="#03FFE0" />
            <path d="M400 0H128.6L106.2 134.75L400 78.75V0Z" fill="#043AFF" />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_10_30"
            x="-160.333"
            y="-160.333"
            width="720.666"
            height="720.666"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="80.1666"
              result="effect1_foregroundBlur_10_30"
            />
          </filter>
        </defs>
      </svg>
      <Content>
        <Typography variant={TypographyVariant.h1}>CashIn</Typography>
        <Typography variant={TypographyVariant.h3}>{t("slogan")}</Typography>
      </Content>
    </Container>
  );
};

RegistrationTitle.displayName = "RegistrationTitle";

export default RegistrationTitle;

const Container = styled("div")`
  width: 400px;
  height: 500px;
  position: relative;
`;

const Content = styled("div")`
  position: absolute;
  right: 10%;
  top: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-align: center;
`;