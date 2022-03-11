import {useContext, useEffect} from "react";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {BrowserRouter} from "react-router-dom";
import Routers from "./routers/Routers";

function App() {

  const {store} = useContext(Context)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  },[])

  return (
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
  );
}

export default observer(App)
