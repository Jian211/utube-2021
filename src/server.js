import express from "express"
//route
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import storyRouter from "./routers/storyRouter";

const PORT = 4000;
const app = express();

app.use(globalRouter,userRouter,storyRouter);

app.listen(PORT,() => console.log(`Server lisenting`));