import React from "react";
import {LoginForm} from "../../components/LoginPage/LoginForm/LoginForm";

export const Login = () => {
    return (
        <div className="flex h-full">
            <div className="container mx-auto my-auto flex flex-col gap-10">
                <h1 className="text-text text-3xl comfortaa-700 text-center">Управление проектами</h1>
                <LoginForm />
            </div>
        </div>
    );
};