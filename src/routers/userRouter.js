import express from "express";
import { edit, remove, watch, logout} from "../controllers/userControllers"

const userRouter   = express.Router();

userRouter.get("/edit",edit);
userRouter.get("/remove", remove);
userRouter.get("/logout", logout);
userRouter.get("/:id(\\d+)", watch);

export default userRouter