import React, {ReactNode} from "react";
import Cross from "../../assets/cross";

interface ModalWindowProps {
    children?: ReactNode
}

export const ModalWindow: React.FC<ModalWindowProps> = ({ children }) => {
    return (
        <div className="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 hidden">
            <div className="bg-white rounded shadow-lg w-1/3 h-4/5">
                <div className="border-b px-4 py-2 flex justify-between items-center">
                    <h3 className="font-semibold text-lg">Modal Title</h3>
                    <button className="text-black close-modal">
                        <Cross />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};
