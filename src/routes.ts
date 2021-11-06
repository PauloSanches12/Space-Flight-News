import { Router } from "express";
import { index, indexAll, store } from "./controllers/DataController";

const routes = Router();

routes.get("/", index)
routes.get("/articles", indexAll)

routes.post("/articles", store)
// routes.get("/articles", (request, response) => {
//     api.get("/articles").then(res => {
//         return response.status(200).json(res.data)
//     })
// })


export { routes }