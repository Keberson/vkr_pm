import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import './scss/scroll.scss';
import App from './App';
import {ModalWrapper} from "./components/ModalWrapper/ModalWrapper";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <ModalWrapper>
        <div className="ps-40 pe-40 pt-5 pb-5 h-full bg-gray-50">
            <App />
        </div>
    </ModalWrapper>
);
