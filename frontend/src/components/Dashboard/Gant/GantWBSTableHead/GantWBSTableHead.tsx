import React, {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {FilterIcon} from "../../../../assets/FilterIcon";
import {SearchIcon} from "../../../../assets/SearchIcon";
import {useOutsideClick} from "../../../../hooks/useOutsideClick";
import {clearFilterName, setFilterName} from "../../../../store/slices/TreeSlice";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";

type Input = {
    filter: string
}

export const GantWBSTableHead = () => {
    const dispatch = useAppDispatch();

    const [nameDropdownOpened, setNameDropdownOpened] = useState<boolean>(false);
    const [statusDropdownOpened, setStatusDropdownOpened] = useState<boolean>(false);

    const refName = useOutsideClick(nameDropdownOpened, () => setNameDropdownOpened(false));
    const refStatus = useOutsideClick(statusDropdownOpened, () => setStatusDropdownOpened(false));

    const {
        register,
        handleSubmit,
        formState,
    } = useForm<Input>();
    const onSubmit: SubmitHandler<Input> = (data) => {
        if (data.filter !== '') {
            dispatch(setFilterName(data.filter));
        } else {
            dispatch(clearFilterName());
        }
    };

    return (
        <tr className="text-sm">
            <th scope="col" className="w-[30px] sticky left-0 bg-background-light z-10"></th>
            <th scope="col" className="w-[30px]"></th>
            <th scope="col" className="w-[500px]">
                <div className="flex gap-5 w-full items-center justify-center relative">
                    <span>Заголовок</span>
                    <button onClick={() => setNameDropdownOpened(!nameDropdownOpened)} >
                        <FilterIcon size={10} />
                    </button>
                    <div
                        ref={refName}
                        className={`w-[50%] bg-block-background-secondary absolute z-999 rounded-md py-[10px] px-3 transition-all top-full ${nameDropdownOpened ? "opacity-100 visible" : "invisible"}`}
                    >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex items-center gap-2 bg-light rounded pe-2">
                                <input type="text" className="text-black w-full ps-2 pe-2 pt-1 pb-0.5 rounded bg-light outline-none" placeholder="Поиск..." {...register("filter")} />
                                <button type="submit">
                                    <SearchIcon size={20} color="gray" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </th>
            <th scope="col" className="w-[125px]">
                <div className="flex gap-5 w-full items-center justify-center relative">
                    <span>Статус</span>
                    <button onClick={() => setStatusDropdownOpened(!statusDropdownOpened)} >
                        <FilterIcon size={10} />
                    </button>
                    <div
                        ref={refStatus}
                        className={`w-fit bg-block-background-secondary absolute z-999 rounded-md py-[10px] px-3 transition-all top-full ${statusDropdownOpened ? "opacity-100 visible" : "invisible"}`}
                    >
                        <select className="text-black ps-2 pe-2 pt-1 pb-1">
                            <option value="">-</option>
                            <option value="Не начато">Не начато</option>
                            <option value="Выполняется">Выполняется</option>
                            <option value="Завершено">Завершено</option>
                        </select>
                    </div>
                </div>
            </th>
            <th scope="col" className="w-[125px]">
                <div className="flex flex-col">
                    <span>Старт</span>
                    <span>(план)</span>
                </div>
            </th>
            <th scope="col" className="w-[125px]">
                <div className="flex flex-col">
                    <span>Финиш</span>
                    <span>(план)</span>
                </div>
            </th>
            <th scope="col" className="w-[125px]">
                <div className="flex flex-col">
                    <span>Старт</span>
                    <span>(факт)</span>
                </div>
            </th>
            <th scope="col" className="w-[125px]">
                <div className="flex flex-col">
                    <span>Финиш</span>
                    <span>(факт)</span>
                </div>
            </th>
            <th scope="col" className="w-[45px] sticky right-0 bg-background-light z-10"></th>
        </tr>
    )
};
