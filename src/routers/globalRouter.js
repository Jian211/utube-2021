import express from "express";
import { join, login } from "../controllers/userControllers"
import { home } from "../controllers/videoControllers";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/login", login);
globalRouter.get("/join", join);

export default globalRouter