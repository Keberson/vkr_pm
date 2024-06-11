import React from "react";
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';

import {GantWBSTableHead} from "../GantWBSTableHead/GantWBSTableHead";
import {Tree, TreeNode} from "../../../../types/Tree";
import {GantRowActivity} from "../GantRowActivity/GantRowActivity";
import {GantItemActivityDescription} from "../GantItemActivityDescription/GantItemActivityDescription";
import {useAppSelector} from "../../../../hooks/useAppSelector";

export const GantFull = () => {
    const tree: Tree = new Tree({
        id: 1,
        name: 'WBS #1',
        date_start_plan: new Date(2024, 10, 20),
        date_finish_plan: new Date(2024, 10, 20),
        date_start_actual: new Date(2024, 10, 20),
        date_finish_actual: new Date(2024, 10, 20),
        status: 'Завершено',
        project_id: 1,
    });

    for (let i = 0; i < 2; i++) {
        tree.getRoot().addChildren(new TreeNode({
            id: i + 2,
            name: `Выполнение преддипломной ${i}`,
            description: 'Написать НИРС',
            date_start_plan: new Date(2024, 10, 20),
            date_finish_plan: new Date(2024, 10, 21),
            date_start_actual: new Date(2024, 10, 20),
            date_finish_actual: new Date(2024, 10, 21),
            others: JSON.parse('{}'),
            status: "Завершено",
            project_id: 1
        }));
    }

    const childNode = new TreeNode({
        id: 7,
        name: `Дочерний узелллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллл`,
        description: 'Написать НИРС',
        date_start_plan: new Date(2024, 10, 20),
        date_finish_plan: new Date(2024, 10, 21),
        date_start_actual: new Date(2024, 10, 20),
        date_finish_actual: new Date(2024, 10, 21),
        others: JSON.parse('{}'),
        status: "Не начато",
        project_id: 1
    });

    tree.getRoot().getChildrens()[0].addChildren(childNode);

    const isShowActivityEditor = useAppSelector(state => state.activityEditor.isShow);
    const stopNodes = useAppSelector(state => state.tree.stopNode);
    const gridStyle = isShowActivityEditor ? "grid-rows-[30px_1fr_200px]" : "grid-rows-[30px_1fr]";

    return (
        <>
            <ScrollSync>
                <div className={`h-full grid ${gridStyle}`}>
                    <div className="w-full bg-block-background-secondary">

                    </div>
                    <div className={`grid grid-cols-2`}>
                        <ScrollSyncPane>
                            <>
                                <div className="overflow-auto border-r-2 border-r-gray">
                                    <table className="w-[1000px] table-fixed">
                                        <thead className="sticky top-0 text-text bg-background-secondary">
                                            <GantWBSTableHead />
                                        </thead>
                                        <tbody className="text-text text-sm">
                                        {
                                            Tree.walkTree(tree.getRoot(), 0, (node: TreeNode, gap: number, isEmpty: boolean) => {
                                                if (node.getValue().id !== -1) {
                                                    return <GantRowActivity nodeData={node.getValue()} gap={gap} isEmpty={isEmpty}/>
                                                } else {
                                                    return <></>
                                                }
                                            }, stopNodes)
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        </ScrollSyncPane>
                    </div>
                    {isShowActivityEditor && <GantItemActivityDescription height="30%" />}
                </div>
            </ScrollSync>
        </>
    )
};
