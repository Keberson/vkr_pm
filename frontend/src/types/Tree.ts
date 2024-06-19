import {IActivity} from "./IActivity";
import {IWBS} from "./IWBS";
import {nodeArrayFilter} from "../utils/nodeArrayFilter";
import isInstanceOfIActivity from "../utils/isInstanceOfIActivity";

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
        this.children = this.children.splice(index, 1);
    }

    removeAllChildrens() {
        this.children = [];
    }
}

class Tree {
    private root: TreeNode;

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

    static findParent(nexNode: TreeNode, prev: string, toFind: string): string | undefined {
        const [type, id] = toFind.split('-');
        const value = nexNode.getValue();
        const curType = isInstanceOfIActivity(value) ? "activity" : "wbs";

        if (curType === type) {
            if (Number(id) === value.id) {
                return prev;
            }
        }

        for (const child of nexNode.getChildrens()) {
            const res = this.findParent(child, `${curType}-${value.id}`, toFind);

            if (res) {
                return res
            }
        }

        return undefined
    }

    static walkTreeGetChilds(nextNode: TreeNode, getFromWBS: number, already: boolean) {
        const res: string[] = [];
        const value = nextNode.getValue();
        const type: "wbs" | "activity" = isInstanceOfIActivity(value) ? "activity" : "wbs";
        const isAlready: boolean = (!isInstanceOfIActivity(value) && value.id === getFromWBS) || already;

        if (already) {
            res.push(`${type}-${nextNode.getValue().id}`);
        }

        for (const children of nextNode.getChildrens()) {
            res.push(...this.walkTreeGetChilds(children, getFromWBS, isAlready))
        }

        return res;
    }

    static walkTree(nextNode: TreeNode, gap: number, callback: (node: TreeNode, gap: number, isEmpty: boolean) => JSX.Element, stopNodes: NodeT[]) {
        const res: JSX.Element[] = [];

        res.push(callback(nextNode, gap, nextNode.getChildrens().length === 0));

        if (nodeArrayFilter(stopNodes, nextNode.getValue(), false).length !== 0) {
            return res;
        }

        for (const children of nextNode.getChildrens()) {
            res.push(...this.walkTree(children, gap + 1, callback, stopNodes));
        }

        return res;
    }
}

interface ITree {
    value: NodeT
    childs: ITree[]
}

export {TreeNode, Tree};
export type { NodeT, ITree };
