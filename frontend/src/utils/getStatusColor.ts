const getStatusColor = (status: "Не начато" | "Выполняется" | "Выполнено"): string => {
    let color: "text-red-600" | "text-orange-400" | "text-green-500";

    if (status === "Не начато") {
        color = "text-red-600";
    } else if (status === "Выполняется") {
        color = "text-orange-400"
    } else {
        color = "text-green-500";
    }

    return color;
};

export default getStatusColor;
