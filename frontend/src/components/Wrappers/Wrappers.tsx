import React from "react";
import {Outlet} from "react-router-dom";

import {ModalWrapper} from "../ModalWrapper/ModalWrapper";
import {Loader} from "../Loader/Loader";
import {useAppSelector} from "../../hooks/useAppSelector";
import {Toast} from "../Toast/Toast";

export const Wrappers = () => {
    const modalShow = useAppSelector(state => state.loader.show);
    const toastType = useAppSelector(state => state.toast.show);
    const toastMessage = useAppSelector(state => state.toast.message);

    return (
        <>
            {modalShow &&
                <ModalWrapper z={20}>
                    <div className="z-20 text-center absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                        <Loader />
                    </div>
                </ModalWrapper>
            }
            { toastType !== "none" &&
                <ModalWrapper z={20} position="top left" bgOpacity="none">
                    <Toast icon={toastType} message={toastMessage} />
                </ModalWrapper>
            }
            <Outlet />
        </>
    )
}
