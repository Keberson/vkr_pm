import React from "react";
export const GantWBSTableHead = () => {
    return (
        <tr className="text-sm">
            <th scope="col" className="w-[30px] sticky left-0 bg-background-light z-10"></th>
            <th scope="col" className="w-[30px]"></th>
            <th scope="col" className="w-[500px]">
                <div className="flex gap-5 w-full items-center justify-center relative">
                    <span>Заголовок</span>
                </div>
            </th>
            <th scope="col" className="w-[150px]">
                <div className="flex gap-5 w-full items-center justify-center relative">
                    <span>Статус</span>
                </div>
            </th>
            <th scope="col" className="w-[150px]">
                <div className="flex flex-col">
                    <span>Старт</span>
                    <span>(план)</span>
                </div>
            </th>
            <th scope="col" className="w-[150px]">
                <div className="flex flex-col">
                    <span>Финиш</span>
                    <span>(план)</span>
                </div>
            </th>
            <th scope="col" className="w-[150px]">
                <div className="flex flex-col">
                    <span>Старт</span>
                    <span>(факт)</span>
                </div>
            </th>
            <th scope="col" className="w-[150px]">
                <div className="flex flex-col">
                    <span>Финиш</span>
                    <span>(факт)</span>
                </div>
            </th>
            <th scope="col" className="w-[45px] sticky right-0 bg-background-light z-10"></th>
        </tr>
    )
};
