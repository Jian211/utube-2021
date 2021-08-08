import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema({
    name : { type: String, unique : true, require: true },
    email : { type: String, unique : true, require: true },
    password : { type: String, require: true },
});

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password,3);
})

const User = mongoose.model("User",userSchema);

export default User;

