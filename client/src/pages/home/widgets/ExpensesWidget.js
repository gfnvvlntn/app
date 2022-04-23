import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "theme/theme";
import { IconRuble } from "assets/image/icons/index";
import styled from "styled-components";
import {
  Button,
  ButtonVariant,
  Typography,
  TypographyVariant,
} from "components/base";
import { Context } from "root";
import { observer } from "mobx-react-lite";
import HomeWidgetContainer from "../components/HomeWidgetContainer";

const ExpensesWidget = () => {
  const { budgetStore } = useContext(Context);
  const navigate = useNavigate();
  return (
    <HomeWidgetContainer>
      <HomeExpensesTitle>
        <Typography variant={TypographyVariant.h2} color={theme.color.green}>
          Расходы за сегодня
        </Typography>
        <HomeBalanceLine>
          <Typography variant={TypographyVariant.h1}>
            {budgetStore.budget.expensesPerPeriod.expensesToday}
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
    </HomeWidgetContainer>
  );
};

ExpensesWidget.displayName = "ExpensesWidget";

export default observer(ExpensesWidget);


const HomeExpensesTitle = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HomeBalanceLine = styled("div")`
  display: flex;
  align-items: center;
`;
