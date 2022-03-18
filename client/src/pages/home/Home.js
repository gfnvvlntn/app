import React, { useContext } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import styled, { css } from "styled-components";
import MainLayout from "../../components/composite/layouts/MainLayout";

import BalanceWidget from "./widgets/BalanceWidget";
import ExpensesWidget from "./widgets/ExpensesWidget";
import IncomesWidget from "./widgets/IncomesWidget";

const Home = () => {
  const { authStore } = useContext(Context);

  return (
    <MainLayout>
      <HomeHeader>{authStore.user.email}</HomeHeader>
      <BalanceWidget />
      <ExpensesWidget />
      <IncomesWidget />
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
