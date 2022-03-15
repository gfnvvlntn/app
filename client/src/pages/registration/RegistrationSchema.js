import { useMemo } from 'react'
import * as yup from 'yup'

const equalTo = (ref, msg) => {
    return yup.mixed().test({
        name: 'equalTo',
        exclusive: false,
        message: msg || '',
        params: {
            reference: ref.path,
        },
        test: function(value) {
            return value === this.resolve(ref)
        },
    })
}



yup.addMethod(yup.string, 'equalTo', equalTo)

const registrationSchema = yup.object().shape({
    email: yup
        .string()
        .nullable()
        .email('Неправильный email')
        .required('email обязательное поле')
        .max(40, 'Максимальное количество символов 40'),
    password: yup
        .string()
        .nullable(true)
        .required('Пароль обязательное поле')
        .min(6, "Пароль должен содержать минимум 6 символов"),
    repeatPassword: yup
        .string()
        .nullable(true)
        .required()
        .equalTo(yup.ref('password'), 'Пароли не совпадают')
})

const values = {
    email: '',
    password: '',
    repeatPassword: ''
}


const useFormSchema = () => {
    const defaultSchema = useMemo(() => {
        return registrationSchema
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
