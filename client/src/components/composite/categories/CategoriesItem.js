import React from "react";
import styled, { css } from "styled-components";
import {
  Button,
  ButtonVariant,
  Typography,
  TypographyVariant,
} from "../../base";
import { IconDelete } from "assets/image/icons";

const CategoriesItem = ({ category }) => {
  return (
    <Container>
      <Typography variant={TypographyVariant.h5}>
        {category.category}
      </Typography>
      <Button variant={ButtonVariant.ICON}>
        <IconDelete style={{ width: 15, height: 15 }} />
      </Button>
    </Container>
  );
};

CategoriesItem.displayName = "CategoriesItem";

export default CategoriesItem;

const Container = styled("div")(
  ({ theme }) => css`
    background-color: ${theme.color.main};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0 8px 10px;
    border-radius: 10px;
  `
);
