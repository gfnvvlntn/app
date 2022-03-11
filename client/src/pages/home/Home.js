import React, {useContext} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const Home = () => {
    const {store} = useContext(Context)



    return (
        <div>
            <h3>{store.user.email}</h3>
            <button
                onClick={() => store.logout()}
            >
                Выйти
            </button>
        </div>
    )
}

Home.displayName = 'Home'

export default observer(Home)