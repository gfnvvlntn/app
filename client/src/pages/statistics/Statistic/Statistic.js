import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Typography, TypographyVariant } from "components/base";
import { Context } from "root";

const Statistic = () => {
  const { budgetStore } = useContext(Context);
  console.log(budgetStore.expensesPerPeriod)
  return (
    <>
      <div>
        <Typography variant={TypographyVariant.h1}>Доходы</Typography>
        <Typography variant={TypographyVariant.h3}>
          За день: {budgetStore.incomesPerPeriod.incomesToday}
        </Typography>
        <Typography variant={TypographyVariant.h3}>
          За неделю: {budgetStore.incomesPerPeriod.incomesToWeek}
        </Typography>
        <Typography variant={TypographyVariant.h3}>
          За месяц: {budgetStore.incomesPerPeriod.incomesToMonth}
        </Typography>
        <Typography variant={TypographyVariant.h3}>
          За год: {budgetStore.incomesPerPeriod.incomesToYear}
        </Typography>
      </div>
      <div>
        <Typography variant={TypographyVariant.h1}>Расходы</Typography>
        <Typography variant={TypographyVariant.h3}>
          За день: {budgetStore.expensesPerPeriod.expensesToday}
        </Typography>
        <Typography variant={TypographyVariant.h3}>
          За неделю: {budgetStore.expensesPerPeriod.expensesToWeek}
        </Typography>
        <Typography variant={TypographyVariant.h3}>
          За месяц: {budgetStore.expensesPerPeriod.expensesToMonth}
        </Typography>
        <Typography variant={TypographyVariant.h3}>
          За год: {budgetStore.expensesPerPeriod.expensesToYear}
        </Typography>
      </div>
    </>
  );
};

Statistic.displayName = "Statistic";

export default observer(Statistic);
