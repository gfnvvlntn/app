import React, { useContext } from "react";
import styled, { css } from "styled-components";
import PageBarLink from "./PageBarLink";

import { ReactComponent as IconHome } from "assets/image/icons/icon-nav-home.svg";
import { ReactComponent as IconIncome } from "assets/image/icons/icon-nav-income.svg";
import { ReactComponent as IconExpenses } from "assets/image/icons/icon-nav-expenses.svg";
import { ReactComponent as IconStatistics } from "assets/image/icons/icon-nav-statistics.svg";
import { Context } from "index";
import { Typography, TypographyVariant } from "../../base";

const PageBar = () => {
  const { authStore } = useContext(Context);

  return (
    <PageBarContainer>
      <PageBarLinks>
        <PageBarHeader>
          <Typography variant={TypographyVariant.h2}>Страницы</Typography>
        </PageBarHeader>
        <PageBarLine />
        <PageBarLink to={"/"} icon={<IconHome />} title={"Главная"} />
        <PageBarLink to={"/incomes"} icon={<IconIncome />} title={"Доходы"} />
        <PageBarLink
          to={"/expenses"}
          icon={<IconExpenses />}
          title={"Расходы"}
        />
        <PageBarLink
          to={"/statistics"}
          icon={<IconStatistics />}
          title={"Статистика"}
        />
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
