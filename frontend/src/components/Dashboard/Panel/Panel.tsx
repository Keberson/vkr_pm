import React, {useState} from "react";
import {SearchIcon} from "../../../assets/SearchIcon";
import {PlusIcon} from "../../../assets/PlusIcon";
import {AscIcon} from "../../../assets/AscIcon";
import {DescIcon} from "../../../assets/DescIcon";
import {SortIcon} from "../../../assets/SortIcon";


export const Panel = () => {
    const [sortMode, setSortMode] = useState<'asc' | 'desc' | 'unknown'>('unknown');

    return (
        <div className="w-full bg-background-secondary ps-10 pe-10 pt-2.5 pb-2.5 grid grid-cols-4 gap-5 items-center">
            <div className="flex items-center h-icon">
                <div className="bg-light flex items-center ps-2.5 rounded-l h-full">
                    <SearchIcon size={20} color="gray" />
                </div>
                <input type="text" onSubmit={() => {}} placeholder="Поиск..." className="w-full ps-3 pe-5 pt-1 pb-1 rounded-r bg-light h-full outline-0" />
            </div>
            <div className="flex gap-5">
                <div className="bg-block-background-secondary w-fit h-icon flex items-center justify-center rounded ps-1 pe-1 cursor-pointer">
                    <PlusIcon size={20} color="text-hover" />
                </div>
                <div className="bg-block-background-secondary w-fit h-icon flex items-center justify-center rounded ps-1 pe-1 cursor-pointer">
                    {
                        sortMode === "asc" ?
                            <AscIcon size={20} color="text-hover" />
                            :
                        sortMode === "desc" ?
                            <DescIcon size={20} color="text-hover" />
                            :
                            <SortIcon size={20} color="text-hover" />
                    }
                </div>
            </div>
        </div>
    )
};
