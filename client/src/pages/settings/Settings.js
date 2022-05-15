import React, {useContext} from "react";
import MainLayout from "components/composite/layouts/MainLayout";
import Dropdown from "components/base/dropdown/Dropdown";
import { currencyOption } from "./constants";
import { Typography, TypographyVariant } from "components/base";
import styled from "styled-components";
import { Context } from "root";
import { observer } from "mobx-react-lite";

const Settings = () => {
  const { settingsStore } = useContext(Context);

  const onChangeCurrency = (value) => {
    settingsStore.changeCurrency(value);
  };
  return (
    <MainLayout>
      <Container>
        <Typography variant={TypographyVariant.h4}>
          Установите валюту
        </Typography>
        <Dropdown
          option={currencyOption}
          placeholder={"Выберите"}
          defaultValue={settingsStore.currency}
          onChange={onChangeCurrency}
        />
      </Container>
    </MainLayout>
  );
};

Settings.displayName = "Settings";

export default observer(Settings);

const Container = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin: 20px;
`;
