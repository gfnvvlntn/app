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

const IncomesWidget = () => {
  const { budgetStore } = useContext(Context);
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Container>
      <HomeWidgetBalance>
        <Typography variant={TypographyVariant.h2} color={theme.color.green}>
          {t("word.monthly income")}
        </Typography>
        <HomeBalanceLine>
          <Typography variant={TypographyVariant.h1}>
            {budgetStore.incomesPerPeriod.incomesToMonth}
          </Typography>
        </HomeBalanceLine>
      </HomeWidgetBalance>
      <Button
        onClick={() => navigate("incomes")}
        variant={ButtonVariant.PRIMARY}
      >
        {t("button.add incomes")}
      </Button>
    </Container>
  );
};

IncomesWidget.displayName = "IncomesWidget";

export default observer(IncomesWidget);
