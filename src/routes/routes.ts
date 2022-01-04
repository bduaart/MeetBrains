import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { CreateEventController } from "../controllers/CreateEventController";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const router = Router();
const createUserController = new CreateUserController();
const createEventController = new CreateEventController();

router.post("/users", createUserController.handle);
router.post("/events", ensureAdmin, createEventController.handle);

export { router }