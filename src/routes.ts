import { Router } from "express";
import api from './api/api';

const routes = Router();

routes.get("/", (request, response) => {
    api.get("/articles").then(res => {
        return response.status(200).send("Back-end Challenge 2021 🏅 - Space Flight News")
    })
})

routes.get("/articles", (request, response) => {
    api.get("/articles").then(res => {
        return response.status(200).json(res.data)
    })
})

export { routes }