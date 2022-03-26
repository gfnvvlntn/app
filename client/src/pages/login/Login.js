import React, { useContext } from "react";
import { Context } from "index";
import { observer } from "mobx-react-lite";
import LoginForm from "./LoginForm";

const Login = () => {
  const { authStore } = useContext(Context);

  const onSubmit = async (value) => {
    await authStore.login(value.email, value.password);
  };
  return (
    <>
      <LoginForm onSubmit={onSubmit} apiMessage={authStore.message} />
    </>
  );
};

Login.displayName = "Login";

export default observer(Login);
