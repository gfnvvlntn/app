import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import styled, { css } from "styled-components";
import MainLayout from "../../components/composite/layouts/MainLayout";
import api from "../../hooks/use-api";
import { ReactComponent as IconRuble } from "../../assets/image/icons/icon-ruble.svg";
import Moment from "react-moment";
import Button, { ButtonVariant } from "../../components/base/button/Button";
import Typography, {
  TypographyVariant,
} from "../../components/base/typography/Typography";
import { theme } from "../../theme/theme";

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
      <HomeBalanceWidget>
        <HomeBalance>
          <Typography variant={TypographyVariant.h2} color={theme.color.green}>
            Дата
          </Typography>
          <Typography variant={TypographyVariant.h2}>
            <Moment format="DD.MM.YYYY" />
          </Typography>
        </HomeBalance>
        <HomeBalance>
          <Typography variant={TypographyVariant.h2} color={theme.color.green}>
            Баланс
          </Typography>
          <HomeBalanceLine>
            <IconRuble />
            <Typography variant={TypographyVariant.h1}>{balance}</Typography>
          </HomeBalanceLine>
        </HomeBalance>
      </HomeBalanceWidget>
      <HomeIncomeWidget>
        <HomeBalance>
          <Typography variant={TypographyVariant.h2} color={theme.color.green}>
            Расходы за сегодня
          </Typography>
          <HomeBalanceLine>
            <IconRuble />
            <Typography variant={TypographyVariant.h1}>0</Typography>
          </HomeBalanceLine>
        </HomeBalance>
        <Button variant={ButtonVariant.SECONDARY}>Добавить расходы</Button>
      </HomeIncomeWidget>
      <HomeIncomeWidget>
        <HomeBalance>
          <Typography variant={TypographyVariant.h2} color={theme.color.green}>
            Доход
          </Typography>
          <HomeBalanceLine>
            <IconRuble />
            <Typography variant={TypographyVariant.h1}>12 000</Typography>
          </HomeBalanceLine>
        </HomeBalance>
        <Button variant={ButtonVariant.PRIMARY}>Добавить доходы</Button>
      </HomeIncomeWidget>
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

const HomeBalanceWidget = styled("div")(
  ({ theme }) => css`
    background-color: ${theme.color.second};
    width: 400px;
    height: 200px;
    margin: 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 12px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  `
);

const HomeBalance = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HomeBalanceLine = styled("div")`
  display: flex;
  align-items: center;
`;

const HomeIncomeWidget = styled("div")(
  ({ theme }) => css`
    background-color: ${theme.color.second};
    width: 400px;
    height: 200px;
    margin: 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 12px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  `
);
