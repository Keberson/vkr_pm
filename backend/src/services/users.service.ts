import {compareSync} from 'bcryptjs';
import {sign} from "jsonwebtoken";

import {sql} from "../utils/sql.util";
import {dbService} from "./db.service";

import {IAuth} from "../models/IAuth";
import {ILoginReq} from "../models/Requests";
import {ILoginRes} from "../models/Responses";
import {IUserData} from "../models/IUserData";

const PATH = "../sql/users";

const users = {
    getAuthByLogin: sql(`${PATH}/getAuthByLogin.sql`),
    getUserData: sql(`${PATH}/getUserData.sql`),
    getRoleName: sql(`${PATH}/getRoleName.sql`),
};

const getAuthByLogin = async (login: string): Promise<IAuth | null> => {
    return await dbService.oneOrNone(users.getAuthByLogin, [login]);
}

const getUserData = async (id: number): Promise<IUserData> => {
    return await dbService.one(users.getUserData, [id]);
}

const getRoleName = async (id: number): Promise<string> => {
    return await dbService.one(users.getRoleName, [id]);
}

const userLogin = async (data: ILoginReq): Promise<ILoginRes | undefined> => {
    let res: ILoginRes | undefined;
    const authData: IAuth | null = await getAuthByLogin(data.login);

    if (authData && compareSync(data.password, authData.password)) {
        const userData = await getUserData(authData.id_user);

        console.log(userData);

        const roleName = await getRoleName(userData.id_role);


        res = {
            jwt: sign({'id': authData.id_user}, 'PRIVATE.KEY'),
            name: userData.name,
            role: roleName
        }
    }

    return res;
}

export {
    getAuthByLogin,
    getUserData,
    getRoleName,
    userLogin
};
