import React, { useContext } from "react";
import { Context } from "root";
import { observer } from "mobx-react-lite";
import RegistrationForm from "./RegistrationForm";
import styled from "styled-components";
import RegistrationTitle from "./RegistrationTitle";

const Registration = () => {
  const { authStore } = useContext(Context);

  const onSubmit = async (value) => {
    await authStore.registration(value.email, value.password);
  };

  return (
    <Layout>
      <RegistrationTitle />
      <RegistrationForm onSubmit={onSubmit} />
    </Layout>
  );
};

Registration.displayName = "Registration";

export default observer(Registration);

const Layout = styled("div")`
  margin: auto;
  display: flex;
`;
