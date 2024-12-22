import { Router } from "express";
import { SessionController } from "./controllers/SessionController";
import { SpotController } from "./controllers/SpotController";
import multer from "multer";
import { storage } from "./config/upload";
import { DashboardController } from "./controllers/DashboardController";
import { BookingController } from "./controllers/BookingController";

const routes = Router();
const upload = multer({ storage });

routes.post("/sessions", SessionController.store);
routes.get("/spots", SpotController.index);
routes.post("/spots", upload.single("thumbnail"), SpotController.store);

routes.get("/dashboard", DashboardController.index);

routes.post("/spots/:spot_id/bookings", BookingController.store);

export default routes;
