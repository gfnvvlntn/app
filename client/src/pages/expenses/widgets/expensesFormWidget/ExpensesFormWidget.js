import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { FormProvider, useForm } from "react-hook-form";
import { Context } from "root";
import { observer } from "mobx-react-lite";
import { Button, ButtonVariant, Input } from "components/base";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Dropdown from "components/base/dropdown/Dropdown";
import {ContextField, LabeledField} from "components/hoc";

const DropdownLabeled = LabeledField(Dropdown);
const InputLabeled = LabeledField(Input);

const defaultSchema = yup.object().shape({
  expense: yup
    .string()
    .required("Поля обезательно для заполнения")
    .matches(/^\d+$/, "Поля может содержать только цифры"),
  category: yup.string().required("Категория обезательное поле"),
  comment: yup.string(),
});

const ExpensesFormWidget = () => {
  const { budgetStore } = useContext(Context);

  const form = useForm({
    resolver: yupResolver(defaultSchema),
    defaultValues: {
      expense: "",
      category: "Разное",
      comment: ""
    },
  });

  const onSubmitHandler = form.handleSubmit(async (value) => {
    await budgetStore.createAction({...value, action : value.expense * -1});
    form.reset();
  });

  const option = [
    { id: 0, label: "Разное", value: "Разное" },
    { id: 1, label: "Еда", value: "Еда" },
    { id: 2, label: "Сигареты", value: "Сигареты" },
    { id: 3, label: "Проезд", value: "Проезд" },
    { id: 4, label: "Алкоголь", value: "Алкоголь" },
  ];


  return (
    <ExpensesFormContainer>
      <FormProvider {...form}>
        <ContextField component={InputLabeled} name={"expense"} label={"Расходы"} />
        <ContextField component={DropdownLabeled} name={"category"} label={"Категория"} option={option}/>
        <ContextField component={InputLabeled} name={"comment"} label={"Комментарий"} />
        <Button variant={ButtonVariant.SECONDARY} onClick={onSubmitHandler}>
          Добавить
        </Button>
      </FormProvider>
    </ExpensesFormContainer>
  );
};

ExpensesFormWidget.displayName = "ExpensesFormWidget";

export default observer(ExpensesFormWidget);

const ExpensesFormContainer = styled("div")(
  ({ theme }) => css`
    width: 40%;
    background-color: ${theme.color.second};
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 12px;
  `
);
