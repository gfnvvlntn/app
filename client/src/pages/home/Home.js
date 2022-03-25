import React from "react";
import { observer } from "mobx-react-lite";
import styled, { css } from "styled-components";
import MainLayout from "../../components/composite/layouts/MainLayout";

import BalanceWidget from "./widgets/BalanceWidget";
import ExpensesWidget from "./widgets/ExpensesWidget";
import IncomesWidget from "./widgets/IncomesWidget";
import ExchangeRatesWidget from "./widgets/ExchangeRatesWidget";
import Typography, {TypographyVariant} from "../../components/base/typography/Typography";

const Home = () => {
  return (
    <MainLayout>
      <HomeHeader variant={TypographyVariant.h2}>Главная</HomeHeader>
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

const HomeHeader = styled(Typography)(
  ({ theme }) => css`
    color: ${theme.button.primary};
    margin: 20px;
  `
);

const HomeBody = styled("div")(
  () => css`
    display: flex;
    padding: 20px;
    gap: 20px;
  `
);

const HomeLeftWidgets = styled("div")(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `
);

const HomeRightWidgets = styled("div")(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `
);
