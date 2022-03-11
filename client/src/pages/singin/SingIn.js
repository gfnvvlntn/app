import React, {useContext} from "react";
import AuthForm from "../../form/AuthForm";
import {Context} from "../../index";
import {Link} from "react-router-dom";

const SingIn = () => {

    const {store} = useContext(Context)


    const onSubmit = (value) => {
        store.login(value.email, value.password)
    }
    return (
        <>
            <AuthForm
                onSubmit={onSubmit}
                actionName={'SING IN'}
            />
            <Link to={'/registration'}>Регистрация</Link>
        </>

    )
}

SingIn.displayName = 'SingIn'

export default SingIn