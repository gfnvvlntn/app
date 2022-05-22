import React, { useContext, useState } from "react";
import { Button, ButtonVariant, Input } from "../../base";
import { LabeledField } from "../../hoc";
import styled from "styled-components";
import { IconPlus } from "assets/image/icons";
import { Context } from "root";

const InputLabeled = LabeledField(Input);

const CategoriesForm = ({ type }) => {
  const { categoriesStore } = useContext(Context);

  const [inputValue, setInputValue] = useState("");

  const changeValue = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = () => {
    categoriesStore.addCategory({
      category: inputValue,
      type: type,
    });
    setInputValue("");
  };

  return (
    <Container>
      <InputLabeled
        value={inputValue}
        onChange={changeValue}
        label={"Добавить котегорию"}
      />
      <Button onClick={onSubmit} variant={ButtonVariant.ICON}>
        <IconPlus />
      </Button>
    </Container>
  );
};

CategoriesForm.displayName = "CategoriesForm";

export default CategoriesForm;

const Container = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
`;
