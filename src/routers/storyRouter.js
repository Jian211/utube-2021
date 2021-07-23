import express from "express";

const storyRouter = express.Router();

storyRouter.get("/stories/:id(\\d+)", (req,res) => res.send("This is Stories."));
storyRouter.get("/stories/:id(\\d+)/edit", (req,res) => res.send(`edit #${req.params.id} Story.`));
storyRouter.get("/stories/:id(\\d+)/delete", (req,res) => res.send(`Delete #${req.params.id} Story.`));

export default storyRouter;