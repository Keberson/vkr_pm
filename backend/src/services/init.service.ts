import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";

const init = {
    create_storage: sql('../sql/init/create_storage.sql'),
    create_auth: sql('../sql/init/create_auth.sql'),
    create_project: sql('../sql/init/create_project.sql'),
}

const create_storage = () => dbService.none(init.create_storage);
const create_auth = () => dbService.none(init.create_auth);
const create_project = () => dbService.none(init.create_project);

export {
    create_storage,
    create_auth,
    create_project
}
