import express from "express"

const PORT = 4000;
const app = express();

const handle = (req, res, next) => {
    console.log(req.url, "hi");
    next();
}

//middleware
app.use(handle);

app.get("/", ()=> console.log("Someone came to my homepage wow!!"));



app.listen(PORT,() => console.log(`Server lisenting on http://localhost:${PORT}`));