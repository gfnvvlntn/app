import React from "react";
import MainLayout from "components/composite/layouts/MainLayout";
import IncomesFormWidget from "./widgets/incomesFormWidget/IncomesFormWidget";
import { Tab, Tabs } from "components/composite/tabs";
import IncomeCategoriesWidget from "./widgets/incomesCategoriesWidget/IncomeCategoriesWidget";
import { useTranslation } from "react-i18next";
import { IncomesBody } from "./styled";

const Incomes = () => {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <Tabs>
        <Tab label={t("pages.incomes")}>
          <IncomesBody>
            <IncomesFormWidget />
            <IncomeCategoriesWidget />
          </IncomesBody>
        </Tab>
      </Tabs>
    </MainLayout>
  );
};

Incomes.displayName = "Income";

export default Incomes;
