import React, { useContext } from "react";
import { Context } from "index";
import { observer } from "mobx-react-lite";
import RegistrationForm from "./RegistrationForm";

const Registration = () => {
  const { authStore } = useContext(Context);

  const onSubmit = async (value) => {
    await authStore.registration(value.email, value.password);
  };

  return (
    <>
      <RegistrationForm onSubmit={onSubmit} />
    </>
  );
};

Registration.displayName = "Registration";

export default observer(Registration);
