import React from "react";
import styled, {css} from "styled-components";
import MainLayout from "../../components/composite/layouts/MainLayout";
import Dropdown from "../../components/base/dropdown/Dropdown";

const Income = () => {
    const data = [{id: 1, label: "Поросенок"}, {id: 2, label: "Тони"}];
    return(
        <MainLayout>
            <IncomeHeader>Доходы</IncomeHeader>
            <Dropdown option={data} placeholder={'Выберети категорию'}/>
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