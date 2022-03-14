import React, { useContext } from "react";
import AuthForm from "../../form/AuthForm";
import { Context } from "../../index";
import {observer} from "mobx-react-lite";

const Login = () => {
  const { authStore } = useContext(Context);

  const onSubmit = async (value) => {
    await authStore.login(value.email, value.password);
  };
  return (
    <>
      <AuthForm onSubmit={onSubmit} actionName={"Войти"} />
    </>
  );
};

Login.displayName = "Login";

export default observer(Login)
