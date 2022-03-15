import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import styled, { css } from "styled-components";
import MainLayout from "../../components/composite/layouts/MainLayout";
import api from "../../hooks/use-api";

const Home = () => {
  const { authStore } = useContext(Context);

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    api
      .post(`/getBalance`, { id: authStore.user.id })
      .then((response) => setBalance(response.data.budget.balance))
      .catch((e) => console.log(e));
  }, []);

  return (
    <MainLayout>
      <HomeHeader>{authStore.user.email}</HomeHeader>
      <h3>Баланс: {balance}</h3>
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
