import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import './scss/scroll.scss';
import App from './App';
import {ModalWrapper} from "./components/ModalWrapper/ModalWrapper";
import {store} from './store/store'
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
    <Provider store={store}>
        <ModalWrapper>
            <div className="ps-20 pe-20 pt-5 pb-5 h-full bg-gray-50">
                <App />
            </div>
        </ModalWrapper>
    </Provider>
);
