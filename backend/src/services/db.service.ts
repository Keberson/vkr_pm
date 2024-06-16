import pgPromise from 'pg-promise';
import db from "../configs/db.config";

const pg = pgPromise({});

export const dbService = pg(db.connectionString);
