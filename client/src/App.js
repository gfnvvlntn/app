import Registration from "./pages/registration/Registration";
import {useContext, useEffect} from "react";
import {Context} from "./index";
import {observer} from "mobx-react-lite";

function App() {

  const {store} = useContext(Context)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  },[])

  return (
      <>
        <h1>{store.isAuth ? `Пользователь авторизован ${store.user.email}` : `Авторизуйтесь`}</h1>
        <Registration />
      </>
  );
}

export default observer(App)
