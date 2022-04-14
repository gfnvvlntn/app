import React, { useContext } from "react";
import { Context } from "root";
import { observer } from "mobx-react-lite";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import LoginTitle from "./LoginTitle";

const Login = () => {
  const { authStore } = useContext(Context);

  const onSubmit = async (value) => {
    await authStore.login(value.email, value.password);
  };
  return (
    <Layout>
      <LoginTitle />
      <LoginForm onSubmit={onSubmit} apiMessage={authStore.message} />
    </Layout>
  );
};

Login.displayName = "Login";

export default observer(Login);

const Layout = styled("div")`
  margin: auto;
  display: flex;
`;
