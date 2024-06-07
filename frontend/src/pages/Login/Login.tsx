import React from "react";
import {LoginForm} from "../../components/LoginPage/LoginForm/LoginForm";
import {Logo} from "../../components/Logo/Logo";

export const Login = () => {
    return (
        <div className="flex h-full">
            <div className="container mx-auto mt-20 flex flex-col gap-10">
                <div className="flex flex-col items-center">
                    <Logo size={120} />
                    <h1 className="text-text text-3xl comfortaa-700 text-center">Управление проектами</h1>
                </div>
                <LoginForm />
            </div>
        </div>
    );
};