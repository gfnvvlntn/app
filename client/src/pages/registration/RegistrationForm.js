import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { Context } from "index";
import { observer } from "mobx-react-lite";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useFormSchema from "./RegistrationSchema";

import HeaderMessage from "components/composite/header/HeaderMessage";
import {Button, ButtonVariant, Input} from "components/base";


const RegistrationForm = ({ onSubmit }) => {
  const { authStore } = useContext(Context);

  const { defaultSchema, defaultValues } = useFormSchema();

  const form = useForm({
    resolver: yupResolver(defaultSchema),
    defaultValues: defaultValues,
  });

  const onSubmitHandler = form.handleSubmit(
    (values) => {
      onSubmit(values);
    },
    (errors) => {
      authStore.setMessage(Object.entries(errors)[0][1].message);
    }
  );

  return (
    <FormProvider {...form}>
      <Layout>
        <Container>
          <HeaderMessage title={"Регистрация на платформе"} />
          <Content>
            <Input name={"email"} placeholder={"Почта"} />
            <Input name={"password"} placeholder={"Пароль"} />
            <Input name={"repeatPassword"} placeholder={"Повторить пароль"} />
            <Button variant={ButtonVariant.PRIMARY} onClick={onSubmitHandler}>
              Регистрация
            </Button>
          </Content>
        </Container>
      </Layout>
    </FormProvider>
  );
};

RegistrationForm.displayName = "RegistrationForm";

export default observer(RegistrationForm);

const Layout = styled("div")`
  margin: auto;
`;

const Container = styled("div")(
  ({ theme }) => css`
    position: relative;
    overflow: hidden;
    background-color: ${theme.color.main};
    border-radius: 12px;
    padding: 40px 60px;
    display: flex;
    align-items: center;
    flex-direction: column;
  `
);

const Content = styled("div")(
  ({ theme }) => css`
    width: 400px;
    background-color: ${theme.color.main};
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 12px;
  `
);
