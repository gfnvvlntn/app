import React, { useContext } from "react";
import styled, { css } from "styled-components";
import Input from "../../../../components/base/input/Input";
import Button, {
  ButtonVariant,
} from "../../../../components/base/button/Button";
import { useForm, FormProvider } from "react-hook-form";
import { Context } from "../../../../index";
import { observer } from "mobx-react-lite";

const IncomesFormWidget = () => {
  const { budgetStore } = useContext(Context);

  const form = useForm();

  const onSubmitHandler = form.handleSubmit((value) => {
    budgetStore.createAction(value.income);
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