import React from "react";
import styled, {css} from "styled-components";
import MainLayout from "../../components/composite/layouts/MainLayout";

const Expenses = () => {
  return (
    <MainLayout>
      <ExpensesHeader>Расходы</ExpensesHeader>
    </MainLayout>
  );
};

Expenses.displayName = "Expenses";

export default Expenses;

const ExpensesHeader = styled('h3')(
    ({theme}) => css`
      color: ${theme.button.primary};
      margin: 20px;
    `
);
