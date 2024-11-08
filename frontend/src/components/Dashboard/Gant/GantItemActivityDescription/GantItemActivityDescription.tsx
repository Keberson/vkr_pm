import React from "react";

import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {CrossIcon} from "../../../../assets/CrossIcon";
import {clearActivity, toggleActivityEditor} from "../../../../store/slices/ActivityEditorSlice";
import diffDate from "../../../../utils/diffDate";
import {Tree} from "../../../../types/Tree";
import {useDeleteActivityMutation} from "../../../../services/APIService";

export const GantItemActivityDescription: React.FC = () => {
    const dispatch = useAppDispatch();
    const activity = useAppSelector(state => state.activityEditor.activity);
    const tree = useAppSelector(state => state.tree.tree);
    const wbs = useAppSelector(state => state.tree.wbs);
    const [deleteActivity] = useDeleteActivityMutation();

    const wbsId = Tree.findParent(tree.getRoot(), "0", `activity-${activity.id}`)?.split("wbs-")[1];
    const isHaveChanges: boolean = false;
    const saveStyles = isHaveChanges ? "border-light text-text cursor-pointer" : "cursor-default border-text-secondary text-text-muted";

    const onClose = () => dispatch(toggleActivityEditor());
    const onDelete = () => {
        deleteActivity(activity.id);
        dispatch(clearActivity());
        dispatch(toggleActivityEditor());
    }

    return (
        <div className="w-full bg-background-secondary ps-5 pe-5 pt-2 pb-2 text-text gap-2 flex flex-col" >
            <div className="w-full flex flex-col gap-2">
                <div className="inline-flex items-center w-full justify-between">
                    <div className="flex gap-5">
                        <h2 className="font-bold">Редактирование работы "{activity.name}"</h2>
                        <select className="text-black">
                            {!wbsId || (wbsId && Number(wbsId) === -1) ?
                                <option value={wbsId}>Доступные WBS</option>
                                :
                                <option value={wbsId}>{wbs.find(element => element.id === Number(wbsId))!.name}</option>
                            }
                            {
                                wbs.filter(element => element.id !== Number(wbsId)).map(element => (
                                    <option value={element.id}>{element.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="flex gap-5">
                        <button
                            className="ps-2 pe-2 pt-1 pb-1 border-2 border-light rounded-md"
                            onClick={onDelete}
                        >
                            Удалить
                        </button>
                        <button className={`ps-2 pe-2 pt-1 pb-1 border-2 ${saveStyles} rounded-md`}>
                            Сохранить
                        </button>
                        <button onClick={onClose}>
                            <CrossIcon size={10} />
                        </button>
                    </div>
                </div>
                <hr />
            </div>
            <div className="grid grid-cols-3 gap-x-3 gap-y-3 pb-2 text-black overflow-auto">
                <div className="">
                    <label className="text-text">Заголовок работы</label>
                    <input type="text" placeholder="Заголовок работы" className="ps-2 pe-2 pt-1 pb-1 w-full" value={activity.name} />
                </div>
                <div className="flex flex-col">
                    <label className="text-text">Статус</label>
                    <select value={activity.status} className="ps-2 pe-2 pt-1 pb-1 w-full h-full">
                        <option value="Не начата">Не начата</option>
                        <option value="Выполняется">Выполняется</option>
                        <option value="Завершена">Завершена</option>
                    </select>
                </div>
                <div />
                <div className="col-span-3">
                    <label className="text-text">Описание</label>
                    <textarea placeholder="Описание" className="ps-2 pe-2 pt-1 pb-1 text-black w-full" value={activity.description} />
                </div>
                <div className="flex flex-col">
                    <label className="text-text">Дата старта (план)</label>
                    <input type="date" value={activity.date_start_plan.split('T')[0]} />
                </div>
                <div className="flex flex-col">
                    <label className="text-text">Дата финиша (план)</label>
                    <input type="date" value={activity.date_finish_plan.split('T')[0]} />
                </div>
                <div className="flex flex-col">
                    <span className="text-text">Длительность (план), дней</span>
                    <span className="text-text">{diffDate(activity.date_finish_plan, activity.date_start_plan)}</span>
                </div>
                <div className="flex flex-col">
                    <label className="text-text">Дата старта (факт)</label>
                    <input type="date" value={activity.date_start_actual.split('T')[0]} />
                </div>
                <div className="flex flex-col">
                    <label className="text-text">Дата финиша (факт)</label>
                    <input type="date" value={activity.date_finish_actual.split('T')[0]} />
                </div>
                <div className="flex flex-col">
                    <span className="text-text">Длительность (факт), дней</span>
                    <span className="text-text">{diffDate(activity.date_finish_actual, activity.date_start_actual)}</span>
                </div>
            </div>
        </div>
    );
};
