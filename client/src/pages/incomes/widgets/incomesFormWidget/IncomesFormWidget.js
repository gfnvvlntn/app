import React, { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Context } from "root";
import { observer } from "mobx-react-lite";
import {
  Button,
  ButtonVariant,
  Input,
  Dropdown,
  DatePicker,
  MaskedInput,
} from "components/base";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContextField, LabeledField } from "components/hoc";
import useFormSchema from "./IncomesSchema";
import { FormContainer, IncomesFormContainer } from "./styled";
import { useTranslation } from "react-i18next";

const DropdownLabeled = LabeledField(Dropdown);
const InputLabeled = LabeledField(Input);
const DatePickerLabeled = LabeledField(DatePicker);
const MaskedInputLabeled = LabeledField(MaskedInput);

const IncomesFormWidget = () => {
  const { t } = useTranslation();
  const { budgetStore, categoriesStore } = useContext(Context);
  const { defaultSchema, defaultValues } = useFormSchema();

  const form = useForm({
    resolver: yupResolver(defaultSchema),
    defaultValues: { ...defaultValues },
  });

  const onSubmitHandler = form.handleSubmit(
    async (value) => {
      await budgetStore.createAction({ ...value, action: value.income });
      form.reset();
    },
    (value) => {
      console.log(value);
    }
  );

  return (
    <IncomesFormContainer>
      <FormProvider {...form}>
        <FormContainer>
          <ContextField
            component={MaskedInputLabeled}
            name={"income"}
            maskType={"money"}
            label={t("label.incomes")}
          />
          <ContextField
            component={DropdownLabeled}
            label={t("label.category")}
            name={"category"}
            option={categoriesStore.optionCategoriesIncome}
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
          <Button variant={ButtonVariant.PRIMARY} onClick={onSubmitHandler}>
            {t("button.add")}
          </Button>
        </FormContainer>
      </FormProvider>
    </IncomesFormContainer>
  );
};

IncomesFormWidget.displayName = "IncomesFormWidget";

export default observer(IncomesFormWidget);
