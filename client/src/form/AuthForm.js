import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import Input from "../components/base/input/Input";
import Button, { ButtonVariant } from "../components/base/button/Button";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ onSubmit, actionName }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeMail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitForm = useCallback(() => {
    onSubmit({ email, password });
    navigate("/");
  }, [onSubmit, email, password]);

  return (
    <Container>
      <Content>
        <HeaderTitle>{actionName}</HeaderTitle>
        <Input onChange={onChangeMail} value={email} placeholder={"Почта"} />
        <Input
          onChange={onChangePassword}
          value={password}
          placeholder={"Пароль"}
        />
        <Button onClick={onSubmitForm} variant={ButtonVariant.PRIMARY}>
          {actionName}
        </Button>
      </Content>
    </Container>
  );
};

AuthForm.displayName = "AuthForm";

export default AuthForm;

const Container = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled("div")(
  ({ theme }) => css`
    width: 500px;
    background-color: ${theme.color.main};
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px;
    border-radius: 12px;
  `
);

const HeaderTitle = styled("p")``;
