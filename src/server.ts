import express, { json, Request, Response } from 'express';
import { run } from './models/DataSpaceFlight';
import { routes } from './routes';
import cors from 'cors';
import api from './api/api';
import cron from 'node-cron';

const app = express()

function synchronizeData() {
    cron.schedule("0 9 * * *", () => {
        api.get("/articles").then(resp => {
            console.log(resp.data)
            const synchronizedArticles = resp.data

            return synchronizedArticles
        })
    })
}

synchronizeData()
run()

app.use(cors());
app.use(json());
app.use(routes)


app.listen(3333, () => console.log("Server is running on port 3333"));