import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { FormProvider, useForm } from "react-hook-form";
import { Context } from "root";
import { observer } from "mobx-react-lite";
import { Button, ButtonVariant, Input } from "components/base";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ContextField from "components/hoc/ContextField";
import Dropdown from "components/base/dropdown/Dropdown";
import LabeledField from "components/hoc/LabeledField";

const DropdownLabeled = LabeledField(Dropdown)
const InputLabeled = LabeledField(Input)


const defaultSchema = yup.object().shape({
  income: yup
    .string()
    .required("Поля обезательно для заполнения")
    .matches(/^\d+$/, "Поля может содержать только цифры"),
  category: yup.string().required('Категория обезательное поле'),
});

const IncomesFormWidget = () => {
  const { budgetStore } = useContext(Context);

  const form = useForm({
    resolver: yupResolver(defaultSchema),
    defaultValues: {
      income: "",
      category: "",
    },
  });

  const onSubmitHandler = form.handleSubmit(async (value) => {
    await budgetStore.createAction(value.income);
    form.resetField("income");
  });

  const option = [
    { id: 1, label: "Еда", value: "Еда" },
    { id: 2, label: "Сигареты", value: "Сигареты" },
    { id: 3, label: "Проезд", value: "Проезд" },
    { id: 4, label: "Алкоголь", value: "Алкоголь" },
  ];


  return (
    <IncomesFormContainer>
      <FormProvider {...form}>
          <ContextField component={InputLabeled} name={"income"} label={"Доходы"} />
          <ContextField component={DropdownLabeled} label={'Категория'} name={"category"} option={option} defaultValue={'Еда'}/>
        <Button variant={ButtonVariant.PRIMARY} onClick={onSubmitHandler}>
          Добавить
        </Button>
      </FormProvider>
    </IncomesFormContainer>
  );
};

IncomesFormWidget.displayName = "IncomesFormWidget";

export default observer(IncomesFormWidget);

const IncomesFormContainer = styled("div")(
  ({ theme }) => css`
    width: 50%;
    height: 300px;
    background-color: ${theme.color.second};
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 12px;
  `
);
