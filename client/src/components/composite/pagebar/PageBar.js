import React from "react";
import styled, { css } from "styled-components";
import PageBarLink from "./PageBarLink";

import { ReactComponent as IconHome } from "../../../assets/image/icons/icon-nav-home.svg";
import { ReactComponent as IconIncome } from "../../../assets/image/icons/icon-nav-income.svg";
import { ReactComponent as IconExpenses } from "../../../assets/image/icons/icon-nav-expenses.svg";
import { ReactComponent as IconStatistics } from "../../../assets/image/icons/icon-nav-statistics.svg";

const PageBar = () => {
  return (
    <PageBarContainer>
      <PageBarHeader>
        <h2>Страницы</h2>
      </PageBarHeader>
      <PageBarLine />
      <PageBarLink to={"/"} icon={<IconHome />} title={"Главная"} />
      <PageBarLink to={"/income"} icon={<IconIncome />} title={"Доходы"} />
      <PageBarLink to={"/expenses"} icon={<IconExpenses />} title={"Расходы"} />
      <PageBarLink
        to={"/statistics"}
        icon={<IconStatistics />}
        title={"Статистика"}
      />
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
    margin: 30px 0;
    border-radius: 12px;
  `
);

const PageBarHeader = styled("div")`
  margin: 20px auto;
`;

const PageBarLine = styled("div")`
  width: 90%;
  margin: 0 auto 20px;
  height: 1.5px;
  background-color: white;
  opacity: 0.4;
`;
