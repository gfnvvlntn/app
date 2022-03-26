import React, { useContext } from "react";
import { theme } from "theme/theme";
import Moment from "react-moment";
import styled, { css } from "styled-components";

import { ReactComponent as IconDelete } from "assets/image/icons/icon-delete.svg";
import { ReactComponent as IconEdit } from "assets/image/icons/icon-edit.svg";
import { observer } from "mobx-react-lite";
import { Context } from "index";
import {Typography, TypographyVariant} from "components/base";

const IncomesItemWidget = ({ income }) => {
  const { budgetStore } = useContext(Context);

  const onDeleteAction = async () => {
    await budgetStore.deleteAction(income._id);
  };

  return (
    <IncomesItemContainer>
      <Typography color={theme.color.main} variant={TypographyVariant.h1}>
        {income.balance}
      </Typography>
      <Moment format={"DD.MM.YY hh:mm"}>{income.creationDate}</Moment>
      <IncomesItemCategory>
        <Typography variant={TypographyVariant.text1}>Зарплата</Typography>
      </IncomesItemCategory>
      <IncomesItemButtonGroup>
        <IconEdit />
        <IconDelete style={{ cursor: "pointer" }} onClick={onDeleteAction} />
      </IncomesItemButtonGroup>
    </IncomesItemContainer>
  );
};

IncomesItemWidget.displayName = "IncomesItemWidget";

export default observer(IncomesItemWidget);

const IncomesItemContainer = styled("div")(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    background-color: ${theme.button.primary};
    padding: 5px 15px;
    border-radius: 666px;
    opacity: 0.8;
  `
);

const IncomesItemCategory = styled("div")(() => css``);

const IncomesItemButtonGroup = styled("div")(
  () => css`
    display: flex;
    gap: 20px;
  `
);
