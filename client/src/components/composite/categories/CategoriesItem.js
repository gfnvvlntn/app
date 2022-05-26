import React, { useContext } from "react";
import {
  Button,
  ButtonVariant,
  Typography,
  TypographyVariant,
} from "../../base";
import { IconDelete } from "assets/image/icons";
import { Context } from "root";
import { ItemContainer } from "./styled";

const CategoriesItem = ({ category, type }) => {
  const { categoriesStore } = useContext(Context);
  const onDelete = () => {
    categoriesStore.deleteCategory(category._id, type);
  };
  return (
    <ItemContainer>
      <Typography variant={TypographyVariant.h5}>
        {category.category}
      </Typography>
      <Button onClick={onDelete} variant={ButtonVariant.ICON}>
        <IconDelete style={{ width: 15, height: 15 }} />
      </Button>
    </ItemContainer>
  );
};

CategoriesItem.displayName = "CategoriesItem";

export default CategoriesItem;
