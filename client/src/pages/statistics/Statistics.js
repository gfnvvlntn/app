import React from "react";
import styled, { css } from "styled-components";
import MainLayout from "../../components/composite/layouts/MainLayout";

const Statistics = () => {
  return (
    <MainLayout>
      <StatisticsHeader>Статистика</StatisticsHeader>
    </MainLayout>
  );
};

Statistics.displayName = "Statistics";

export default Statistics;

const StatisticsHeader = styled("h3")(
  ({ theme }) => css`
    color: ${theme.button.primary};
    margin: 20px;
  `
);
