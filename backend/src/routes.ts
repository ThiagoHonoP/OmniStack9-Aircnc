import { Router } from "express";
import { SessionController } from "./controllers/SessionController";
import { SpotController } from "./controllers/SpotController";
import multer from "multer";
import { storage } from "./config/upload";

const routes = Router();
const upload = multer({ storage });

routes.post("/sessions", SessionController.store);
routes.post("/spots", upload.single("thumbnail"), SpotController.store);

export default routes;
