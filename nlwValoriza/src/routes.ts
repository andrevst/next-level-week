import { Router } from "express";
import { CreateUserController } from "./controllers/createUserController";
import { CreateTagController } from "./controllers/createTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { CreateComplimentController } from "./controllers/createComplimentController";
import { AuthenticateUserController } from "./controllers/authenticateUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListTagsController } from "./controllers/listTagController";
import { ListUserSendComplimentsController } from "./controllers/listUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/listUserReceiveComplimentsController";
import { ListUsersController } from "./controllers/listUserController";

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();
const authenticateUserController = new AuthenticateUserController();
const listTagsController = new ListTagsController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listUsersController = new ListUsersController();

router.post("/login", authenticateUserController.handle);

router.post("/users", createUserController.handle);

router.get("/users", ensureAuthenticated, listUsersController.handle);

router.get( "/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle );

router.get( "/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle );

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);

router.get("/tags", ensureAuthenticated, listTagsController.handle);

router.post("/compliments", createComplimentController.handle);

export { router };