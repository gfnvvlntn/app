import React from "react";
import { observer } from "mobx-react-lite";
import styled, { css } from "styled-components";
import MainLayout from "../../components/composite/layouts/MainLayout";

import BalanceWidget from "./widgets/BalanceWidget";
import ExpensesWidget from "./widgets/ExpensesWidget";
import IncomesWidget from "./widgets/IncomesWidget";
import ExchangeRatesWidget from "./widgets/ExchangeRatesWidget";

const Home = () => {
  return (
    <MainLayout>
      <HomeHeader>Главная</HomeHeader>
      <HomeBody>
        <HomeLeftWidgets>
          <BalanceWidget />
          <ExpensesWidget />
          <IncomesWidget />
        </HomeLeftWidgets>
        <HomeRightWidgets>
          <ExchangeRatesWidget />
        </HomeRightWidgets>
      </HomeBody>
    </MainLayout>
  );
};

Home.displayName = "Home";

export default observer(Home);

const HomeHeader = styled("h3")(
  ({ theme }) => css`
    color: ${theme.button.primary};
    margin: 20px;
  `
);

const HomeBody = styled("h3")(
  () => css`
    display: flex;
    padding: 20px;
    gap: 20px;
  `
);

const HomeLeftWidgets = styled("h3")(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `
);

const HomeRightWidgets = styled("h3")(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `
);
