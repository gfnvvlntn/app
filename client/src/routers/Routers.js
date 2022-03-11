import React, {useContext} from "react";
import {Routes, Route} from "react-router-dom";
import Registration from "../pages/registration/Registration";
import SingIn from "../pages/singin/SingIn";
import {Context} from "../index";
import Home from "../pages/home/Home";
import {observer} from "mobx-react-lite";


const Routers = () => {

    const {store} = useContext(Context)

    if (store.isAuth) {
        return (
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        )
    }
    if (!store.isAuth) {
        return (
            <Routes>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/" element={<SingIn/>}/>
            </Routes>
        )
    }
}

export default observer(Routers)