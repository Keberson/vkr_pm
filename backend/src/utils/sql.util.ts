import {join as joinPath} from "path";
import {QueryFile} from "pg-promise";

export const sql = (file: string) => {
    const fullPath = joinPath(__dirname, file);

    return new QueryFile(fullPath, {minify: true});
}
