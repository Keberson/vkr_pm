import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';
import {create_auth, create_project, create_storage} from "./database/connection";

config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/report', reportRoutes);

app.listen(PORT, async () => {
    await create_storage();
    await create_auth();
    await create_project();

    console.log(`Server was started on port: ${PORT}`);
});
