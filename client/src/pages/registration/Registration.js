import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import useHttp from "../../hooks/use-http";

const Registration = () => {
    const{ apiClient } = useHttp()

    const onRegistration = async (value) => {
        await apiClient('/api/registration', 'POST', value)
            .then(response => response.json())
            .then(res => console.log(res))
    }

    return (
       <RegistrationForm onRegistration={onRegistration}/>
    )
}

Registration.displayName = 'Registration'

export default Registration