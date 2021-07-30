import mongoose from "mongoose";
import "./models/video";

mongoose.connect("mongodb://127.0.0.1:27017/utube");

const db = mongoose.connection;

db.on("error", (error) => console.log("[X] DB Err!!!"));
db.once("open", () => console.log("✅   Start DB!!!"));
