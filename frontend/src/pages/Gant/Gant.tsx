import React, {useEffect} from "react";
import {ScrollSync, ScrollSyncPane} from 'react-scroll-sync';
import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";

import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useGetWBSQuery} from "../../services/APIService";
import {useGetViewQuery} from "../../services/APIService";

import {GantItemActivityDescription} from "../../components/Dashboard/Gant/GantItemActivityDescription/GantItemActivityDescription";
import {ModalWrapper} from "../../components/ModalWrapper/ModalWrapper";
import {GantTable} from "../../components/Dashboard/Gant/GantTable/GantTable";
import {ModalCreate} from "../../components/Dashboard/Gant/ModalCreate/ModalCreate";
import {ModalGroup} from "../../components/Dashboard/Gant/ModalGroup/ModalGroup";

import {setModal, setModalType} from "../../store/slices/ModalProjectSlice";
import {setLoader} from "../../store/slices/LoaderSlice";
import {GantItemWBSDescription} from "../../components/Dashboard/Gant/GantItemWBSDescription/GantItemWBSDescription";

type ViewSelect = {
    view: number
}

export const Gant = () => {
    const params = useParams();
    const projectID: number = Number(params.id);

    const dispatch = useAppDispatch();
    const {register, watch} = useForm<ViewSelect>({
        defaultValues: {
            view: -1
        }
    });
    const view: number = watch("view");

    const isShowEditor = useAppSelector(state => state.editor.isShow);
    const showEditorType = useAppSelector(state => state.editor.showType);
    const isShowModal = useAppSelector(state => state.modalProject.show);
    const views = useAppSelector(state => state.view.views);
    const isHaveSelected = useAppSelector(state => state.group.toGroup).length > 1;
    const modalType = useAppSelector(state => state.modalProject.type);

    const { isLoading: isLoadingViews } = useGetViewQuery(projectID);
    const { isLoading: isLoadingWBS } = useGetWBSQuery(view);

    const gridStyle = isShowEditor ? "grid-rows-[35px_1fr_300px]" : "grid-rows-[35px_1fr]";
    const heightBlock = isShowEditor ? "calc(100vh - 35px - 300px)" : "calc(100vh - 35px)";
    const groupStyle = view !== -1 && isHaveSelected ? "text-text border-text-secondary" : "text-text-muted border-gray cursor-default";

    useEffect(() => {
        dispatch(setLoader({show: isLoadingViews || isLoadingWBS, from: "Gant"}));
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
                <ModalWrapper z={40}>
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
                    {isShowEditor && showEditorType === "activity" && <GantItemActivityDescription  projectID={projectID}/>}
                    {isShowEditor && showEditorType === "wbs" && <GantItemWBSDescription />}
                </div>
            </ScrollSync>
        </>
    )
};
