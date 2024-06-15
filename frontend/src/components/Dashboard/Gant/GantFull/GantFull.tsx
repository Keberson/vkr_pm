import React, {useEffect} from "react";
import {ScrollSync, ScrollSyncPane} from 'react-scroll-sync';
import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";

import {useAppSelector} from "../../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {api, useGetWBSQuery} from "../../../../services/APIService";
import {useGetViewQuery} from "../../../../services/APIService";

import {GantItemActivityDescription} from "../GantItemActivityDescription/GantItemActivityDescription";
import {ModalWrapper} from "../../../ModalWrapper/ModalWrapper";
import {GantTable} from "../GantTable/GantTable";
import {ModalCreate} from "../ModalCreate/ModalCreate";
import {ModalGroup} from "../ModalGroup/ModalGroup";

import {setModal, setModalType} from "../../../../store/slices/ModalProjectSlice";
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
    const view: number = watch("view");

    const isShowActivityEditor = useAppSelector(state => state.activityEditor.isShow);
    const isShowModal = useAppSelector(state => state.modalProject.show);
    const views = useAppSelector(state => state.view.views);
    const isHaveSelected = useAppSelector(state => state.group.toGroup).length !== 0;
    const modalType = useAppSelector(state => state.modalProject.type);
    const { isLoading: isLoadingViews } = useGetViewQuery(projectID);
    const { isLoading: isLoadingWBS } = useGetWBSQuery(view);

    const gridStyle = isShowActivityEditor ? "grid-rows-[35px_1fr_300px]" : "grid-rows-[35px_1fr]";
    const heightBlock = isShowActivityEditor ? "calc(100vh - 35px - 300px)" : "calc(100vh - 35px)";
    const groupStyle = isHaveSelected ? "text-text border-text-secondary" : "text-text-muted border-gray cursor-default";

    useEffect(() => {
        dispatch(setLoader({show: isLoadingViews || isLoadingWBS, from: "GantFull"}));
    }, [dispatch, isLoadingViews, isLoadingWBS]);

    const onCreate = () => {
        dispatch(setModalType("create"));
        dispatch(setModal(true));
    }
    const onGroup = () => {
        if (isHaveSelected) {
            dispatch(setModalType("group"));
            dispatch(setModal(true));
        }
    };

    return (
        <>
            {isShowModal &&
                <ModalWrapper z={20}>
                    {modalType === "create" && <ModalCreate projectID={projectID} view={view} />}
                    {modalType === "group" && <ModalGroup projectID={projectID} view={view} />}
                </ModalWrapper>
            }
            <ScrollSync>
                <div className={`h-full grid ${gridStyle}`}>
                    <div className="w-full bg-block-background-secondary ps-5 flex items-center gap-5">
                        <button className="p-1 text-sm text-text rounded-lg border-text-secondary border-2" onClick={onCreate}>
                            Добавить
                        </button>
                        <button className={`p-1 text-sm rounded-lg border-2 ${groupStyle}`} onClick={onGroup}>
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
