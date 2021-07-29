import express from "express";
import { home, movieDetail, filterMovie } from "../controllers/movieController";

const movieRouter = express.Router();

movieRouter.route("/").get(home);
movieRouter.route("/movieDetail/:id(\\d+)").get(movieDetail);
movieRouter.route("/filter").get(filterMovie);

export default movieRouter;
