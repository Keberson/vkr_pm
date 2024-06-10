import React from "react";

import {HideIcon} from "../../../../assets/HideIcon";
import {ItemIcon} from "../../../../assets/ItemIcon";
import getFormatDate from "../../../../utils/getFormatDate";
import {NodeT} from "../../../../types/Tree";
import {setActivity, toggleActivityEditor} from "../../../../store/slices/ActivityEditor";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import isInstanceOfIActivity from "../../../../utils/isInstanceOfIActivity";
import {useAppSelector} from "../../../../hooks/useAppSelector";

interface GantRowActivityProps {
    nodeData: NodeT,
    isEmpty: boolean,
    gap: number,
}

export const GantRowActivity: React.FC<GantRowActivityProps> = ({ nodeData, isEmpty, gap }) => {
    const dispatch = useAppDispatch();
    const isShowed = useAppSelector(state => state.activityEditor.isShow);

    const onClickRow = () =>  {
        console.log(isInstanceOfIActivity(nodeData));

        if (isInstanceOfIActivity(nodeData)) {
            if (!isShowed) {
                dispatch(toggleActivityEditor());
            }

            dispatch(setActivity(nodeData));
        }
    };

    return (
        <tr key={`${nodeData.name} ${nodeData.id}`} className="hover:bg-block-background-secondary" onClick={onClickRow}>
            <th scope="row" className="text-center">{nodeData.id}</th>
            <td className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                <button type="button" className={`inline-flex items-center gap-x-[10px] px-3 py-2`} style={{marginLeft: `${gap * 8}px`}}>
                    {
                        !isEmpty ? <HideIcon size={5} /> : <ItemIcon size={5} />

                    }
                    <span>{nodeData.name}</span>
                </button>
            </td>
            <td className="text-center">{getFormatDate(nodeData.date_start_plan)}</td>
            <td className="text-center">{getFormatDate(nodeData.date_finish_plan)}</td>
            <td className="text-center">{getFormatDate(nodeData.date_start_actual)}</td>
            <td className="text-center">{getFormatDate(nodeData.date_finish_actual)}</td>
            <td className="text-center">{nodeData.status}</td>
        </tr>
    )
};
