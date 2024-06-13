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

export const GantFull = () => {
    const params = useParams();
    const projectID: number = Number(params.id);
    const dispatch = useAppDispatch();

    const isShowActivityEditor = useAppSelector(state => state.activityEditor.isShow);
    const gridStyle = isShowActivityEditor ? "grid-rows-[35px_1fr_200px]" : "grid-rows-[35px_1fr]";
    const heightBlock = isShowActivityEditor ? "calc(100vh - 35px - 200px)" : "calc(100vh - 35px)";

    const isHaveSync = false;
    const syncStyle = isHaveSync ? "text-text border-text-secondary" : "text-text-muted border-gray cursor-default";

    const isShowModal = useAppSelector(state => state.modalProject.show);

    const onCreate = () => dispatch(setModal(true));

    return (
        <>
            {isShowModal &&
                <ModalWrapper>
                    <ModalCreate projectID={projectID}/>
                </ModalWrapper>
            }
            <ScrollSync>
                <div className={`h-full grid ${gridStyle}`}>
                    <div className="w-full bg-block-background-secondary ps-5 flex items-center gap-5">
                        <button className="p-1 text-sm text-text rounded-lg border-text-secondary border-2" onClick={onCreate}>
                            Добавить
                        </button>
                        <button className={`p-1 text-sm rounded-lg border-2 ${syncStyle}`} onClick={() => {}}>
                            Сгруппировать
                        </button>
                        <select className="p-1 text-sm text-text rounded-lg border-text-secondary border-2 bg-block-background-secondary outline-none ">
                            <option value="1">Вид "Основной"</option>
                            <option value="2">Вид "Вспомогательный"</option>
                        </select>
                    </div>
                    <div className={`grid grid-cols-2`} style={{height: heightBlock}}>
                        <ScrollSyncPane>
                            <>
                                <div className="overflow-auto border-r-2 border-r-gray h-full">
                                    <GantTable projectID={projectID} />
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
