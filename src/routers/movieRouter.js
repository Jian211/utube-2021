import express from "express";
import { home, movieDetail, filterMovie,handleMovie,postMovie } from "../controllers/movieController";

const movieRouter = express.Router();

movieRouter.route("/").get(home);
movieRouter.route("/movieDetail/:id(\\d+)").get(movieDetail);
movieRouter.route("/filter").get(filterMovie);
movieRouter.route("/addMovie").get(handleMovie).post(postMovie);

export default movieRouter;
