import * as yup from "yup";
import {useMemo} from "react";

const loginSchema = yup.object({
    email: yup
        .string()
        .email("Неправильный email")
        .required("email обязательное поле")
        .max(40, 'Максимальное количество символов 40'),
    password: yup
        .string()
        .required("Пароль обязательное поле")
        .min(6, "Пароль должен содержать минимум 6 символов"),
});

const values = {
    email: "",
    password: "",
}

const useFormSchema = () => {
    const defaultSchema = useMemo(() => {
        return loginSchema
    }, [])

    const defaultValues = useMemo(() => {
        return values
    },[])

    return {
        defaultSchema,
        defaultValues
    }
}

export default useFormSchema