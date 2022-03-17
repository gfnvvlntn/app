import React from "react";
import styled, { css } from "styled-components";
import Input from "../../../components/base/input/Input";
import Button, { ButtonVariant } from "../../../components/base/button/Button";
import { useForm, FormProvider } from "react-hook-form";

const ExpensesFormWidget = () => {
    const form = useForm();

    return (
        <ExpensesFormContainer>
            <FormProvider {...form}>
                <Input name={"income"} placeholder={'добавить расходы'} />
                <Button variant={ButtonVariant.SECONDARY}>Добавить</Button>
            </FormProvider>
        </ExpensesFormContainer>
    );
};

ExpensesFormWidget.displayName = "ExpensesFormWidget";

export default ExpensesFormWidget;

const ExpensesFormContainer = styled("div")(
    ({ theme }) => css`
    width: 400px;
    margin: 20px;
    background-color: ${theme.color.second};
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 12px;
  `
);
