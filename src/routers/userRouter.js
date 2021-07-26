import express from "express";
import { seeUser,editProfile,seeUsers} from "../controllers/usersController";

const userRouter = express.Router();

userRouter.get("/users", seeUsers);
userRouter.get("/users/:id(\\d+)",seeUser);
userRouter.get("/users/edit-profile",editProfile);

export default userRouter;