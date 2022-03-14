import React, { useContext } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const Home = () => {
  const { authStore } = useContext(Context);

  return (
    <div>
      <h3>{authStore.user.email}</h3>
    </div>
  );
};

Home.displayName = "Home";

export default observer(Home);
