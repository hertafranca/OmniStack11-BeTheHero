import { Router } from "express";

import OngController from "./controllers/OngController";
import IncidentsController from "./controllers/IncidentsController";
import ProfileController from "./controllers/ProfileController";
import SessionController from "./controllers/SessionController";

const routes = Router();

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.store);
routes.put("/ongs/:id", OngController.update);
routes.delete("/ongs/:id", OngController.delete);

routes.get("/incidents", IncidentsController.index);
routes.post("/incidents", IncidentsController.store);
routes.delete("/incidents/:id", IncidentsController.delete);

routes.get("/profile", ProfileController.index);

routes.post("/session", SessionController.store);

export default routes;
