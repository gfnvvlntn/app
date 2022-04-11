import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { useForm, FormProvider } from "react-hook-form";
import { Context } from "index";
import { observer } from "mobx-react-lite";
import { Button, ButtonVariant, Input } from "components/base";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const defaultSchema = yup.object().shape({
  income: yup.number().positive().required("Поля обезательно для заполнения"),
});

const IncomesFormWidget = () => {
  const { budgetStore } = useContext(Context);

  const form = useForm({
    resolver: yupResolver(defaultSchema),
    defaultValues: {
      income: "",
    },
  });

  const onSubmitHandler = form.handleSubmit(async (value) => {
    await budgetStore.createAction(value.income);
    form.resetField("income");
  });

  return (
    <IncomesFormContainer>
      <FormProvider {...form}>
        <Input name={"income"} placeholder={"добавить доходы"} />
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
