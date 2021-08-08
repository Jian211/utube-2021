import "./db";
import "./models/User";
import express from "express"
//route
import movieRouter from "./routers/movieRouter";
import rootRouter from "./routers/rootRouter";
import session from "express-session";
import { userStatue } from "./middlewares";


const PORT = 4001;
const app = express();

app.set("view engine","pug");
app.set("views", process.cwd() + "/src/views");
app.use(session({
    secret : "hello",
    resave : true,
    saveUninitialized : true,
}));
app.use(userStatue);
app.use(express.urlencoded({extended:true}));
app.use(rootRouter);
app.use("/",movieRouter);

app.listen(PORT,() => console.log(`✅   Server lisenting`));