import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Typography, TypographyVariant } from "components/base";
import { Context } from "index";

const Statistic = () => {
  const { budgetStore } = useContext(Context);

  return (
    <>
      <div>
        <Typography variant={TypographyVariant.h1}>Доходы</Typography>
        <Typography variant={TypographyVariant.h3}>
          За день: {budgetStore.budget.incomesPerPeriod.incomesToday}
        </Typography>
        <Typography variant={TypographyVariant.h3}>
          За неделю: {budgetStore.budget.incomesPerPeriod.incomesToWeek}
        </Typography>
        <Typography variant={TypographyVariant.h3}>
          За месяц: {budgetStore.budget.incomesPerPeriod.incomesToMonth}
        </Typography>
        <Typography variant={TypographyVariant.h3}>
          За год: {budgetStore.budget.incomesPerPeriod.incomesToYear}
        </Typography>
      </div>
      <div>
        <Typography variant={TypographyVariant.h1}>Расходы</Typography>
        <Typography variant={TypographyVariant.h3}>
          За день: {budgetStore.budget.expensesPerPeriod.expensesToday}
        </Typography>
        <Typography variant={TypographyVariant.h3}>
          За неделю: {budgetStore.budget.expensesPerPeriod.expensesToWeek}
        </Typography>
        <Typography variant={TypographyVariant.h3}>
          За месяц: {budgetStore.budget.expensesPerPeriod.expensesToMonth}
        </Typography>
        <Typography variant={TypographyVariant.h3}>
          За год: {budgetStore.budget.expensesPerPeriod.expensesToYear}
        </Typography>
      </div>
    </>
  );
};

Statistic.displayName = "Statistic";

export default observer(Statistic);
