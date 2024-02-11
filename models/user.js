import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  type: String,
  name: String,
  email: String,
  password: String,
  phone_no: Number,
  DOB: Date,
  date_of_creation: {
    type: Date,
    default: new Date(),
  },
  medicalRecordId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MedicalRecord",
  },
  doctorDetailsId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DoctorDetails",
  },
});

const UserModel = mongoose.model("UserModel", userSchema);
export default UserModel;
