import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "theme/theme";
import { ReactComponent as IconRuble } from "assets/image/icons/icon-ruble.svg";
import styled, { css } from "styled-components";
import {
  Button,
  ButtonVariant,
  Typography,
  TypographyVariant,
} from "components/base";
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";

const IncomesWidget = () => {
  const { budgetStore } = useContext(Context);
  const navigate = useNavigate();
  return (
    <HomeIncomeWidget>
      <HomeIncomeTitle>
        <Typography variant={TypographyVariant.h2} color={theme.color.green}>
          Доход за месяц
        </Typography>
        <HomeBalanceLine>
          <IconRuble />
          <Typography variant={TypographyVariant.h1}>
            {budgetStore.budget.incomesPerPeriod.incomesToMonth}
          </Typography>
        </HomeBalanceLine>
      </HomeIncomeTitle>
      <Button
        onClick={() => navigate("incomes")}
        variant={ButtonVariant.PRIMARY}
      >
        Добавить доходы
      </Button>
    </HomeIncomeWidget>
  );
};

IncomesWidget.displayName = "IncomesWidget";

export default observer(IncomesWidget);

const HomeIncomeWidget = styled("div")(
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

const HomeIncomeTitle = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HomeBalanceLine = styled("div")`
  display: flex;
  align-items: center;
`;
