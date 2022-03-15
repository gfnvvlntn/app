import React from "react";
import styled, {css} from "styled-components";
import MainLayout from "../../components/composite/layouts/MainLayout";

const Income = () => {
    return(
        <MainLayout>
            <IncomeHeader>Доходы</IncomeHeader>
        </MainLayout>
    )
}

Income.displayName = 'Income'

export default Income

const IncomeHeader = styled('h3')(
    ({theme}) => css`
      color: ${theme.button.primary};
      margin: 20px;
    `
);