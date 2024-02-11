import mongoose from "mongoose";

const medicalRecordSchema = mongoose.Schema({
  sex: String,
  currrentMedications: [String],
  BP: String,
  heartRate: String,
  weight: Number,
  height: Number,
  patientNotes: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const MedicalRecordModel = mongoose.model("MedicalRecord", medicalRecordSchema);
export default MedicalRecordModel;
