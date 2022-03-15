import React, { useContext } from "react";
import { Context } from "../../index";
import {observer} from "mobx-react-lite";
import LoginForm from "./LoginForm";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const { authStore } = useContext(Context);
  const navigate = useNavigate()

  const onSubmit = async (value) => {
    await authStore.login(value.email, value.password);
    navigate('/')
  };
  return (
    <>
      <LoginForm onSubmit={onSubmit}/>
    </>
  );
};

Login.displayName = "Login";

export default observer(Login)
