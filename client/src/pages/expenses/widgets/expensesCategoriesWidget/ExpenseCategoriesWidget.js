import React, { useContext } from "react";
import styled, { css } from "styled-components";
import CategoriesList from "components/composite/categories/CategoriesList";
import CategoriesForm from "components/composite/categories/CategoriesForm";
import { Context } from "root";
import { observer } from "mobx-react-lite";

const ExpenseCategoriesWidget = () => {
  const { categoriesStore } = useContext(Context);
  return (
    <Container>
      <CategoriesList categories={categoriesStore.categoriesExpense} />
      <CategoriesForm type={"expense"} />
    </Container>
  );
};

ExpenseCategoriesWidget.displayName = "IncomeCategoriesWidget";

export default observer(ExpenseCategoriesWidget);

const Container = styled("div")(
  ({ theme }) => css`
    width: 40%;
    background-color: ${theme.color.second};
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `
);
