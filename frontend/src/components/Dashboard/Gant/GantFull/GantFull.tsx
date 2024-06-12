import React from "react";
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';

import { GantItemActivityDescription } from "../GantItemActivityDescription/GantItemActivityDescription";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";
import { GantTable } from "../GantTable/GantTable";
import { ModalCreate } from "../ModalCreate/ModalCreate";

export const GantFull = () => {
    const isShowActivityEditor = useAppSelector(state => state.activityEditor.isShow);
    const gridStyle = isShowActivityEditor ? "grid-rows-[35px_1fr_200px]" : "grid-rows-[35px_1fr]";

    const isHaveSync = false;
    const syncStyle = isHaveSync ? "text-text border-text-secondary" : "text-text-muted border-gray cursor-default";

    return (
        <>
            <ModalWrapper>
                <ModalCreate />
            </ModalWrapper>
            <ScrollSync>
                <div className={`h-full grid ${gridStyle}`}>
                    <div className="w-full bg-block-background-secondary ps-5 flex items-center gap-5">
                        <button className="p-1 text-sm text-text rounded-lg border-text-secondary border-2" onClick={() => {}}>
                            Добавить
                        </button>
                        <button className={`p-1 text-sm rounded-lg border-2 ${syncStyle}`} onClick={() => {}}>
                            Синхронизировать
                        </button>
                    </div>
                    <div className={`grid grid-cols-2`}>
                        <ScrollSyncPane>
                            <>
                                <div className="overflow-auto border-r-2 border-r-gray">
                                    <GantTable />
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
