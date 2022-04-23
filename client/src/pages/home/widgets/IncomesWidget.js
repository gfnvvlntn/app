import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "theme/theme";
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

const IncomesWidget = () => {
  const { budgetStore } = useContext(Context);
  const navigate = useNavigate();
  return (
    <HomeWidgetContainer>
      <HomeIncomeTitle>
        <Typography variant={TypographyVariant.h2} color={theme.color.green}>
          Доход за месяц
        </Typography>
        <HomeBalanceLine>
          <Typography variant={TypographyVariant.h1}>
            {budgetStore.incomesPerPeriod.incomesToMonth}
          </Typography>
        </HomeBalanceLine>
      </HomeIncomeTitle>
      <Button
        onClick={() => navigate("incomes")}
        variant={ButtonVariant.PRIMARY}
      >
        Добавить доходы
      </Button>
    </HomeWidgetContainer>
  );
};

IncomesWidget.displayName = "IncomesWidget";

export default observer(IncomesWidget);

const HomeIncomeTitle = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HomeBalanceLine = styled("div")`
  display: flex;
  align-items: center;
`;
