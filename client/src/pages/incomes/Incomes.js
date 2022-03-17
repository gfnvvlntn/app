import React from "react";
import styled, { css } from "styled-components";
import MainLayout from "../../components/composite/layouts/MainLayout";
import IncomesFormWidget from "./widgets/IncomesFormWidget";

const Incomes = () => {
  return (
    <MainLayout>
      <IncomesHeader>Доходы</IncomesHeader>
      <IncomesFormWidget />
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
