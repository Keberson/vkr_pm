const getFormatDate = (date: string | null): string => {
    if (date) {
        const [year, month, day] = date.split('T')[0].split('-');

        return `${day}.${month}.${year}`;
    }

    return 'Не определено'
};

export default getFormatDate;
