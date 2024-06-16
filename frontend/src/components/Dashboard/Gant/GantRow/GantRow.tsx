import React, {useState} from "react";

import {HideIcon} from "../../../../assets/HideIcon";
import {ItemIcon} from "../../../../assets/ItemIcon";
import {WBSIcon} from "../../../../assets/WBSIcon";
import {ActivityIcon} from "../../../../assets/ActivityIcon";
import {ExpandIcon} from "../../../../assets/ExpandIcon";
import {EditIcon} from "../../../../assets/EditIcon";

import getFormatDate from "../../../../utils/getFormatDate";
import {NodeT, Tree} from "../../../../types/Tree";
import {setActivity, setEditorType, setWBS, toggleEditor} from "../../../../store/slices/EditorSlice";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import isInstanceOfIActivity from "../../../../utils/isInstanceOfIActivity";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {addStopNode, deleteStopNode} from "../../../../store/slices/TreeSlice";
import {nodeArrayFilter} from "../../../../utils/nodeArrayFilter";
import {addToGroup, removeFromGroup} from "../../../../store/slices/GroupSlice";

interface GantRowActivityProps {
    nodeData: NodeT,
    isEmpty: boolean,
    gap: number,
}

export const GantRow: React.FC<GantRowActivityProps> = ({ nodeData, isEmpty, gap }) => {
    const [isHover, setIsHover] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const isShowed = useAppSelector(state => state.editor.isShow);
    const stopNodes = useAppSelector(state => state.tree.stopNode);
    const isHidedList = nodeArrayFilter(stopNodes, nodeData, false).length !== 0;
    const statusColor = nodeData.status === "Не начата" ? "bg-red" : nodeData.status === "Выполняется" ? "bg-blue" : "bg-green";
    const rowStyle = isHover ? "bg-block-background-secondary" : "bg-background";
    const type: "activity" | "wbs" = isInstanceOfIActivity(nodeData) ? "activity" : "wbs";
    const checkboxID = `${type}-${nodeData.id}`;
    const tree = useAppSelector(state => state.tree.tree);
    const childCheckbox: string[] = type === "wbs" ? Tree.walkTreeGetChilds(tree.getRoot(), nodeData.id, false) : [];
    const isChecked = useAppSelector(state => state.group.toGroup).includes(checkboxID);

    const onClickRow = () =>  {
        if (isInstanceOfIActivity(nodeData)) {
            dispatch(setActivity(nodeData));
            dispatch(setEditorType("activity"));
        } else {
            dispatch(setEditorType("wbs"));
            dispatch(setWBS(nodeData));
        }

        if (!isShowed) {
            dispatch(toggleEditor());
        }
    };

    const onClickHideIcon = () => {
        if (nodeArrayFilter(stopNodes, nodeData, false).length === 0) {
            dispatch(addStopNode(nodeData));
        } else {
            dispatch(deleteStopNode(nodeData));
        }
    }

    const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checkboxes = [...childCheckbox, checkboxID];
        let callback;

        if (type === "wbs") {
        }

        if (e.target.checked) {
            callback = addToGroup;
        } else {
            callback = removeFromGroup;
        }

        for (const checkbox of checkboxes) {
            dispatch(callback(checkbox));
        }
    }

    return (
        <tr key={`${nodeData.name} ${nodeData.id}`} className="hover:bg-block-background-secondary"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <td className={`sticky left-0 ${rowStyle}`}>
                <div className="flex justify-center items-center">
                    <input type="checkbox" key={checkboxID} onChange={onChangeCheckbox} checked={isChecked} />
                </div>
            </td>
            <td>
                {type === "wbs" && <WBSIcon size={20} />}
                {type === "activity" && <ActivityIcon size={20} />}
            </td>
            <td className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                <button
                    className={`inline-flex items-center justify-start gap-x-[10px] pe-3 py-2 outline-none`}
                    style={{marginLeft: `${gap * 10}px`}}
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
                <div className="flex items-center justify-start gap-5">
                    <div className={`p-2 rounded-full ${statusColor}`}/>
                    <span>{nodeData.status}</span>
                </div>
            </td>
            <td className="text-center">{getFormatDate(nodeData.date_start_plan)}</td>
            <td className="text-center">{getFormatDate(nodeData.date_finish_plan)}</td>
            <td className="text-center">{getFormatDate(nodeData.date_start_actual)}</td>
            <td className="text-center">{getFormatDate(nodeData.date_finish_actual)}</td>
            <td className={`sticky right-0 bg-background ${rowStyle}`}>
                <div className="flex justify-center items-center gap-3">
                    <button onClick={onClickRow}>
                        <EditIcon />
                    </button>
                </div>
            </td>
        </tr>
    )
};
