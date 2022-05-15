import React, { useContext } from "react";
import styled, { css } from "styled-components";
import Table from "components/composite/table/Table";
import { Context } from "root";
import {
  Button,
  ButtonVariant,
  Typography,
  TypographyVariant,
} from "components/base";
import Moment from "react-moment";
import { IconDelete, IconEdit } from "../../../assets/image/icons";

const ExpensesTable = () => {
  const { budgetStore } = useContext(Context);

  const onDeleteAction = async (id) => {
    await budgetStore.deleteAction(id);
  };
  let expensesData;
  const expensesTitles = [
    <ExpensesTableHeader>Сумма</ExpensesTableHeader>,
    <ExpensesTableHeader>Дата</ExpensesTableHeader>,
    <ExpensesTableHeader>Категория</ExpensesTableHeader>,
    <ExpensesTableHeader>Комментарий</ExpensesTableHeader>,
    <ExpensesTableHeader>Действие</ExpensesTableHeader>,
  ];
  if (budgetStore.expenses) {
    expensesData = budgetStore.expenses.map((data) => ({
      balance: (
        <Typography variant={TypographyVariant.h5}>{data.balance}</Typography>
      ),
      date: <Moment format={"DD.MM.YY hh:mm"}>{data.creationDate}</Moment>,
      category: (
        <Typography variant={TypographyVariant.h5}>{data.category}</Typography>
      ),
      comment: (
        <Typography variant={TypographyVariant.h5}>{data.comment}</Typography>
      ),
      action: (
        <ActionGroup>
          <Button variant={ButtonVariant.ICON}>
            <IconEdit />
          </Button>
          <Button
            variant={ButtonVariant.ICON}
            onClick={() => onDeleteAction(data._id)}
          >
            <IconDelete />
          </Button>
        </ActionGroup>
      ),
    }));
  }

  return (
    <ExpensesTableContainer>
      <Table
        templateColumn={"1fr 1fr 1fr 3fr 1fr"}
        titles={expensesTitles}
        data={expensesData}
      />
    </ExpensesTableContainer>
  );
};

ExpensesTable.displayName = "ExpensesTable";

export default ExpensesTable;

const ExpensesTableContainer = styled("div")(({}) => css``);

const ExpensesTableHeader = styled("div")``;
const ActionGroup = styled("div")`
  display: flex;
`;
