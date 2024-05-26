import {join as joinPath} from 'path';
import {QueryFile} from "pg-promise";


function sql(file: string) {
    const fullPath = joinPath(__dirname, file);

    return new QueryFile(fullPath, {minify: true});
}

export const init = {
    create_storage: sql('sql/create_storage.sql'),
    create_auth: sql('sql/create_auth.sql')
}

export const storage = {

}

// export const reports = {
//     get_all: sql('sql/reports/get_all.sql'),
//     get_one: sql('sql/reports/get_one.sql'),
//     get_report_file: sql('sql/reports/get_report_file.sql'),
//     delete_report: sql('sql/reports/delete_report.sql'),
//     edit_report: sql('sql/reports/edit_report.sql'),
// };
