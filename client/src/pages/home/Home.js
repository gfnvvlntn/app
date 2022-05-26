import React from "react";
import { observer } from "mobx-react-lite";
import MainLayout from "components/composite/layouts/MainLayout";

import BalanceWidget from "./widgets/BalanceWidget";
import ExpensesWidget from "./widgets/ExpensesWidget";
import IncomesWidget from "./widgets/IncomesWidget";
import ExchangeRatesWidget from "./widgets/ExchangeRatesWidget";
import { TypographyVariant } from "components/base";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { container, HomeBody, HomeHeader, HomeWidgets, item } from "./styled";

const home_widgets = [
  <BalanceWidget />,
  <ExchangeRatesWidget />,
  <ExpensesWidget />,
  <ExchangeRatesWidget />,
  <IncomesWidget />,
];

const Home = () => {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <HomeHeader variant={TypographyVariant.h2}>{t("pages.main")}</HomeHeader>
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
