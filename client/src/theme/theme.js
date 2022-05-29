import { css } from "styled-components";

export const theme = {
  color: {
    main: "#1c1e25",
    second: "#15161b",
    third: "#232429",
    four: "#24262e",
    border: "white",
    red: "#d85050",
    green: "#355b6e",
  },
  font: {
    color: "white",
  },
  button: {
    primary: "#4b819c",
    secondary: "#ff4f42",
  },

  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);",

  typography: {
    h1: css`
      font-style: normal;
      font-weight: 500;
      font-size: 22px;
      line-height: 135%;
    `,
    h2: css`
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 135%;
    `,
    h3: css`
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 135%;
    `,
    h4: css`
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 135%;
    `,
    h5: css`
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 135%;
    `,
    text1: css`
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 135%;
    `,
    text2: css`
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 135%;
    `,
    text3: css`
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 135%;
    `,
    text4: css`
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 135%;
    `,
    text5: css`
      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      line-height: 135%;
    `,
    text6: css`
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 135%;
    `,
    text7: css`
      font-style: normal;
      font-weight: normal;
      font-size: 9px;
      line-height: 125%;
    `,
    text8: css`
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 135%;
      width: max-content;
    `,
  },
};
