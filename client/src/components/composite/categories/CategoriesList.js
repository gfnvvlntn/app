import React from "react";
import CategoriesItem from "./CategoriesItem";
import { Typography, TypographyVariant } from "../../base";
import { useTranslation } from "react-i18next";
import { Content, ListContainer } from "./styled";

const CategoriesList = ({ categories, type }) => {
  const { t } = useTranslation();
  return (
    <ListContainer>
      <Typography variant={TypographyVariant.h4}>
        {t("label.categories")}
      </Typography>
      <Content>
        {categories.map((category) => (
          <CategoriesItem type={type} key={category._id} category={category} />
        ))}
      </Content>
    </ListContainer>
  );
};

CategoriesList.displayName = "CategoriesList";

export default CategoriesList;
