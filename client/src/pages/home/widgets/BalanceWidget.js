import React, { useContext } from "react";
import { theme } from "theme/theme";
import Moment from "react-moment";
import { Context } from "root";
import { observer } from "mobx-react-lite";
import { Typography, TypographyVariant } from "components/base";
import { useTranslation } from "react-i18next";
import { HomeWidgetBalance, HomeBalanceLine, Container } from "./styled";

const BalanceWidget = () => {
  const { budgetStore } = useContext(Context);

  const { t } = useTranslation();

  return (
    <Container>
      <HomeWidgetBalance>
        <Typography variant={TypographyVariant.h2} color={theme.color.green}>
          {t("word.date")}
        </Typography>
        <Typography variant={TypographyVariant.h2}>
          <Moment format="DD" className={"time"} />
          <Moment format="MM" className={"time"} />
          <Moment format="YY" className={"time"} />
        </Typography>
      </HomeWidgetBalance>
      <HomeWidgetBalance>
        <Typography variant={TypographyVariant.h2} color={theme.color.green}>
          {t("word.balance")}
        </Typography>
        <HomeBalanceLine>
          <Typography variant={TypographyVariant.h1}>
            {budgetStore.balance}
          </Typography>
        </HomeBalanceLine>
      </HomeWidgetBalance>
    </Container>
  );
};

BalanceWidget.displayName = "BalanceWidget";

export default observer(BalanceWidget);
