import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { FormProvider, useForm } from "react-hook-form";
import { Context } from "root";
import { observer } from "mobx-react-lite";
import { Button, ButtonVariant, Input, Dropdown } from "components/base";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContextField, LabeledField } from "components/hoc";
import { NEGATIVE_VALUE } from "./constants";
import useFormSchema from "./ExpensesSchema";

const DropdownLabeled = LabeledField(Dropdown);
const InputLabeled = LabeledField(Input);

const ExpensesFormWidget = () => {
  const { budgetStore, categoriesStore } = useContext(Context);
  const { defaultSchema, defaultValues } = useFormSchema();
  const form = useForm({
    resolver: yupResolver(defaultSchema),
    defaultValues: { ...defaultValues },
  });

  const onSubmitHandler = form.handleSubmit(async (value) => {
    await budgetStore.createAction({
      ...value,
      action: value.expense * NEGATIVE_VALUE,
    });
    form.reset();
  });

  return (
    <ExpensesFormContainer>
      <FormProvider {...form}>
        <FormContainer>
          <ContextField
            component={InputLabeled}
            name={"expense"}
            label={"Расходы"}
          />
          <ContextField
            component={DropdownLabeled}
            name={"category"}
            label={"Категория"}
            option={categoriesStore.optionCategoriesExpense}
          />
          <ContextField
            component={InputLabeled}
            name={"comment"}
            label={"Комментарий"}
          />
          <Button variant={ButtonVariant.SECONDARY} onClick={onSubmitHandler}>
            Добавить
          </Button>
        </FormContainer>
      </FormProvider>
    </ExpensesFormContainer>
  );
};

ExpensesFormWidget.displayName = "ExpensesFormWidget";

export default observer(ExpensesFormWidget);

const ExpensesFormContainer = styled("div")(
  ({ theme }) => css`
    width: 50%;
    background-color: ${theme.color.second};
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 12px;
  `
);

const FormContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
