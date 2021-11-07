import api from '../api/api';
import cron from 'node-cron';
import BaseData from '../models/DataSpaceFlight';

export function synchronizeData() {
    cron.schedule("0 9 * * *", () => {
        api.get("/articles").then(async resp => {
            try {
                const synchronizedArticles = resp.data

                await BaseData.create(synchronizedArticles)
            } catch (err) {
                console.error(err)
            }
        })
    })
}