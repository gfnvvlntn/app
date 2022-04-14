import React from "react";
import MainLayout from "components/composite/layouts/MainLayout";
import Dropdown from "../../components/base/dropdown/Dropdown";

const Settings = () => {

    const option = [
        {label: 'first', id: 1},
        {label: 'second', id: 2},
    ]
    return (
        <MainLayout>
            <Dropdown option={option} placeholder={'Ghbdtn'}/>
        </MainLayout>
    );
};

Settings.displayName = "Settings";

export default Settings;
