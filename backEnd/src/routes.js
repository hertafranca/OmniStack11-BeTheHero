import { Router } from "express";

import OngController from "./controllers/OngController";

const routes = Router();

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.store);
routes.put("/ongs/:id", OngController.update);
routes.delete("/ongs/:id", OngController.delete);

export default routes;
