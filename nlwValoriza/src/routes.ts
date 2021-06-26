import { Router } from "express";
import { CreateUserController } from "./controllers/createUserController";
import { CreateTagController } from "./controllers/createTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { CreateComplimentController } from "./controllers/createComplimentController";
import { AuthenticateUserController } from "./controllers/authenticateUserController";

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();
const authenticateUserController = new AuthenticateUserController();


router.post("/users", createUserController.handle);

router.post("/tags", ensureAdmin, createTagController.handle);

router.post("/compliments", createComplimentController.handle);

router.post("/login", authenticateUserController.handle);




export { router };