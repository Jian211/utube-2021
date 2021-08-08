import mongoose from "mongoose";
import "./models/video"

mongoose.set('useCreateIndex', true)

mongoose.connect("mongodb://127.0.0.1:27017/utube",{
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

const db = mongoose.connection;

db.on("error", () => console.log("error!"));
db.once("open", () => console.log("connection!"));
