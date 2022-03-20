import React from "react";
import styled, { css } from "styled-components";
import MainLayout from "../../components/composite/layouts/MainLayout";
import ExpensesFormWidget from "./widgets/expensesFormWidget/ExpensesFormWidget";
import ExpensesListWidget from "./widgets/expensesListWidget/ExpensesListWidget";

const Expenses = () => {
  return (
    <MainLayout>
      <ExpensesHeader>Расходы</ExpensesHeader>
      <ExpensesBody>
        <ExpensesFormWidget />
        <ExpensesListWidget />
      </ExpensesBody>
    </MainLayout>
  );
};

Expenses.displayName = "Expenses";

export default Expenses;

const ExpensesHeader = styled("h3")(
  ({ theme }) => css`
    color: ${theme.button.primary};
    margin: 20px;
  `
);

const ExpensesBody = styled("div")(
  () => css`
    display: flex;
    gap: 20px;
    padding: 20px;
  `
);
