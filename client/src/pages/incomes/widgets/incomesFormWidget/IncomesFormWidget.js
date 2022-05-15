import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { FormProvider, useForm } from "react-hook-form";
import { Context } from "root";
import { observer } from "mobx-react-lite";
import { Button, ButtonVariant, Input } from "components/base";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ContextField from "components/hoc/ContextField";
import Dropdown from "components/base/dropdown/Dropdown";
import LabeledField from "components/hoc/LabeledField";

const DropdownLabeled = LabeledField(Dropdown);
const InputLabeled = LabeledField(Input);

const defaultSchema = yup.object().shape({
  income: yup
    .string()
    .required("Поля обезательно для заполнения")
    .matches(/^\d+$/, "Поля может содержать только цифры"),
  category: yup.string().required("Категория обезательное поле"),
  comment: yup.string(),
});

const IncomesFormWidget = () => {
  const { budgetStore } = useContext(Context);

  const form = useForm({
    resolver: yupResolver(defaultSchema),
    defaultValues: {
      income: "",
      category: "Зарплата",
      comment: ""
    },
  });

  const onSubmitHandler = form.handleSubmit(async (value) => {
    await budgetStore.createAction({ ...value, action: value.income });
    form.reset()
  }, (value) => {
    console.log(value)
  });

  const option = [
    { id: 0, label: "Зарплата", value: "Зарплата" },
    { id: 1, label: "Аванс", value: "Аванс" },
  ];

  return (
    <IncomesFormContainer>
      <FormProvider {...form}>
        <ContextField
          component={InputLabeled}
          name={"income"}
          label={"Доходы"}
        />
        <ContextField
          component={DropdownLabeled}
          label={"Категория"}
          name={"category"}
          option={option}
        />
        <ContextField
            component={InputLabeled}
            name={"comment"}
            label={"Комментарий"}
        />
        <Button variant={ButtonVariant.PRIMARY} onClick={onSubmitHandler}>
          Добавить
        </Button>
      </FormProvider>
    </IncomesFormContainer>
  );
};

IncomesFormWidget.displayName = "IncomesFormWidget";

export default observer(IncomesFormWidget);

const IncomesFormContainer = styled("div")(
  ({ theme }) => css`
    width: 50%;
    height: 300px;
    background-color: ${theme.color.second};
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 12px;
  `
);
