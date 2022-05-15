import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { FormProvider, useForm } from "react-hook-form";
import { Context } from "root";
import { observer } from "mobx-react-lite";
import { Button, ButtonVariant, Input, Dropdown } from "components/base";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContextField, LabeledField } from "components/hoc";
import useFormSchema from "./IncomesSchema";

const DropdownLabeled = LabeledField(Dropdown);
const InputLabeled = LabeledField(Input);

const IncomesFormWidget = () => {
  const { budgetStore, categoriesStore } = useContext(Context);
  const { defaultSchema, defaultValues } = useFormSchema();

  const form = useForm({
    resolver: yupResolver(defaultSchema),
    defaultValues: { ...defaultValues },
  });

  const onSubmitHandler = form.handleSubmit(
    async (value) => {
      await budgetStore.createAction({ ...value, action: value.income });
      form.reset();
    },
    (value) => {
      console.log(value);
    }
  );

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
          option={categoriesStore.optionCategoriesIncome}
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
