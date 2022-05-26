import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "theme/theme";
import {
  Button,
  ButtonVariant,
  Typography,
  TypographyVariant,
} from "components/base";
import { Context } from "root";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { HomeBalanceLine, HomeWidgetBalance, Container } from "./styled";

const ExpensesWidget = () => {
  const { budgetStore } = useContext(Context);
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Container>
      <HomeWidgetBalance>
        <Typography variant={TypographyVariant.h2} color={theme.color.green}>
          {t("word.today's expenses")}
        </Typography>
        <HomeBalanceLine>
          <Typography variant={TypographyVariant.h1}>
            {budgetStore.expensesPerPeriod.expensesToday}
          </Typography>
        </HomeBalanceLine>
      </HomeWidgetBalance>
      <Button
        onClick={() => navigate("/expenses")}
        variant={ButtonVariant.SECONDARY}
      >
        {t("button.add expenses")}
      </Button>
    </Container>
  );
};

ExpensesWidget.displayName = "ExpensesWidget";

export default observer(ExpensesWidget);
