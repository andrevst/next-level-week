import { Router } from "express";
import { CreateUserController } from "./controllers/createUserController";
import { CreateTagController } from "./controllers/createTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { CreateComplimentController } from "./controllers/createComplimentController";
import { AuthenticateUserController } from "./controllers/authenticateUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListTagsController } from "./controllers/listTagController";

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();
const authenticateUserController = new AuthenticateUserController();
const listTagsController = new ListTagsController();


router.post("/users", createUserController.handle);

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.get("/tags", ensureAuthenticated, listTagsController.handle);

router.post("/compliments", createComplimentController.handle);

router.post("/login", authenticateUserController.handle);




export { router };