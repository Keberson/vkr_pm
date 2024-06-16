import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

import {useAppSelector} from "../../hooks/useAppSelector";

import {LoginForm} from "../../components/LoginPage/LoginForm/LoginForm";
import {Logo} from "../../components/Logo/Logo";

export const Login = () => {
    const isAuth = useAppSelector(state => state.auth.isAuth);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) {
            navigate("/dashboard");
        }
    }, [isAuth, navigate]);

    return (
        <div className="flex h-full">
            <div className="container mx-auto mt-20 flex flex-col gap-10">
                <div className="flex flex-col items-center">
                    <Logo size={120} />
                    <h1 className="text-text text-3xl comfortaa-700 text-center">WBS Studio</h1>
                </div>
                <LoginForm />
            </div>
        </div>
    );
};