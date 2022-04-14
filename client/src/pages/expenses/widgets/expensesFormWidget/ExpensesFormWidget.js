import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { FormProvider, useForm } from "react-hook-form";
import { Context } from "root";
import { observer } from "mobx-react-lite";
import { Button, ButtonVariant, Input } from "components/base";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const defaultSchema = yup.object().shape({
  expense: yup
    .string()
    .required("Поля обезательно для заполнения")
    .matches(/^\d+$/, "Поля может содержать только цифры"),
});

const ExpensesFormWidget = () => {
  const { budgetStore } = useContext(Context);

  const form = useForm({
    resolver: yupResolver(defaultSchema),
    defaultValues: {
      expense: "",
    },
  });

  const onSubmitHandler = form.handleSubmit(async (value) => {
    await budgetStore.createAction(value.expense * -1);
    form.resetField("expense");
  });

  return (
    <ExpensesFormContainer>
      <FormProvider {...form}>
        <Input name={"expense"} label={"Расходы"} />
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
    height: 200px;
    background-color: ${theme.color.second};
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 12px;
  `
);
