import React, { useContext } from "react";

import { theme } from "theme/theme";
import Moment from "react-moment";
import styled from "styled-components";
import { Context } from "root";
import { observer } from "mobx-react-lite";
import { Typography, TypographyVariant } from "components/base";
import HomeWidgetContainer from "../components/HomeWidgetContainer";

const BalanceWidget = () => {
  const { budgetStore } = useContext(Context);

  return (
    <HomeWidgetContainer>
      <HomeBalance>
        <Typography variant={TypographyVariant.h2} color={theme.color.green}>
          Дата
        </Typography>
        <Typography variant={TypographyVariant.h2}>
          <Moment format="DD" className={"time"} />
          <Moment format="MM" className={"time"} />
          <Moment format="YY" className={"time"} />
        </Typography>
      </HomeBalance>
      <HomeBalance>
        <Typography variant={TypographyVariant.h2} color={theme.color.green}>
          Баланс
        </Typography>
        <HomeBalanceLine>
          <Typography variant={TypographyVariant.h1}>
            {budgetStore.balance}
          </Typography>
        </HomeBalanceLine>
      </HomeBalance>
    </HomeWidgetContainer>
  );
};

BalanceWidget.displayName = "BalanceWidget";

export default observer(BalanceWidget);

const HomeBalance = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HomeBalanceLine = styled("div")`
  display: flex;
  align-items: center;
`;
