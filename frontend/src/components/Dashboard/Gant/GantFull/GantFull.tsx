import React, {useState} from "react";
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';

import {GantWBSTableHead} from "../GantWBSTableHead/GantWBSTableHead";
import {Tree, TreeNode} from "../../../../types/Tree";
import {GantRowActivity} from "../GantRowActivity/GantRowActivity";
import {GantItemActivityDescription} from "../GantItemActivityDescription/GantItemActivityDescription";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {toggleActivityEditor} from "../../../../store/slices/ActivityEditor";
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

    for (let i = 0; i < 100; i++) {
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
        name: `Дочерний узел`,
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

    return (
        <>
            <ScrollSync>
                <div className="h-full">
                    <div className="w-full bg-block-background-secondary h-[3%]">

                    </div>
                    <div className="grid grid-cols-2 h-[67%]">
                        <ScrollSyncPane>
                            <>
                                <div className="overflow-auto">
                                    <table className="table-fixed border-spacing-2">
                                        <thead className="text-text bg-background-secondary">
                                            <GantWBSTableHead />
                                        </thead>
                                        <tbody className="text-text text-sm">
                                        {
                                            Tree.walkTree(tree.getRoot(), 0, (node: TreeNode, gap: number, isEmpty: boolean) =>
                                                <GantRowActivity nodeData={node.getValue()} gap={gap} isEmpty={isEmpty} />
                                            )
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
