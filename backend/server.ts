import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';

import activityRoute from "./src/routes/activity.route";
import wbsRoute from "./src/routes/wbs.route";
import treeRoute from "./src/routes/tree.route";
import viewRoute from "./src/routes/view.route";
import authRoute from "./src/routes/auth.route";
import projectRoute from "./src/routes/project.route";

config();

const PORT = process.env.PORT || 3001;
const app = express();
const baseUrl = '/api';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`${baseUrl}/auth`, authRoute);
app.use(`${baseUrl}/activity`, activityRoute);
app.use(`${baseUrl}/wbs`, wbsRoute);
app.use(`${baseUrl}/tree`, treeRoute);
app.use(`${baseUrl}/view`, viewRoute);
app.use(`${baseUrl}/project`, projectRoute);

app.listen(PORT, async () => {
    // await create_storage();
    // await create_auth();
    // await create_project();

    console.log(`Server was started on port: ${PORT}`);
});
