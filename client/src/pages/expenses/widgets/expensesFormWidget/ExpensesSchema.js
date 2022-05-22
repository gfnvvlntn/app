import { useMemo } from "react";
import * as yup from "yup";

const expensesSchema = yup.object().shape({
  expense: yup
    .string()
    .required("Поля обезательно для заполнения")
    .matches(/^\d+$/, "Поля может содержать только цифры"),
  category: yup.string().required("Категория обезательное поле"),
  comment: yup.string(),
  creationDate: yup.string(),
});

const values = {
  expense: "",
  category: "Разное",
  comment: "",
  creationDate: "",
};

const useFormSchema = () => {
  const defaultSchema = useMemo(() => {
    return expensesSchema;
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
