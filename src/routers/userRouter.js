import express from "express";

const userRouter = express.Router();

userRouter.get("/users", (req,res) => res.send("This is User Page."));
userRouter.get("/users/:id(\\d+)", (req,res) => res.send(`This is User ${req.params.id}.`));
userRouter.get("/users/edit-profile", (req,res) => res.send("This is edit-profile."));

export default userRouter;