import React, { useContext } from "react";
import styled, { css } from "styled-components";

import { useForm, FormProvider } from "react-hook-form";
import useFormSchema from "./LoginSchema";
import { yupResolver } from "@hookform/resolvers/yup";

import Button, { ButtonVariant } from "../../components/base/button/Button";
import HeaderMessage from "../../components/composite/header/HeaderMessage";
import Input from "../../components/base/input/Input";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const LoginForm = ({ onSubmit }) => {
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
          <HeaderMessage
            title={"Вход"}
          />
          <Content>
            <Input placeholder={"Почта"} name={"email"} />
            <Input placeholder={"Пароль"} name={"password"} />
            <Button variant={ButtonVariant.PRIMARY} onClick={onSubmitHandler}>
              Войти
            </Button>
          </Content>
        </Container>
      </Layout>
    </FormProvider>
  );
};

LoginForm.displayName = "LoginForm";

export default observer(LoginForm);

const Layout = styled("div")`
  margin: auto;
`;

const Container = styled("div")(
  ({ theme }) => css`
    position: relative;
    overflow: hidden;
    background-color: ${theme.color.main};
    border-radius: 12px;
    padding: 40px 60px 60px 60px;
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
