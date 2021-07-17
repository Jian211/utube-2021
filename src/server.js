import express from "express"
import morgan from "morgan";

const PORT = 4000;
const app = express();


app.use(morgan("dev"));

app.get("/", ()=> console.log("Someone came to my homepage wow!!"));


app.listen(PORT,() => console.log(`Server lisenting`));