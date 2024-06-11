import React from "react";

import {HideIcon} from "../../../../assets/HideIcon";
import {ItemIcon} from "../../../../assets/ItemIcon";
import getFormatDate from "../../../../utils/getFormatDate";
import {NodeT} from "../../../../types/Tree";
import {setActivity, toggleActivityEditor} from "../../../../store/slices/ActivityEditorSlice";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import isInstanceOfIActivity from "../../../../utils/isInstanceOfIActivity";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {addStopNode, deleteStopNode} from "../../../../store/slices/TreeSlice";
import {nodeArrayFilter} from "../../../../utils/nodeArrayFilter";
import {ExpandIcon} from "../../../../assets/ExpandIcon";

interface GantRowActivityProps {
    nodeData: NodeT,
    isEmpty: boolean,
    gap: number,
}

export const GantRowActivity: React.FC<GantRowActivityProps> = ({ nodeData, isEmpty, gap }) => {
    const dispatch = useAppDispatch();
    const isShowed = useAppSelector(state => state.activityEditor.isShow);
    const stopNodes = useAppSelector(state => state.tree.stopNode);
    const isHidedList = nodeArrayFilter(stopNodes, nodeData, false).length !== 0;
    const statusColor = nodeData.status === "Не начато" ? "bg-red" : nodeData.status === "Выполняется" ? "bg-blue" : "bg-green";

    const onClickRow = () =>  {
        if (isInstanceOfIActivity(nodeData)) {
            if (!isShowed) {
                dispatch(toggleActivityEditor());
            }

            dispatch(setActivity(nodeData));
        }
    };

    const onClickHideIcon = () => {
        if (nodeArrayFilter(stopNodes, nodeData, false).length === 0) {
            dispatch(addStopNode(nodeData));
        } else {
            dispatch(deleteStopNode(nodeData));
        }
    }

    return (
        <tr key={`${nodeData.name} ${nodeData.id}`} className="hover:bg-block-background-secondary" onClick={onClickRow}>
            <td className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                <button
                    className={`inline-flex items-center justify-start gap-x-[10px] px-3 py-2 outline-none`}
                    style={{marginLeft: `${gap * 8}px`}}
                    onClick={onClickHideIcon}
                >
                    {
                        !isEmpty ?
                            isHidedList ? <ExpandIcon size={5} /> : <HideIcon size={5} />
                            : <ItemIcon size={5} />

                    }
                    <span className="whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[400px]">{nodeData.name}</span>
                </button>
            </td>
            <td className="text-center">
                <div className="flex items-center justify-between gap-2">
                    <div className={`p-2 rounded-full ${statusColor}`}/>
                    <span>{nodeData.status}</span>
                </div>
            </td>
            <td className="text-center">{getFormatDate(nodeData.date_start_plan)}</td>
            <td className="text-center">{getFormatDate(nodeData.date_finish_plan)}</td>
            <td className="text-center">{getFormatDate(nodeData.date_start_actual)}</td>
            <td className="text-center">{getFormatDate(nodeData.date_finish_actual)}</td>
        </tr>
    )
};
