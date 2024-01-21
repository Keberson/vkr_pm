import React from 'react';
import {DashboardHeader} from "./components/DashboardHeader/DashboardHeader";
import {DashboardBody} from "./components/DashboardBody/DashboardBody";

function App() {
    const projectName = "Проект 1";

    return (
        <>
            <DashboardHeader projectName={projectName} />
            <DashboardBody />
        </>
    );
}

export default App;
