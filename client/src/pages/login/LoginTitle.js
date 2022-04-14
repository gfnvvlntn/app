import React from "react";
import styled from "styled-components";
import {Typography, TypographyVariant} from "../../components/base";

const LoginTitle = () => {
    return (
        <Container>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{borderBottomLeftRadius:'12px', borderTopLeftRadius: '12px'}}
            >
                <g clipPath="url(#clip0_10_32)">
                    <g opacity="0.5" filter="url(#filter0_f_10_32)">
                        <path d="M128.6 0H0V322.2L81 310L128.6 0Z" fill="#7C87F8" />
                        <path d="M0 322.2V400H240H320L81 310L0 322.2Z" fill="#03C3FF" />
                        <path d="M320 400H400V78.75L81 310L320 400Z" fill="#B5BFF1" />
                        <path d="M400 0H128.6L81 310L400 78.75V0Z" fill="#96ACFF" />
                    </g>
                </g>
                <defs>
                    <filter
                        id="filter0_f_10_32"
                        x="-159.933"
                        y="-159.933"
                        width="719.867"
                        height="719.867"
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
                            stdDeviation="79.9667"
                            result="effect1_foregroundBlur_10_32"
                        />
                    </filter>
                </defs>
            </svg>
            <Content>
                <Typography variant={TypographyVariant.h1}>
                    CashIn
                </Typography>
                <Typography variant={TypographyVariant.h3}>
                    Приложение для введения личного бюджета
                </Typography>
            </Content>
        </Container>
    )
}

LoginTitle.displayName = 'LoginTitle'

export default LoginTitle

const Container = styled("div")`
  width: 400px;
  height: 500px;
  position: relative;
`;

const Content = styled('div')`
  position: absolute;
  right: 10%;
  top: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-align: center;
`