import { Router } from "express";
import { index, store } from "./controllers/DataController";

const routes = Router();

routes.get("/", index)

// routes.get("/articles", (request, response) => {
//     api.get("/articles").then(res => {
//         return response.status(200).json(res.data)
//     })
// })

routes.post("/articles", store)

export { routes }