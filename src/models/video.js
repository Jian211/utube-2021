import mongoose from "mongoose";

const videoSchema = mongoose.Schema({
    title : String,
    description : String,
    createdAt : Date,
    hashTag : [{type: String}],
    meta : {
        views : Number,
        rating : Number
    }
})

const video = mongoose.model("video", videoSchema);

export default video;