import React, { useContext } from "react";
import styled, { css } from "styled-components";
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

const page_bar_links = [
  <PageBarLink to={"/"} icon={<IconHome />} title={"Главная"} />,
  <PageBarLink to={"/incomes"} icon={<IconIncome />} title={"Доходы"} />,
  <PageBarLink to={"/expenses"} icon={<IconExpenses />} title={"Расходы"} />,
  <PageBarLink
    to={"/statistics"}
    icon={<IconStatistics />}
    title={"Статистика"}
  />,
];

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

const PageBar = () => {
  const { authStore } = useContext(Context);

  return (
    <PageBarContainer>
      <PageBarLinks>
        <PageBarHeader>
          <Typography variant={TypographyVariant.h2}>Страницы</Typography>
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

const PageBarContainer = styled("div")(
  ({ theme }) => css`
    width: 300px;
    background-color: ${theme.color.main};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;
    border-radius: 12px;
  `
);

const PageBarHeader = styled("div")`
  padding: 20px;
  text-align: center;
`;

const PageBarLinks = styled("div")``;

const PageBarLine = styled("div")`
  width: 90%;
  margin: 0 auto 20px;
  height: 1.5px;
  background-color: white;
  opacity: 0.4;
`;

const PageBarFooter = styled(Typography)`
  padding: 20px;
`;

const PageBarListLink = styled(motion.ul)`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
