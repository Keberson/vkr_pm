import React from "react";
import VisNetwork from "react-vis-ts"
import ITask from "../../types/ITask";
import ITaskWBSLink from "../../types/ITaskWBSLink";
import IWBS from "../../types/IWBS";
import {useAppSelector} from "../../hooks/useAppSelector";

interface TreeViewProps {
    view_id?: number
}

export const TreeView: React.FC<TreeViewProps> = ({
                                                      view_id = 2
}) => {
    const tasks: ITask[] = useAppSelector(state => state.project.tasks);
    const wbses: IWBS[] = useAppSelector(state => state.project.wbses);
    const wbs_filtered: IWBS[] = wbses.filter(value => view_id === -1 ? true : value.view_id === view_id);
    const links: ITaskWBSLink[] = useAppSelector(state => state.project.links);
    const link_filtered = links.filter(link => wbs_filtered.find(wbs => wbs.id === link.id_wbs));
    const tasks_filtered = tasks.filter(task => link_filtered.find(link => link.id_task === task.id));
    const nodes =  [
        ...(tasks_filtered.map(task => ({
            id: `Task ${task.id}`,
            label: task.title,
            title: task.description
        }))),
        ...(wbs_filtered.map(wbs => ({
            id: `WBS ${wbs.id}`,
            label: wbs.title
        })))
    ];
    const edges = [
        ...(link_filtered.map(link => ({
            from: `Task ${link.id_task}`,
            to: `WBS ${link.id_wbs}`
        }))),
    ];
    const graph = {
        nodes: nodes,
        edges: edges,
    };
    const options = {
        physics: {
            enabled: false
        },
        layout: {
            hierarchical: {
                enabled: true,
                levelSeparation: 100,
                nodeSpacing: 100,
                treeSpacing: 150,
                direction: 'DU',
                sortMethod: 'directed',
            },
        },
        nodes: {
            shape: "box",
        },
        edges: {
            color: '#000000',
            smooth: { enabled: true, type: 'dynamic' },
        },
    };

    return (
        <VisNetwork graph={graph} options={options} style={{ height: "70vh" }} />
    );
};
