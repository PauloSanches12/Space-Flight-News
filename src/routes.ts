import { Router } from "express";
import { index, indexAll, store, show, update } from "./controllers/DataController";

const routes = Router();

routes.get("/", index)
routes.get("/articles", indexAll)
routes.get("/articles/:id", show)

routes.post("/articles", store)

routes.put("/articles/:id", update)

export { routes }