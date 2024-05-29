const getFormatDate = (date: Date): string => {
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
};

export default getFormatDate;
