import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './scss/index.scss';
import './scss/scroll.scss';

import {store} from './store/store'

import {Dashboard} from "./pages/Dashboard/Dashboard";
import {Login} from "./pages/Login/Login";
import {PageNotFound} from "./pages/PageNotFound/PageNotFound";
import {Project} from "./pages/Project/Project";
import {GantFull} from "./components/Dashboard/Gant/GantFull/GantFull";
import {Wrappers} from "./components/Wrappers/Wrappers";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <div className="h-full bg-background flex flex-col">
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route element={<Wrappers />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/dashboard" >
                            <Route index element={<Dashboard />} />
                            <Route path="gant/:id" element={<GantFull />} />
                            <Route path=":id" element={<Project />} />
                        </Route>
                        <Route path="*" element={<PageNotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </div>
);
