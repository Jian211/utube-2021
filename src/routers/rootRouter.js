import express from "express";
import { mainPage, getJoin,postJoin,getLogin,postLogin } from "../controllers/rootcontroller";


const rootRouter = express.Router();

rootRouter.route("/").get(mainPage);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/login").get(getLogin).post(postLogin)

export default rootRouter;