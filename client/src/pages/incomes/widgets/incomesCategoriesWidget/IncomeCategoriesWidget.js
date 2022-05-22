import React, { useContext } from "react";
import styled, { css } from "styled-components";
import CategoriesList from "components/composite/categories/CategoriesList";
import CategoriesForm from "components/composite/categories/CategoriesForm";
import { Context } from "root";
import { observer } from "mobx-react-lite";

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
