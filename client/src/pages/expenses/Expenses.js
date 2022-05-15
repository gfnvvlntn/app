import React from "react";
import styled, { css } from "styled-components";
import MainLayout from "components/composite/layouts/MainLayout";
import ExpensesFormWidget from "./widgets/expensesFormWidget/ExpensesFormWidget";
import { Tab, Tabs } from "components/composite/tabs";
import ExpenseCategoriesWidget from "./widgets/expensesCategoriesWidget/ExpenseCategoriesWidget";

const Expenses = () => {
  return (
    <MainLayout>
      <Tabs>
        <Tab label={"Расходы"}>
          <ExpensesBody>
            <ExpensesFormWidget />
            <ExpenseCategoriesWidget />
          </ExpensesBody>
        </Tab>
        <Tab label={"Копилка"}>Копилка</Tab>
      </Tabs>
    </MainLayout>
  );
};

Expenses.displayName = "Expenses";

export default Expenses;

const ExpensesBody = styled("div")(
  () => css`
    display: flex;
    gap: 20px;
  `
);
