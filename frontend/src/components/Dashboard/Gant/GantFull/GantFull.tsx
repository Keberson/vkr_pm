import React from "react";
import {ScrollSync, ScrollSyncPane} from 'react-scroll-sync';
import {useParams} from "react-router-dom";

import {useAppSelector} from "../../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";

import {GantItemActivityDescription} from "../GantItemActivityDescription/GantItemActivityDescription";
import {ModalWrapper} from "../../../ModalWrapper/ModalWrapper";
import {GantTable} from "../GantTable/GantTable";
import {ModalCreate} from "../ModalCreate/ModalCreate";
import {setModal} from "../../../../store/slices/ModalProjectSlice";
import {useGetViewQuery} from "../../../../services/ViewService";
import {useForm} from "react-hook-form";
import {setLoader} from "../../../../store/slices/LoaderSlice";

type ViewSelect = {
    view: number
}

export const GantFull = () => {
    const params = useParams();
    const projectID: number = Number(params.id);

    const dispatch = useAppDispatch();
    const {register, watch} = useForm<ViewSelect>({
        defaultValues: {
            view: -1
        }
    });

    const isShowActivityEditor = useAppSelector(state => state.activityEditor.isShow);
    const isShowModal = useAppSelector(state => state.modalProject.show);
    const views = useAppSelector(state => state.view.views);
    const isHaveSelected = false;

    const gridStyle = isShowActivityEditor ? "grid-rows-[35px_1fr_200px]" : "grid-rows-[35px_1fr]";
    const heightBlock = isShowActivityEditor ? "calc(100vh - 35px - 200px)" : "calc(100vh - 35px)";
    const groupStyle = isHaveSelected ? "text-text border-text-secondary" : "text-text-muted border-gray cursor-default";

    const { isLoading, error } = useGetViewQuery(projectID);

    dispatch(setLoader({show: isLoading, from: "GantFull"}));

    const view: number = watch("view");

    const onCreate = () => dispatch(setModal(true));

    return (
        <>
            {isShowModal &&
                <ModalWrapper z={20}>
                    <ModalCreate projectID={projectID} view={view} />
                </ModalWrapper>
            }
            <ScrollSync>
                <div className={`h-full grid ${gridStyle}`}>
                    <div className="w-full bg-block-background-secondary ps-5 flex items-center gap-5">
                        <button className="p-1 text-sm text-text rounded-lg border-text-secondary border-2" onClick={onCreate}>
                            Добавить
                        </button>
                        <button className={`p-1 text-sm rounded-lg border-2 ${groupStyle}`} onClick={() => {}}>
                            Сгруппировать
                        </button>
                        <form>
                            <select
                                className="p-1 text-sm text-text rounded-lg border-text-secondary border-2 bg-block-background-secondary outline-none"
                                {...register("view")}
                            >
                                <option value="-1">Вид "Все работы"</option>
                                {
                                    views.map((view) => (
                                        <option value={view.id}>Вид "{view.name}"</option>
                                    ))
                                }
                            </select>
                        </form>
                    </div>
                    <div className={`grid grid-cols-2`} style={{height: heightBlock}}>
                        <ScrollSyncPane>
                            <>
                                <div className="overflow-auto border-r-2 border-r-gray h-full">
                                    <GantTable projectID={projectID} view={view} />
                                </div>
                                <div>

                                </div>
                            </>
                        </ScrollSyncPane>
                    </div>
                    {isShowActivityEditor && <GantItemActivityDescription />}
                </div>
            </ScrollSync>
        </>
    )
};
