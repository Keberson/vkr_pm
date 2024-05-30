import React from "react";

export const TableTasksHeader = () => {

    return (
        <thead className="border-b border-text-secondary">
            <tr>
                <th scope="col" className="w-20">ID</th>
                <th scope="col" className="w-10"></th>
                <th scope="col" className="">Заголовок</th>
                <th scope="col" className="w-40">
                    <div className="flex flex-col">
                        <span>Дата старта</span>
                        <span>(по плану)</span>
                    </div>
                </th>
                <th scope="col" className="w-40">
                    <div className="flex flex-col">
                        <span>Дата финиша</span>
                        <span>(по плану)</span>
                    </div>
                </th>
                <th scope="col" className="w-40">
                    <div className="flex flex-col">
                        <span>Дата старта</span>
                        <span>(фактическая)</span>
                    </div>
                </th>
                <th scope="col" className="w-40">
                    <div className="flex flex-col">
                        <span>Дата финиша</span>
                        <span>(фактическая)</span>
                    </div>
                </th>
                <th scope="col" className="w-40">Статус</th>
            </tr>
        </thead>
    );
};