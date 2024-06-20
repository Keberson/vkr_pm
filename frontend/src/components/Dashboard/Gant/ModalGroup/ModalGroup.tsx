import React from "react";

import {Tree, TreeNode} from "../../../../types/Tree";

import {useAppSelector} from "../../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";

import {setModal} from "../../../../store/slices/ModalProjectSlice";
import {setIsSubmit, setType} from "../../../../store/slices/CreateSlice";
import isInstanceOfIActivity from "../../../../utils/isInstanceOfIActivity";

import {CreateWBS} from "../CreateWBS/CreateWBS";

interface ModalGroupProps {
    projectID: number,
    view: number
}

export const ModalGroup: React.FC<ModalGroupProps> = ({ projectID, view }) => {
    const tree = useAppSelector(state => state.tree.tree);
    const selected = useAppSelector(state => state.group.toGroup);
    const dispatch = useAppDispatch();
    const childs: TreeNode[] = selected.map(child => Tree.findNode(tree.getRoot(), child)!);
    const parent = tree.findLCA(childs)!;
    const childsToAdd = new Set<string>();

    for (const find of childs) {
        const type = isInstanceOfIActivity(find.getValue()) ? "activity" : "wbs";
        const findStr = `${type}-${find.getValue().id}`;

        for (const child of parent.getChildrens()) {

            if (Tree.hasChild(child, findStr)) {
                const value = child.getValue();

                childsToAdd.add(`${isInstanceOfIActivity(value) ? "activity" : "wbs"}-${value.id}`);
            }
        }
    }

    const onSubmit = async () => {
        dispatch(setType("wbs"));
        dispatch(setIsSubmit(true));
    };

    return (
        <div className="relative transform overflow-hidden rounded-lg bg-background-secondary text-left shadow-xl transition-all w-full max-w-7xl h-screen flex flex-col justify-between pointer-events-auto">
            <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full max-w-5xl flex flex-col">
                        <h1 className="text-xl font-semibold leading-6 text-text" id="modal-title">Группировка</h1>
                        <div className="mt-5">
                            <form className="flex flex-col gap-3 overflow-auto">
                                <div className="flex flex-col gap-5 w-full">
                                    <CreateWBS project={projectID} view={view} childs={Array.from(childsToAdd)} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-block-background-secondary px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                    className="inline-flex w-full justify-center rounded-md bg-background-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-block-background sm:ml-3 sm:w-auto"
                    onClick={onSubmit}
                >
                    Создать
                </button>
                <button
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => dispatch(setModal(false))}
                >
                    Закрыть
                </button>
            </div>
        </div>
    );
}
