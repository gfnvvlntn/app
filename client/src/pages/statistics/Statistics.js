import React from "react";
import MainLayout from "components/composite/layouts/MainLayout";
import { Tab, Tabs } from "components/composite/tabs";
import Statistic from "./Statistic/Statistic";
import IncomesTable from "./Tables/IncomesTable";
import ExpensesTable from "./Tables/ExpensesTable";
import { useTranslation } from "react-i18next";

const Statistics = () => {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <Tabs>
        <Tab label={t("pages.statistics")}>
          <Statistic />
        </Tab>
        <Tab label={t("pages.graphs")}>
          <div>График</div>
        </Tab>
        <Tab label={t("pages.incomes")}>
          <IncomesTable />
        </Tab>
        <Tab label={t("pages.expenses")}>
          <ExpensesTable />
        </Tab>
      </Tabs>
    </MainLayout>
  );
};

Statistics.displayName = "Statistics";

export default Statistics;
