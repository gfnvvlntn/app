import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import styled, { css } from "styled-components";
import MainLayout from "../../components/composite/layouts/MainLayout";
import api from "../../hooks/use-api";

import BalanceWidget from "./widgets/BalanceWidget";
import ExpensesWidget from "./widgets/ExpensesWidget";
import IncomesWidget from "./widgets/IncomesWidget";

const Home = () => {
  const { authStore } = useContext(Context);

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    api
      .get(`/getBalance`)
      .then((response) => setBalance(response.data.budget.balance))
      .catch((e) => console.log(e));
  }, []);

  return (
    <MainLayout>
      <HomeHeader>{authStore.user.email}</HomeHeader>
      <BalanceWidget balance={balance}/>
      <ExpensesWidget/>
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
