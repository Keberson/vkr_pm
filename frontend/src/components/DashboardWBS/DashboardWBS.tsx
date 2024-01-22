import React from "react";

export const DashboardWBS = () => {
    return (
        <div className="p-2">
            <div className="mt-5">
                <div className="border-l-4 border-blue-400 pl-4 flex flex-col gap-3">
                    <div>
                        <p>Уровень 1</p>
                        <div className="border-l-4 border-red-400 mt-2 pl-4">
                            <p>Уровень 2</p>
                            <div className="border-l-4 border-orange-400 mt-2 pl-4">
                                <p>Уровень 3</p>
                                <div className="border-l-4 border-fuchsia-400 mt-2 pl-4">
                                    <p>Задача 1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Уровень 1</p>
                        <div className="border-l-4 border-red-400 mt-2 pl-4">
                            <p>Уровень 2</p>
                            <div className="border-l-4 border-orange-400 mt-2 pl-4">
                                <p>Уровень 3</p>
                                <div className="border-l-4 border-fuchsia-400 mt-2 pl-4">
                                    <p>Задача 1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
