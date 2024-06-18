import React, {ReactNode} from "react";

interface ModalWrapperProps {
    children: ReactNode,
    z?: number,
    position?: "center" | "top left",
    bgOpacity?: "blur" | "none"
}

export const ModalWrapper: React.FC<ModalWrapperProps> = ({ children, z = 10, position = "center", bgOpacity = "blur" }) => {
    const alignStyles = position === "top left" ? "justify-end items-start" : "justify-center items-center";
    const opacityStyles = bgOpacity === "blur" ? "inset-0" : "" ;

    return (
        <div className={`relative z-${z}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
            {bgOpacity === "blur" && <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>}
            <div className={`fixed ${opacityStyles} z-${z} w-screen overflow-y-auto pointer-events-none`}>
                <div className={`flex h-full ${alignStyles} p-4 text-center`}>
                    {children}
                </div>
            </div>
        </div>
    )
};
