import React from "react";
import styled, { css } from "styled-components";
import { IconRuble, IconEuro, IconDollar } from "assets/image/icons/index";
import HomeWidgetContainer from "../components/HomeWidgetContainer";

const ExchangeRatesWidget = () => {
  return (
    <HomeWidgetContainer>
      <Euro>
        <IconEuro />1 - 130
        <IconRuble />
      </Euro>
      <Dollar>
        <IconDollar />1 - 120
        <IconRuble />
      </Dollar>
    </HomeWidgetContainer>
  );
};

ExchangeRatesWidget.displayName = "ExchangeRatesWidget";

export default ExchangeRatesWidget;

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
