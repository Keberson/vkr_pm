import React from "react";

export const GantWBSTableHead = () => {
    return (
        <tr className="text-sm">
            <th scope="col" className="w-[100px]">ID</th>
            <th scope="col" className="w-52">Заголовок</th>
            <th scope="col" className="w-32">
                <div className="flex flex-col">
                    <span>Старт</span>
                    <span>(план)</span>
                </div>
            </th>
            <th scope="col" className="w-32">
                <div className="flex flex-col">
                    <span>Финиш</span>
                    <span>(план)</span>
                </div>
            </th>
            <th scope="col" className="w-32">
                <div className="flex flex-col">
                    <span>Старт</span>
                    <span>(факт)</span>
                </div>
            </th>
            <th scope="col" className="w-32">
                <div className="flex flex-col">
                    <span>Финиш</span>
                    <span>(факт)</span>
                </div>
            </th>
            <th scope="col" className="w-32">Статус</th>
        </tr>
    )
};
