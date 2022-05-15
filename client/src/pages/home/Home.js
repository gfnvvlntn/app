import React from "react";
import { observer } from "mobx-react-lite";
import styled, { css } from "styled-components";
import MainLayout from "components/composite/layouts/MainLayout";

import BalanceWidget from "./widgets/BalanceWidget";
import ExpensesWidget from "./widgets/ExpensesWidget";
import IncomesWidget from "./widgets/IncomesWidget";
import ExchangeRatesWidget from "./widgets/ExchangeRatesWidget";
import { Typography, TypographyVariant } from "components/base";
import { motion } from "framer-motion";

const home_widgets = [
  <BalanceWidget />,
  <ExchangeRatesWidget />,
  <ExpensesWidget />,
  <ExchangeRatesWidget />,
  <IncomesWidget />,
]

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Home = () => {
  return (
    <MainLayout>
      <HomeHeader variant={TypographyVariant.h2}>Главная</HomeHeader>
      <HomeBody>
        <HomeWidgets variants={container} initial="hidden" animate="visible">
          {home_widgets.map((el, index) => (
            <motion.li key={index} variants={item}>
              {el}
            </motion.li>
          ))}
        </HomeWidgets>
      </HomeBody>
    </MainLayout>
  );
};

Home.displayName = "Home";

export default observer(Home);

const HomeHeader = styled(Typography)(
  ({ theme }) => css`
    color: ${theme.button.primary};
    margin: 20px;
  `
);

const HomeBody = styled("div")(
  () => css`
    display: flex;
    padding: 20px;
    gap: 20px;
  `
);

const HomeWidgets = styled(motion.ul)(
  () => css`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0;
    padding: 0;
    list-style-type: none;
  `
);
