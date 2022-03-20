import React, { useContext } from "react";
import styled, { css } from "styled-components";
import Input from "../../../../components/base/input/Input";
import Button, {
  ButtonVariant,
} from "../../../../components/base/button/Button";
import { useForm, FormProvider } from "react-hook-form";
import { Context } from "../../../../index";
import { observer } from "mobx-react-lite";

const ExpensesFormWidget = () => {
  const { budgetStore } = useContext(Context);

  const form = useForm();

  const onSubmitHandler = form.handleSubmit((value) => {
    budgetStore.createAction(value.expense * -1);
  });

  return (
    <ExpensesFormContainer>
      <FormProvider {...form}>
        <Input name={"expense"} placeholder={"добавить расходы"} />
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