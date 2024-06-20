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

    findLCA(nodes: TreeNode[]): TreeNode | null {
        const ancestors: Set<TreeNode>[] = [];

        for (const node of nodes) {
            let current = node;
            const tmp = new Set<TreeNode>([node]);

            while (current !== this.root && current !== null) {
                tmp.add(current.getParent()!);
                current = current.getParent()!;
            }

            ancestors.push(tmp);
        }

        let res: TreeNode | null = null;

        if (ancestors.length !== 0) {
            const mapNodes = new Map<TreeNode, number>();

            for (const ancestor of ancestors) {
                ancestor.forEach(item => {
                    if (mapNodes.has(item)) {
                        mapNodes.set(item, mapNodes.get(item)! + 1);
                    } else {
                        mapNodes.set(item, 1);
                    }
                });
            }

            const resArr: TreeNode[] = [];

            mapNodes.forEach((value, key) => {
                if (value === nodes.length) {
                    resArr.push(key);
                }
            })

            res = nodes.includes(resArr[0]) ? resArr[1] : resArr[0];
        }

        return res;
    }

    static hasChild(nexNode: TreeNode, toFind: string): boolean {
        let res = false;
        const [typeFind, idFind] = toFind.split('-');
        const nodeValue = nexNode.getValue();
        const nodeType = isInstanceOfIActivity(nodeValue) ? "activity" : "wbs";

        console.log(nodeType, typeFind, nodeValue.id, Number(idFind), nodeType === typeFind && nodeValue.id === Number(idFind))
        if (nodeType === typeFind && nodeValue.id === Number(idFind)) {
            return true;
        }

        for (const child of nexNode.getChildrens()) {
            const value = child.getValue();
            const type = isInstanceOfIActivity(value) ? "activity" : "wbs";

            if (type === typeFind && value.id === Number(idFind)) {
                return true;
            }

            res = this.hasChild(child, toFind) || res;
        }

        return res;
    }

    static findNode(nexNode: TreeNode, toFind: string): TreeNode | undefined {
        const [type, id] = toFind.split('-');
        const value = nexNode.getValue();
        const curType = isInstanceOfIActivity(value) ? "activity" : "wbs";

        if (curType === type) {
            if (Number(id) === value.id) {
                return nexNode;
            }
        }

        for (const child of nexNode.getChildrens()) {
            const res = this.findNode(child, toFind);

            if (res) {
                return res
            }
        }

        return undefined
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
