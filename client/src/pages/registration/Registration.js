import React, { useContext } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import AuthForm from "../../form/AuthForm";

const Registration = () => {
  const { authStore } = useContext(Context);

  const onSubmit = async (value) => {
    await authStore.registration(value.email, value.password);
  };

  return (
    <>
      <AuthForm onSubmit={onSubmit} actionName={"Регистрация"} />
    </>
  );
};

Registration.displayName = "Registration";

export default observer(Registration);
