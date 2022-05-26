import React, { useContext } from "react";
import PageBarLink from "./PageBarLink";
import {
  IconHome,
  IconIncome,
  IconExpenses,
  IconStatistics,
} from "assets/image/icons";
import { Context } from "root";
import { Typography, TypographyVariant } from "../../base";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  container,
  item,
  PageBarContainer,
  PageBarFooter,
  PageBarHeader,
  PageBarLine,
  PageBarLinks,
  PageBarListLink,
} from "./styled";

const PageBar = () => {
  const { authStore } = useContext(Context);
  const { t } = useTranslation();

  const page_bar_links = [
    <PageBarLink to={"/"} icon={<IconHome />} title={t("pages.main")} />,
    <PageBarLink
      to={"/incomes"}
      icon={<IconIncome />}
      title={t("pages.incomes")}
    />,
    <PageBarLink
      to={"/expenses"}
      icon={<IconExpenses />}
      title={t("pages.expenses")}
    />,
    <PageBarLink
      to={"/statistics"}
      icon={<IconStatistics />}
      title={t("pages.statistics")}
    />,
  ];

  return (
    <PageBarContainer>
      <PageBarLinks>
        <PageBarHeader>
          <Typography variant={TypographyVariant.h2}>
            {t("pages.pages")}
          </Typography>
        </PageBarHeader>
        <PageBarLine />
        <PageBarListLink
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {page_bar_links.map((el, index) => (
            <motion.li key={index} variants={item}>
              {el}
            </motion.li>
          ))}
        </PageBarListLink>
      </PageBarLinks>
      <PageBarFooter>{authStore.user.email}</PageBarFooter>
    </PageBarContainer>
  );
};

PageBar.displayName = "PageBar";

export default PageBar;
