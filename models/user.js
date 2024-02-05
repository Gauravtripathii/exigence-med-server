import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  date_of_creation: {
    type: Date,
    default: new Date(),
  },
});

const UserModel = mongoose.model("UserModel", userSchema);
export default UserModel;
