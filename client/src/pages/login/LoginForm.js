import React from "react";
import styled, { css } from "styled-components";
import { FormProvider, useForm } from "react-hook-form";
import useFormSchema from "./LoginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import HeaderMessage from "components/composite/header/HeaderMessage";
import { observer } from "mobx-react-lite";
import { Button, ButtonVariant, Input } from "components/base";
import {ContextField, LabeledField} from "components/hoc";

const InputLabeled = LabeledField(Input);


const LoginForm = ({ onSubmit }) => {
  const { defaultSchema, defaultValues } = useFormSchema();

  const form = useForm({
    resolver: yupResolver(defaultSchema),
    defaultValues: defaultValues,
  });

  const onSubmitHandler = form.handleSubmit((values) => {
    onSubmit(values);
  });
  return (
    <FormProvider {...form}>
      <Container>
        <HeaderMessage title={"Вход"} />
        <Content>
          <ContextField component={InputLabeled} label={"Почта"} name={"email"} />
          <ContextField component={InputLabeled} label={"Пароль"} name={"password"} />
          <Button variant={ButtonVariant.PRIMARY} onClick={onSubmitHandler}>
            Войти
          </Button>
        </Content>
      </Container>
    </FormProvider>
  );
};

LoginForm.displayName = "LoginForm";

export default observer(LoginForm);

const Container = styled("div")(
  ({ theme }) => css`
    position: relative;
    overflow: hidden;
    background-color: ${theme.color.main};
    padding: 40px 60px 60px 60px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px;
  `
);

const Content = styled("div")(
  ({ theme }) => css`
    width: 400px;
    background-color: ${theme.color.main};
    display: flex;
    flex-direction: column;
    gap: 25px;
  `
);
