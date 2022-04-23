import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { Context } from "root";
import ExpensesItemWidget from "./ExpensesItem";
import { observer } from "mobx-react-lite";

const ExpensesList = () => {
  const { budgetStore } = useContext(Context);

  return (
    <ExpensesListContainer>
      <List>
        {budgetStore.budget.expenses.map((expense) => (
          <ExpensesItemWidget key={expense._id} expense={expense} />
        ))}
      </List>
    </ExpensesListContainer>
  );
};

ExpensesList.displayName = "ExpensesList";

export default observer(ExpensesList);

const ExpensesListContainer = styled("div")(
  ({ theme }) => css`
    background-color: ${theme.color.second};
    width: 60%;
    border-radius: 12px;
    padding: 40px;
  `
);

const List = styled("div")(
  ({ theme }) => css`
    height: 496px;
    overflow-y: auto;
    padding: 0 20px 0 0;

    &::-webkit-scrollbar {
      /* 1 - скроллбар */
      width: 4px;
      height: 4px;
      cursor: pointer;
    }

    &::-webkit-scrollbar-button {
      /* 2 - кнопка */
    }

    &::-webkit-scrollbar-track {
      /* 3 - трек */
      width: 10px;
    }

    &::-webkit-scrollbar-track-piece {
      /* 4 - видимая часть трека */
      background-color: ${theme.color.main};
    }

    &::-webkit-scrollbar-thumb {
      /* 5 - ползунок */
      border-radius: 2px;
      background-color: ${theme.color.green};
    }

    &::-webkit-scrollbar-corner {
      /* 6 - уголок */
    }

    &::-webkit-resizer {
      /* 7 - изменение размеров */
    }
  `
);
