import React, {useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";

import {ModalWrapper} from "../ModalWrapper/ModalWrapper";
import {Loader} from "../Loader/Loader";
import {useAppSelector} from "../../hooks/useAppSelector";
import {Toast} from "../Toast/Toast";

export const Wrappers = () => {
    const modalShow = useAppSelector(state => state.loader.show);
    const toastType = useAppSelector(state => state.toast.show);
    const toastMessage = useAppSelector(state => state.toast.message);

    const isAuth = useAppSelector(state => state.auth.isAuth);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) {
            navigate("/dashboard");
        } else {
            navigate("/login");
        }
    }, [isAuth, navigate]);

    return (
        <>
            {modalShow &&
                <ModalWrapper z={30}>
                    <div className="z-30 text-center absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                        <Loader />
                    </div>
                </ModalWrapper>
            }
            { toastType !== "none" &&
                <ModalWrapper z={30} position="top left" bgOpacity="none">
                    <Toast icon={toastType} message={toastMessage} />
                </ModalWrapper>
            }
            <Outlet />
        </>
    )
}
