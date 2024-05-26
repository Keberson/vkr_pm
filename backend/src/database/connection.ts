import pgPromise from 'pg-promise';
import {init, storage} from "./db";

const pg = pgPromise({});

export const connection = pg("postgres://postgres:244911Kyt@localhost:5432/vkr");

export const create_storage = () => connection.none(init.create_storage);
export const create_auth = () => connection.none(init.create_auth);

// export const get_all = (): Promise<IReportWithoutFile[]> => connection.manyOrNone(reports.get_all);
// export const get_report = (identity: string): Promise<IReportWithoutFile | null> => connection.oneOrNone(reports.get_one, identity)
// export const reports_get_file = (identity: string) => connection.manyOrNone(reports.get_report_file, identity);
// export const delete_report = (identity: string) => connection.none(reports.delete_report, identity);
// export const edit_report = (identity: string, name: string, text: string) => connection.none(reports.edit_report, [identity, name, text]);
