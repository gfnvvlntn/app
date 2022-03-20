import React, { useContext } from "react";
import styled, { css } from "styled-components";
import Typography from "../../../../components/base/typography/Typography";
import { Context } from "../../../../index";
import IncomesItemWidget from "./IncomesItemWidget";

import { ReactComponent as IconFilter } from "../../../../assets/image/icons/icon-filter.svg";
import { observer } from "mobx-react-lite";

const IncomesListWidget = () => {
  const { budgetStore } = useContext(Context);

  return (
    <IncomesListContainer>
      <IncomesFilter>
        <IconFilter />
        <IncomesFilterButton>День</IncomesFilterButton>
        <IncomesFilterButton>Неделя</IncomesFilterButton>
        <IncomesFilterButton>Месяц</IncomesFilterButton>
      </IncomesFilter>
      <IncomesList>
        {budgetStore.incomes.map((income) => (
          <IncomesItemWidget key={income._id} income={income} />
        ))}
      </IncomesList>
    </IncomesListContainer>
  );
};

IncomesListWidget.displayName = "IncomesListWidget";

export default observer(IncomesListWidget);

const IncomesListContainer = styled("div")(
  ({ theme }) => css`
    background-color: ${theme.color.second};
    width: 60%;
    border-radius: 12px;
    padding: 40px;
  `
);

const IncomesFilter = styled("div")(
  () => css`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 50px;
  `
);
const IncomesFilterButton = styled(Typography)(
  () => css`
    border-radius: 666px;
    padding: 5px 15px;
    background-color: grey;
    opacity: 0.5;
    cursor: pointer;
  `
);

const IncomesList = styled("div")(
  ({ theme }) => css`
    height: 496px;
    overflow-y: auto;
    padding: 0 20px 0 0;

    &::-webkit-scrollbar {
      /* 1 - скроллбар */
      width: 4px;
      height: 4px;
      cursor: pointer;
    }

    &::-webkit-scrollbar-button {
      /* 2 - кнопка */
    }

    &::-webkit-scrollbar-track {
      /* 3 - трек */
      width: 10px;
    }

    &::-webkit-scrollbar-track-piece {
      /* 4 - видимая часть трека */
      background-color: ${theme.color.main};
    }

    &::-webkit-scrollbar-thumb {
      /* 5 - ползунок */
      border-radius: 2px;
      background-color: ${theme.color.green};
    }

    &::-webkit-scrollbar-corner {
      /* 6 - уголок */
    }

    &::-webkit-resizer {
      /* 7 - изменение размеров */
    }
  `
);
