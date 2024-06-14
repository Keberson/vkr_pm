const objectToDataList = (data: object) => {
    const dataList = [];
    const dataJSON = JSON.parse(JSON.stringify(data));

    for (const key in dataJSON) {
        dataList.push(dataJSON[key]);
    }

    return dataList;
}

export {
    objectToDataList
}
