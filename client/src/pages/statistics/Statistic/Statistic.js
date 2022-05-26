import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Typography, TypographyVariant } from "components/base";
import { Context } from "root";
import { useTranslation } from "react-i18next";

const Statistic = () => {
  const { t } = useTranslation();
  const { budgetStore } = useContext(Context);
  return (
    <>
      <div>
        <Typography variant={TypographyVariant.h1}>
          {t("label.incomes")}
        </Typography>
        <Typography variant={TypographyVariant.h3}>
          {t("range.per day")}: {budgetStore.incomesPerPeriod.incomesToday}
        </Typography>
        <Typography variant={TypographyVariant.h3}>
          {t("range.per week")}: {budgetStore.incomesPerPeriod.incomesToWeek}
        </Typography>
        <Typography variant={TypographyVariant.h3}>
          {t("range.per month")}: {budgetStore.incomesPerPeriod.incomesToMonth}
        </Typography>
        <Typography variant={TypographyVariant.h3}>
          {t("range.per year")}: {budgetStore.incomesPerPeriod.incomesToYear}
        </Typography>
      </div>
      <div>
        <Typography variant={TypographyVariant.h1}>
          {t("label.expenses")}
        </Typography>
        <Typography variant={TypographyVariant.h3}>
          {t("range.per day")}: {budgetStore.expensesPerPeriod.expensesToday}
        </Typography>
        <Typography variant={TypographyVariant.h3}>
          {t("range.per week")}: {budgetStore.expensesPerPeriod.expensesToWeek}
        </Typography>
        <Typography variant={TypographyVariant.h3}>
          {t("range.per month")}:{" "}
          {budgetStore.expensesPerPeriod.expensesToMonth}
        </Typography>
        <Typography variant={TypographyVariant.h3}>
          {t("range.per year")}: {budgetStore.expensesPerPeriod.expensesToYear}
        </Typography>
      </div>
    </>
  );
};

Statistic.displayName = "Statistic";

export default observer(Statistic);
