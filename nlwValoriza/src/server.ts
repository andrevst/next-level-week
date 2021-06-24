import express from "express";
// @types/express
import "reflect-metadata";
import "./database";

import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, () => console.log("Server is running at port 3000"));