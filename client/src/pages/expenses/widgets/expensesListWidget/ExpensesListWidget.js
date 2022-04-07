import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { Context } from "index";
import ExpensesItemWidget from "./ExpensesItemWidget";

import { ReactComponent as IconFilter } from "assets/image/icons/icon-filter.svg";
import { observer } from "mobx-react-lite";
import { Typography } from "components/base";

const ExpensesListWidget = () => {
  const { budgetStore } = useContext(Context);

  return (
    <ExpensesListContainer>
      <ExpensesFilter>
        <IconFilter />
        <ExpensesFilterButton>По дате</ExpensesFilterButton>
      </ExpensesFilter>
      <ExpensesList>
        {budgetStore.budget.expenses.map((expense) => (
          <ExpensesItemWidget key={expense._id} expense={expense} />
        ))}
      </ExpensesList>
    </ExpensesListContainer>
  );
};

ExpensesListWidget.displayName = "ExpensesListWidget";

export default observer(ExpensesListWidget);

const ExpensesListContainer = styled("div")(
  ({ theme }) => css`
    background-color: ${theme.color.second};
    width: 60%;
    border-radius: 12px;
    padding: 40px;
  `
);

const ExpensesFilter = styled("div")(
  () => css`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 50px;
  `
);
const ExpensesFilterButton = styled(Typography)(
  () => css`
    border-radius: 666px;
    padding: 5px 15px;
    background-color: grey;
    opacity: 0.5;
    cursor: pointer;
  `
);

const ExpensesList = styled("div")(
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
