import React, {useContext} from "react";
import RegistrationForm from "./components/RegistrationForm";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const Registration = () => {

    const {store} = useContext(Context)

    const onRegistration = (value) => {
        store.registration(value.email, value.password)
    }

    return (
       <RegistrationForm onRegistration={onRegistration}/>
    )
}

Registration.displayName = 'Registration'

export default observer(Registration)