import { Timestamp } from "bson";
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username : String,
    required : true,
    unique : true
  },
  {
    email: String,
    required : true,
    unique : true
  },
  {
    password: String,
    required : true,
  },
  {Timestamp : true}
);

const User = mongoose.model("User",userSchema);

export default User;