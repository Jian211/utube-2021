import { urlencoded } from "body-parser";
import express from "express"
//route
import "./controllers/db";
import movieRouter from "./routers/movieRouter";


const PORT = 4000;
const app = express();

app.set("view engine","pug");
app.set("views", process.cwd() + "/src/views");
app.use(urlencoded({extend : true}))
app.use("/",movieRouter);

app.listen(PORT,() => console.log(`✅Server lisenting`));