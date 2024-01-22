import React from "react";
import VisNetwork from "react-vis-ts"
import ITask from "../../types/ITask";
import ITaskWBSLink from "../../types/ITaskWBSLink";
import IWBS from "../../types/IWBS";

interface TreeViewProps {
    view_id?: number
}

export const TreeView: React.FC<TreeViewProps> = ({
                                                      view_id = 2
}) => {
    const tasks: ITask[] = [
        {
            id: 1,
            title: "Task 1",
            date_start_plan: "2022-01-01",
            date_finish_plan: "2022-01-10",
            date_start_actual: "2022-01-05",
            date_finish_actual: "2022-01-15",
            status: "Выполнено"
        },
        {
            id: 2,
            title: "Task 2",
            description: "Description for Task 2",
            date_start_plan: "2022-01-15",
            date_finish_plan: "2022-01-20",
            status: "Выполняется"
        },
        {
            id: 3,
            title: "Task 3",
            date_start_plan: "2022-02-01",
            date_finish_plan: "2022-02-10",
            status: "Не начато"
        },
        {
            id: 4,
            title: "Task 4",
            date_start_plan: "2022-02-01",
            date_finish_plan: "2022-02-10",
            status: "Не начато"
        },
        {
            id: 5,
            title: "Task 5",
            date_start_plan: "2022-02-01",
            date_finish_plan: "2022-02-10",
            status: "Не начато"
        },
        {
            id: 6,
            title: "Task 6",
            date_start_plan: "2022-02-01",
            date_finish_plan: "2022-02-10",
            status: "Не начато"
        },
    ];
    const wbses: IWBS[] = [
        {
            id: 101,
            title: 'WBS 101',
            view_id: 1
        },
        {
            id: 102,
            title: 'WBS 102',
            view_id: 1
        },
        {
            id: 103,
            title: 'WBS 103',
            view_id: 2
        },
        {
            id: 104,
            title: 'WBS 104',
            view_id: 2
        },
    ];
    const wbs_filtered: IWBS[] = wbses.filter(value => view_id === -1 ? true : value.view_id === view_id);
    const links: ITaskWBSLink[] = [
        {
            id: 1,
            id_task: 1,
            id_wbs: 101
        },
        {
            id: 2,
            id_task: 2,
            id_wbs: 101
        },
        {
            id: 3,
            id_task: 3,
            id_wbs: 101
        },
        {
            id: 4,
            id_task: 4,
            id_wbs: 102
        },
        {
            id: 5,
            id_task: 5,
            id_wbs: 102
        },
        {
            id: 6,
            id_task: 6,
            id_wbs: 102
        },
        {
            id: 7,
            id_task: 1,
            id_wbs: 103
        },
        {
            id: 8,
            id_task: 3,
            id_wbs: 103
        },
        {
            id: 9,
            id_task: 5,
            id_wbs: 103
        },
        {
            id: 10,
            id_task: 2,
            id_wbs: 104
        },
        {
            id: 11,
            id_task: 4,
            id_wbs: 104
        },
        {
            id: 12,
            id_task: 6,
            id_wbs: 104
        },
    ];
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
