import React, {useCallback, useState} from "react";
import styled from "styled-components";
import Input from "../../../components/base/input/Input";
import Button, {ButtonVariant} from "../../../components/base/button/Button";

const RegistrationForm = ({onRegistration}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChangeMail = (e) => {
        setEmail( e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword( e.target.value)
    }

    const onSubmit = useCallback(() => {
        onRegistration({email, password})
    },[onRegistration, email, password])

    return (
        <Container>
            <Content>
                <Input
                    onChange={onChangeMail}
                    value={email}
                    placeholder={'Email'}
                />
                <Input
                    onChange={onChangePassword}
                    value={password}
                    placeholder={'Password'}
                />
                <Button
                    onClick={onSubmit}
                    variant={ButtonVariant.PRIMARY}
                >
                    registration
                </Button>
            </Content>

        </Container>
    )
}

RegistrationForm.displayName = 'RegistrationForm'

export default RegistrationForm

const Container = styled('div')`
  width: 600px;
  margin: 100px auto;

`

const Content = styled('div')`
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
