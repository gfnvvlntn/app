import React from "react";
import { IconRuble, IconEuro, IconDollar } from "assets/image/icons/index";
import { Dollar, Euro, Container } from "./styled";

const ExchangeRatesWidget = () => {
  return (
    <Container>
      <Euro>
        <IconEuro />1 - 130
        <IconRuble />
      </Euro>
      <Dollar>
        <IconDollar />1 - 120
        <IconRuble />
      </Dollar>
    </Container>
  );
};

ExchangeRatesWidget.displayName = "ExchangeRatesWidget";

export default ExchangeRatesWidget;
