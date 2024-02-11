import mongoose from "mongoose";

const doctorDetailsSchema = mongoose.Schema({
  specialization: String,
  affiliations: [String],
  experience: Number,
  education: [String],
  availabilityCalandar: [
    {
      day: String,
      from: String,
      to: String,
    },
  ],
  appointmentBookings: [
    {
      day: String,
      from: String,
      to: String,
    },
  ],
  previousAppointmentBookings: [
    {
      day: String,
      from: String,
      to: String,
    },
  ],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const DoctorDetailsModel = mongoose.model("DoctorDetails", doctorDetailsSchema);
export default DoctorDetailsModel;
