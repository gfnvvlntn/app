import React, { useContext } from "react";
import Table from "components/composite/table/Table";
import { Context } from "root";
import {
  Button,
  ButtonVariant,
  Typography,
  TypographyVariant,
} from "components/base";
import Moment from "react-moment";
import { IconDelete, IconEdit } from "assets/image/icons";
import { useTranslation } from "react-i18next";
import { ActionGroup, TableContainer, TableHeader } from "./styled";

const ExpensesTable = () => {
  const { t } = useTranslation();
  const { budgetStore } = useContext(Context);

  const onDeleteAction = async (id) => {
    await budgetStore.deleteAction(id);
  };
  let incomesData;
  const incomesTitles = [
    <TableHeader>{t("label.summa")}</TableHeader>,
    <TableHeader>{t("label.date")}</TableHeader>,
    <TableHeader>{t("label.category")}</TableHeader>,
    <TableHeader>{t("label.comment")}</TableHeader>,
    <TableHeader>{t("label.action")}</TableHeader>,
  ];
  if (budgetStore.incomes) {
    incomesData = budgetStore.incomes.map((data) => ({
      summa: (
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
    <TableContainer>
      <Table
        templateColumn={"1fr 1fr 1fr 3fr 1fr"}
        titles={incomesTitles}
        data={incomesData}
      />
    </TableContainer>
  );
};

ExpensesTable.displayName = "ExpensesTable";

export default ExpensesTable;
