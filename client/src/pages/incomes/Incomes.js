import React from "react";
import styled, { css } from "styled-components";
import MainLayout from "../../components/composite/layouts/MainLayout";
import IncomesFormWidget from "./widgets/incomesFormWidget/IncomesFormWidget";
import IncomesListWidget from "./widgets/incomesListWidget/IncomesListWidget";

const Incomes = () => {
  return (
    <MainLayout>
      <IncomesHeader>Доходы</IncomesHeader>
      <IncomesBody>
        <IncomesFormWidget />
        <IncomesListWidget />
      </IncomesBody>
    </MainLayout>
  );
};

Incomes.displayName = "Income";

export default Incomes;

const IncomesHeader = styled("h3")(
  ({ theme }) => css`
    color: ${theme.button.primary};
    margin: 20px;
  `
);

const IncomesBody = styled("h3")(
  () => css`
    display: flex;
    gap: 20px;
    padding: 20px;
  `
);
