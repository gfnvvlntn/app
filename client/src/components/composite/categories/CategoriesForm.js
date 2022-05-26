import React, { useContext, useState } from "react";
import { Button, ButtonVariant, Input } from "../../base";
import { LabeledField } from "../../hoc";
import { IconPlus } from "assets/image/icons";
import { Context } from "root";
import { FormContainer } from "./styled";
import { useTranslation } from "react-i18next";

const InputLabeled = LabeledField(Input);

const CategoriesForm = ({ type }) => {
  const { t } = useTranslation();
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
    <FormContainer>
      <InputLabeled
        value={inputValue}
        onChange={changeValue}
        label={t("label.add category")}
      />
      <Button onClick={onSubmit} variant={ButtonVariant.ICON}>
        <IconPlus />
      </Button>
    </FormContainer>
  );
};

CategoriesForm.displayName = "CategoriesForm";

export default CategoriesForm;
