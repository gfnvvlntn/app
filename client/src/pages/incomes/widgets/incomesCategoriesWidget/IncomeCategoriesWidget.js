import React, { useContext } from "react";
import CategoriesList from "components/composite/categories/CategoriesList";
import CategoriesForm from "components/composite/categories/CategoriesForm";
import { Context } from "root";
import { observer } from "mobx-react-lite";
import { Container } from "./styled";

const TYPE_CATEGORY = "income";

const IncomeCategoriesWidget = () => {
  const { categoriesStore } = useContext(Context);
  return (
    <Container>
      <CategoriesList
        categories={categoriesStore.categoriesIncome}
        type={TYPE_CATEGORY}
      />
      <CategoriesForm type={TYPE_CATEGORY} />
    </Container>
  );
};

IncomeCategoriesWidget.displayName = "IncomeCategoriesWidget";

export default observer(IncomeCategoriesWidget);
