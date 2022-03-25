import React from "react";
import styled, { css } from "styled-components";

import { ReactComponent as IconEuro } from "../../../assets/image/icons/icon-euro.svg";
import { ReactComponent as IconDollar } from "../../../assets/image/icons/icon-dollar.svg";
import { ReactComponent as IconRuble } from "../../../assets/image/icons/icon-ruble.svg";

const ExchangeRatesWidget = () => {
  return (
    <HomeExchangeRatesWidget>
      <Euro>
        <IconEuro />1 - 130
        <IconRuble />
      </Euro>
      <Dollar>
        <IconDollar />1 - 120
        <IconRuble />
      </Dollar>
    </HomeExchangeRatesWidget>
  );
};

ExchangeRatesWidget.displayName = "ExchangeRatesWidget";

export default ExchangeRatesWidget;

const HomeExchangeRatesWidget = styled("div")(
  ({ theme }) => css`
    background-color: ${theme.color.second};
    width: 400px;
    height: 200px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 12px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  `
);

const Euro = styled("div")(
  () =>
    css`
      display: flex;
      align-items: center;
    `
);
const Dollar = styled("div")(
  () =>
    css`
      display: flex;
      align-items: center;
    `
);
