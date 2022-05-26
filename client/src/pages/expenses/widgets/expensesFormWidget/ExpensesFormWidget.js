import React, { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Context } from "root";
import { observer } from "mobx-react-lite";
import {
  Button,
  ButtonVariant,
  Dropdown,
  DatePicker,
  MaskedInput,
  Input,
} from "components/base";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContextField, LabeledField } from "components/hoc";
import { NEGATIVE_VALUE } from "./constants";
import useFormSchema from "./ExpensesSchema";
import { ExpensesFormContainer, FormContainer } from "./styled";
import { useTranslation } from "react-i18next";

const DropdownLabeled = LabeledField(Dropdown);
const InputLabeled = LabeledField(Input);
const DatePickerLabeled = LabeledField(DatePicker);
const MaskedInputLabeled = LabeledField(MaskedInput);

const ExpensesFormWidget = () => {
  const { t } = useTranslation();
  const { budgetStore, categoriesStore } = useContext(Context);
  const { defaultSchema, defaultValues } = useFormSchema();
  const form = useForm({
    resolver: yupResolver(defaultSchema),
    defaultValues: { ...defaultValues },
  });

  const onSubmitHandler = form.handleSubmit(async (value) => {
    await budgetStore.createAction({
      ...value,
      action: value.expense * NEGATIVE_VALUE,
    });
    form.reset();
  });

  return (
    <ExpensesFormContainer>
      <FormProvider {...form}>
        <FormContainer>
          <ContextField
            component={MaskedInputLabeled}
            maskType={"money"}
            name={"expense"}
            label={t("label.expenses")}
          />
          <ContextField
            component={DropdownLabeled}
            name={"category"}
            label={t("label.category")}
            option={categoriesStore.optionCategoriesExpense}
          />
          <ContextField
            component={InputLabeled}
            name={"comment"}
            label={t("label.comment")}
          />
          <ContextField
            component={DatePickerLabeled}
            name={"creationDate"}
            label={t("label.date")}
          />
          <Button variant={ButtonVariant.SECONDARY} onClick={onSubmitHandler}>
            {t("button.add")}
          </Button>
        </FormContainer>
      </FormProvider>
    </ExpensesFormContainer>
  );
};

ExpensesFormWidget.displayName = "ExpensesFormWidget";

export default observer(ExpensesFormWidget);
