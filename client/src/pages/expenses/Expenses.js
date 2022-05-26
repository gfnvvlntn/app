import React from "react";
import MainLayout from "components/composite/layouts/MainLayout";
import ExpensesFormWidget from "./widgets/expensesFormWidget/ExpensesFormWidget";
import { Tab, Tabs } from "components/composite/tabs";
import ExpenseCategoriesWidget from "./widgets/expensesCategoriesWidget/ExpenseCategoriesWidget";
import { useTranslation } from "react-i18next";
import { ExpensesBody } from "./styled";

const Expenses = () => {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <Tabs>
        <Tab label={t("pages.expenses")}>
          <ExpensesBody>
            <ExpensesFormWidget />
            <ExpenseCategoriesWidget />
          </ExpensesBody>
        </Tab>
        <Tab label={t("pages.money box")}>{t("pages.money box")}</Tab>
      </Tabs>
    </MainLayout>
  );
};

Expenses.displayName = "Expenses";

export default Expenses;
