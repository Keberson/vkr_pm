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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    </Provider>
);
