import React, { useContext } from "react";

import { theme } from "theme/theme";
import Moment from "react-moment";
import styled, { css } from "styled-components";

import { ReactComponent as IconDelete } from "assets/image/icons/icon-delete.svg";
import { ReactComponent as IconEdit } from "assets/image/icons/icon-edit.svg";
import { observer } from "mobx-react-lite";
import { Context } from "root";
import { Typography, TypographyVariant } from "components/base";

const ExpensesItemWidget = ({ expense }) => {
  const { budgetStore } = useContext(Context);

  const onDeleteAction = async () => {
    await budgetStore.deleteAction(expense._id);
  };

  return (
    <ExpensesItemContainer>
      <Typography color={theme.color.main} variant={TypographyVariant.h1}>
        {expense.balance}
      </Typography>
      <Moment format={"DD.MM.YY hh:mm"}>{expense.creationDate}</Moment>
      <ExpensesItemCategory>
        <Typography variant={TypographyVariant.text1}>Еда</Typography>
      </ExpensesItemCategory>
      <ExpensesItemButtonGroup>
        <IconEdit />
        <IconDelete style={{ cursor: "pointer" }} onClick={onDeleteAction} />
      </ExpensesItemButtonGroup>
    </ExpensesItemContainer>
  );
};

ExpensesItemWidget.displayName = "ExpensesItemWidget";

export default observer(ExpensesItemWidget);

const ExpensesItemContainer = styled("div")(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    background-color: ${theme.color.green};
    padding: 5px 15px;
    border-radius: 666px;
  `
);

const ExpensesItemCategory = styled("div")(() => css``);

const ExpensesItemButtonGroup = styled("div")(
  () => css`
    display: flex;
    gap: 20px;
  `
);
