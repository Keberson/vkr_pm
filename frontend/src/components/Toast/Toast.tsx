import React, {useEffect} from "react";
import {CorrectIcon} from "../../assets/CorrectIcon";
import {CrossIcon} from "../../assets/CrossIcon";
import {ErrorIcon} from "../../assets/ErrorIcon";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {setToast} from "../../store/slices/ToastSlice";

interface ToastWrapperProps {
    icon: "correct" | "error",
    message: string
}

export const Toast: React.FC<ToastWrapperProps> = ({ icon, message }) => {
    const dispatch = useAppDispatch();
    const styles = icon === "correct" ? "text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200" : "text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200";

    const onClose = () => dispatch(setToast("none"));

    useEffect(() => {
        setTimeout(() => {
            dispatch(setToast("none"));
        }, 5000);
    }, [dispatch]);

    return (
        <>
            <div id="toast-success" className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 pointer-events-auto" role="alert">
                <div className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 ${styles} rounded-lg `}>
                    {icon === "error" && <ErrorIcon />}
                    {icon === "correct" && <CorrectIcon />}
                </div>
                <div className="ms-3 text-sm font-normal">{message}</div>
                <button type="button"
                        onClick={onClose}
                        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        data-dismiss-target="#toast-success"
                        aria-label="Close"
                >
                    <span className="sr-only">Close</span>
                    <CrossIcon size={10} />
                </button>
            </div>
        </>
    )
};
