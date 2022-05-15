import { useMemo } from "react";
import * as yup from "yup";

const incomesSchema = yup.object().shape({
  income: yup
    .string()
    .required("Поля обезательно для заполнения")
    .matches(/^\d+$/, "Поля может содержать только цифры"),
  category: yup.string().required("Категория обезательное поле"),
  comment: yup.string(),
});

const values = {
  income: "",
  category: "Зарплата",
  comment: "",
};

const useFormSchema = () => {
  const defaultSchema = useMemo(() => {
    return incomesSchema;
  }, []);

  const defaultValues = useMemo(() => {
    return values;
  }, []);

  return {
    defaultSchema,
    defaultValues,
  };
};

export default useFormSchema;
