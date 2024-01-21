import React, {ReactNode} from "react";
import {ModalWindow} from "../ModalWindow/ModalWindow";
import {CreateTask} from "../CreateTask/CreateTask";

interface ModalWrapperProps {
    children: ReactNode
}

export const ModalWrapper: React.FC<ModalWrapperProps> = ({ children }) => {
    return (
        <div>
            {children}
            <ModalWindow>
                <CreateTask />
            </ModalWindow>
        </div>
    );
};
