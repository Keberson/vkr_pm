const diffDate = (dateRaw1: string, dateRaw2: string): string => {
    if (dateRaw1 === "" || dateRaw2 === "") {
        return "Не определено";
    }

    const date1 = new Date(dateRaw1);
    const date2 = new Date(dateRaw2);

    return `${(date1.valueOf() - date2.valueOf())/(1000 * 60 * 60 * 24) + 1}`;
};

export default diffDate;
