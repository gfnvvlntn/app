import React from "react";
import styled, { css } from "styled-components";
import MainLayout from "../../components/composite/layouts/MainLayout";
import IncomesFormWidget from "./widgets/incomesFormWidget/IncomesFormWidget";
import IncomesListWidget from "./widgets/incomesListWidget/IncomesListWidget";
import {Tab, Tabs} from "../../components/composite/tabs";


const Incomes = () => {
  return (
    <MainLayout>
        <Tabs>
            <Tab label={'Доходы'}>
                <IncomesBody>
                    <IncomesFormWidget />
                    <IncomesListWidget />
                </IncomesBody>
            </Tab>
        </Tabs>
    </MainLayout>
  );
};

Incomes.displayName = "Income";

export default Incomes;

const IncomesBody = styled("div")(
  () => css`
    display: flex;
    gap: 20px;
  `
);
