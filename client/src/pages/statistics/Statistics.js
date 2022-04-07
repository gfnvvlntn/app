import React from "react";
import MainLayout from "components/composite/layouts/MainLayout";
import { Tab, Tabs } from "components/composite/tabs";
import Statistic from "./Statistic/Statistic";

const Statistics = () => {
  return (
    <MainLayout>
      <Tabs>
        <Tab label={"Статистика"}>
          <Statistic />
        </Tab>
        <Tab label={"График"}>
          <div>График</div>
        </Tab>
        <Tab label={"Списки"}>
          <div>Списки</div>
        </Tab>
      </Tabs>
    </MainLayout>
  );
};

Statistics.displayName = "Statistics";

export default Statistics;
