interface IResource {
    id: number,
    type: 'Трудовые' | 'Материальные' | 'Затратные',
    quantity: number
}

export {
    IResource
};
