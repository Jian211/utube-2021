import express from "express"

import { editVideo, removeVideo } from "../controllers/videoControllers";
const videoRouter  = express.Router();

videoRouter.get("/edit", editVideo);
videoRouter.get("/remove",removeVideo);

export default videoRouter;