import React, {useContext} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import AuthForm from "../../form/AuthForm";
import {Link} from "react-router-dom";

const Registration = () => {

    const {store} = useContext(Context)

    const onSubmit = (value) => {
        store.registration(value.email, value.password)
    }

    return (
        <>
            <AuthForm
                onSubmit={onSubmit}
                actionName={'REGISTRATION'}
            />
            <Link to={'/'}>Войти</Link>
        </>

    )
}

Registration.displayName = 'Registration'

export default observer(Registration)