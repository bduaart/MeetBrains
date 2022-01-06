import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { CreateEventController } from "../controllers/CreateEventController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateTicketsController } from "../controllers/CreateTicketsController";
import { ReadEventsController } from "../controllers/ReadEventsController";
import { ReadUsersController } from "../controllers/ReadUsersController";
import { ReadUsersByIdController } from "../controllers/ReadUsersByIdController";
import { ReadEventsByIdController } from "../controllers/ReadEventsByIdController";

const router = Router();
const createUserController = new CreateUserController();
const createEventController = new CreateEventController();
const authenticateUserController = new AuthenticateUserController();
const createTicketController = new CreateTicketsController();
const readEventsController = new ReadEventsController();
const readUsersController = new ReadUsersController();
const readUsersByIdController = new ReadUsersByIdController;
const readEventsByIdController = new ReadEventsByIdController;

router.post("/users", createUserController.handle);
router.post("/events", ensureAdmin, createEventController.handle);
router.post("/authenticate", authenticateUserController.handle);
router.post("/tickets", createTicketController.handle);
//router.get("/payment");
router.get("/readEvents", readEventsController.handle);
router.get("/readUsers", readUsersController.handle);
router.get("/readUser/:id", readUsersByIdController.handle);
router.get("/readEvent/:id", readEventsByIdController.handle);

export { router }