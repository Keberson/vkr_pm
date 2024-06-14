interface IView extends ICreateView {
    id: number,
}

interface ICreateView {
    name: string,
    project_id: number
}

export {
    IView, ICreateView
};
