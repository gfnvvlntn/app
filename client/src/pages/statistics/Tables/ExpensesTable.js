import React from "react";
import styled, {css} from "styled-components";
import ExpensesList from "./expensesList/ExpensesList";

const ExpensesTable = () => {
    return (
        <ExpensesTableContainer>
            <ExpensesList />
        </ExpensesTableContainer>
    )
}

ExpensesTable.displayName = 'ExpensesTable'

export default ExpensesTable

const ExpensesTableContainer = styled("div")(({}) => css``);
