import React, { useContext } from "react";
import CategoriesList from "components/composite/categories/CategoriesList";
import CategoriesForm from "components/composite/categories/CategoriesForm";
import { Context } from "root";
import { observer } from "mobx-react-lite";
import { Container } from "./styled";

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
