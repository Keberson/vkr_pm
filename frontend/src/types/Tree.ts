import {IActivity} from "./IActivity";
import {IWBS} from "./IWBS";
import isInstanceOfIActivity from "../utils/isInstanceOfIActivity";
import {nodeArrayFilter} from "../utils/nodeArrayFilter";
import {Simulate} from "react-dom/test-utils";
import copy = Simulate.copy;
import {IFilterProject} from "./IFilterProject";

type NodeT = IWBS | IActivity;

class TreeNode {
    private value: NodeT;
    private parent: TreeNode | null;
    private children: TreeNode[];

    constructor(value: NodeT, parent: TreeNode | null = null, children: TreeNode[] = []) {
        this.value = value;
        this.parent = parent;
        this.children = children;
    }

    getValue(): NodeT {
        return this.value;
    }

    setValue(newValue: NodeT) {
        this.value = newValue;
    }

    getParent(): TreeNode | null {
        return this.parent;
    }

    setParent(newParent: TreeNode | null) {
        this.parent = newParent;
    }

    getChildrens(): TreeNode[] {
        return this.children;
    }

    addChildren(newChildren: TreeNode) {
        this.children.push(newChildren);
    }

    removeChildren(index: number) {
        this.children.splice(index, 1);
    }

    removeAllChildrens() {
        this.children.slice();
    }
}

class Tree {
    private readonly root: TreeNode;

    constructor(data: NodeT) {
        this.root = new TreeNode(data);
    }

    getRoot(): TreeNode {
        return this.root;
    }

    setRootValue(data: NodeT) {
        this.root.setValue(data);
    }

    setRoot(data: NodeT) {
        this.root.setValue(data);
        this.root.removeAllChildrens();
    }

    static walkTree(nextNode: TreeNode, gap: number, callback: (node: TreeNode, gap: number, isEmpty: boolean) => JSX.Element, stopNodes: NodeT[], filters?: IFilterProject) {
        // TODO: фильтрацию сделать
        const res: JSX.Element[] = [];

        res.push(callback(nextNode, gap, nextNode.getChildrens().length === 0));

        if (nodeArrayFilter(stopNodes, nextNode.getValue(), false).length !== 0) {
            return res;
        }

        for (const children of nextNode.getChildrens()) {
            res.push(...this.walkTree(children, gap + 1, callback, stopNodes, filters));
        }

        return res;
    }
}

export {TreeNode, Tree};
export type { NodeT };
