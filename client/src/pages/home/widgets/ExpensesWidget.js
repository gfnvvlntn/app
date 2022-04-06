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
import {observer} from "mobx-react-lite";

const ExpensesWidget = () => {
  const { budgetStore } = useContext(Context);
  const navigate = useNavigate();
  return (
    <HomeExpensesWidget>
      <HomeExpensesTitle>
        <Typography variant={TypographyVariant.h2} color={theme.color.green}>
          Расходы за сегодня
        </Typography>
        <HomeBalanceLine>
          <Typography variant={TypographyVariant.h1}>
            {budgetStore.expensesToday}
          </Typography>
          <IconRuble />
        </HomeBalanceLine>
      </HomeExpensesTitle>
      <Button
        onClick={() => navigate("/expenses")}
        variant={ButtonVariant.SECONDARY}
      >
        Добавить расходы
      </Button>
    </HomeExpensesWidget>
  );
};

ExpensesWidget.displayName = "ExpensesWidget";

export default observer(ExpensesWidget);

const HomeExpensesWidget = styled("div")(
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

const HomeExpensesTitle = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HomeBalanceLine = styled("div")`
  display: flex;
  align-items: center;
`;
