import { Router } from "express";
import { index, indexAll, store, showByUser } from "./controllers/DataController";

const routes = Router();

routes.get("/", index)
routes.get("/articles", indexAll)
routes.get("/articles/:id", showByUser)

routes.post("/articles", store)


export { routes }