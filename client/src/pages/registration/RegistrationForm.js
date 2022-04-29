import React from "react";
import styled, { css } from "styled-components";
import { observer } from "mobx-react-lite";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useFormSchema from "./RegistrationSchema";
import HeaderMessage from "components/composite/header/HeaderMessage";
import { Button, ButtonVariant, Input } from "components/base";
import {ContextField, LabeledField} from "components/hoc";


const InputLabeled = LabeledField(Input);

const RegistrationForm = ({ onSubmit }) => {
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
        <HeaderMessage title={"Регистрация на платформе"} />
        <Content>
          <ContextField
            component={InputLabeled}
            name={"email"}
            label={"Почта"}
          />
          <ContextField
            component={InputLabeled}
            name={"password"}
            label={"Пароль"}
          />
          <ContextField
            component={InputLabeled}
            name={"repeatPassword"}
            label={"Повторить пароль"}
          />
          <Button variant={ButtonVariant.PRIMARY} onClick={onSubmitHandler}>
            Регистрация
          </Button>
        </Content>
      </Container>
    </FormProvider>
  );
};

RegistrationForm.displayName = "RegistrationForm";

export default observer(RegistrationForm);

const Container = styled("div")(
  ({ theme }) => css`
    position: relative;
    overflow: hidden;
    background-color: ${theme.color.main};
    padding: 40px 60px;
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
    border-radius: 12px;
  `
);
