import React from "react";

import {GantWBSTableHead} from "../GantWBSTableHead/GantWBSTableHead";
import {Tree, TreeNode} from "../../../../types/Tree";
import {GantRow} from "../GantRow/GantRow";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {setLoader} from "../../../../store/slices/LoaderSlice";
import {useGetTreeQuery} from "../../../../services/TreeService";

interface GantTableProps {
    projectID: number,
    view: number
}

export const GantTable: React.FC<GantTableProps> = ({ projectID, view }) => {
    const dispatch = useAppDispatch();
    const { isLoading: isLoadingTree, error: errorTree } = useGetTreeQuery({project: projectID, view: view});

    dispatch(setLoader({show: isLoadingTree, from: "GantTable"}));

    const tree: Tree = useAppSelector(state => state.tree.tree);
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
                            return <GantRow nodeData={node.getValue()} gap={gap} isEmpty={isEmpty}/>
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
