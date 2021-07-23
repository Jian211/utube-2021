import express from "express";

const globalRouter = express.Router();

globalRouter.get("/",        (req,res) => res.send("This is Home Page."))
globalRouter.get("/trending",(req,res) => res.send("This is Trending Page"))
globalRouter.get("/new",     (req,res) => res.send("This is New Page"))
globalRouter.get("/join",    (req,res) => res.send("This is Join Page"))
globalRouter.get("/login",   (req,res) => res.send("This is Login Page"))

export default globalRouter;