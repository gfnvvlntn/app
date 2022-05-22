import React, { useContext } from "react";
import styled, { css } from "styled-components";
import CategoriesList from "components/composite/categories/CategoriesList";
import CategoriesForm from "components/composite/categories/CategoriesForm";
import { Context } from "root";
import { observer } from "mobx-react-lite";

const TYPE_CATEGORY = "expense";
const ExpenseCategoriesWidget = () => {
  const { categoriesStore } = useContext(Context);
  return (
    <Container>
      <CategoriesList
        type={TYPE_CATEGORY}
        categories={categoriesStore.categoriesExpense}
      />
      <CategoriesForm type={TYPE_CATEGORY} />
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
