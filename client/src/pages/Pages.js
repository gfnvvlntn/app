import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "./registration/Registration";
import Login from "./login/Login";
import { Context } from "../index";
import Home from "./home/Home";
import { observer } from "mobx-react-lite";
import Income from "./income/Income";
import Expenses from "./expenses/Expenses";
import Statistics from "./statistics/Statistics";
import Settings from "./settings/Settings";

const Pages = () => {
  const { authStore } = useContext(Context);

  if (authStore.isAuth) {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/setting" element={<Settings />} />
        <Route path={"*"} element={<Home />} />
      </Routes>
    );
  }
  if (!authStore.isAuth) {
    return (
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    );
  }
};

export default observer(Pages);
