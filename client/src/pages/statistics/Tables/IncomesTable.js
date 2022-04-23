import React from "react";
import styled, { css } from "styled-components";
import IncomesList from "./incomesList/IncomesList";

const IncomesTable = () => {
  return (
    <IncomesTableContainer>
      <IncomesList />
    </IncomesTableContainer>
  );
};

IncomesTable.displayName = "Tables";

export default IncomesTable;

const IncomesTableContainer = styled("div")(({}) => css``);
