import React, {useEffect} from "react";

import {ITree, Tree, TreeNode} from "../../../../types/Tree";

import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../../hooks/useAppSelector";

import {GantWBSTableHead} from "../GantWBSTableHead/GantWBSTableHead";
import {GantRow} from "../GantRow/GantRow";
import {useGetTreeQuery} from "../../../../services/APIService";
import {setLoader} from "../../../../store/slices/LoaderSlice";


interface GantTableProps {
    projectID: number,
    view: number
}

export const GantTable: React.FC<GantTableProps> = ({ projectID, view }) => {
    const dispatch = useAppDispatch();
    const { isLoading: isLoadingTree, data } = useGetTreeQuery({project: projectID, view: view});
    const tree = new Tree({
        id: -1,
        name: '',
        date_start_plan: '',
        date_finish_plan: '',
        date_start_actual: '',
        date_finish_actual: '',
        status: "Не начата",
        project_id: -1,
        id_view: -1
    });

    useEffect(() => {
        dispatch(setLoader({show: isLoadingTree, from: "GantTable"}));
    }, [dispatch, isLoadingTree]);

    const walk = (node: TreeNode, nodeGot: ITree) => {
        node.setValue(nodeGot.value);

        for (const child of nodeGot.childs) {
            const treeNode = new TreeNode(child.value, node);

            node.addChildren(treeNode);
            walk(treeNode, child);
        }
    };

    if (data) {
        walk(tree.getRoot(), data.result);
    }

    const stopNodes = useAppSelector(state => state.tree.stopNode);

    return (
        <div className="flex">
            <table className="w-[1000px] table-fixed">
                <thead className="sticky top-0 text-text bg-background-secondary z-10">
                    <GantWBSTableHead />
                </thead>
                <tbody className="text-text text-sm">
                {
                    Tree.walkTree(tree.getRoot(), 0, (node: TreeNode, gap: number, isEmpty: boolean) => {
                        if (node.getValue().id !== -1) {
                            return <GantRow nodeData={node.getValue()} gap={gap - 1} isEmpty={isEmpty} view={view}/>
                        } else {
                            return <></>
                        }
                    }, stopNodes)
                }
                </tbody>
            </table>
        </div>
    )
};
