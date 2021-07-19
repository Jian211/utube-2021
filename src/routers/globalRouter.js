import express from "express";
import { join, login } from "../controllers/userControllers"
import { home , search } from "../controllers/videoControllers";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/login", login);
globalRouter.get("/join", join);
globalRouter.get("/search", search);

export default globalRouter