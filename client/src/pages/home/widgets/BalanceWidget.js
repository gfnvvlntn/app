import React, { useContext } from "react";

import { theme } from "theme/theme";
import Moment from "react-moment";
import { ReactComponent as IconRuble } from "assets/image/icons/icon-ruble.svg";
import styled, { css } from "styled-components";
import { Context } from "index";
import {observer} from "mobx-react-lite";
import {Typography, TypographyVariant} from "components/base";


const BalanceWidget = () => {
  const { budgetStore } = useContext(Context);


  return (
    <HomeBalanceWidget>
      <HomeBalance>
        <Typography variant={TypographyVariant.h2} color={theme.color.green}>
          Дата
        </Typography>
        <Typography variant={TypographyVariant.h2}>
            <Moment format="DD" className={'time'}/>
            <Moment format="MM" className={'time'}/>
            <Moment format="YY" className={'time'}/>
        </Typography>
      </HomeBalance>
      <HomeBalance>
        <Typography variant={TypographyVariant.h2} color={theme.color.green}>
          Баланс
        </Typography>
        <HomeBalanceLine>
          <IconRuble />
          <Typography variant={TypographyVariant.h1}>
            {budgetStore.budget.balance}
          </Typography>
        </HomeBalanceLine>
      </HomeBalance>
    </HomeBalanceWidget>
  );
};

BalanceWidget.displayName = "BalanceWidget";

export default observer(BalanceWidget);

const HomeBalanceWidget = styled("div")(
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

const HomeBalance = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HomeBalanceLine = styled("div")`
  display: flex;
  align-items: center;
`;
