import React from "react";
import styled, { css } from "styled-components";
import CategoriesItem from "./CategoriesItem";
import { Typography, TypographyVariant } from "../../base";

const CategoriesList = ({ categories }) => {
  return (
    <Container>
      <Typography variant={TypographyVariant.h4}>Котегории</Typography>
      <Content>
        {categories.map((category) => (
          <CategoriesItem key={category._id} category={category} />
        ))}
      </Content>
    </Container>
  );
};

CategoriesList.displayName = "CategoriesList";

export default CategoriesList;

const Container = styled("div")(
  ({ theme }) => css`
    background-color: ${theme.color.second};
    display: flex;
    flex-direction: column;
    gap: 10px;
  `
);

const Content = styled("div")`
  display: flex;
  gap: 10px;
`;
