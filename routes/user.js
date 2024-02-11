import {
  getAllUsers,
  createUser,
  getUserById,
  deteleUserById,
  updateUser,
  getMedicalRecords,
  getDoctorDetails,
  createMedicalRecord,
  setDoctorDetails,
  updateDoctorDetails,
  deleteDoctorDetails,
  updateMedicalRecord,
  deleteMedicalRecord,
} from "../controllers/user.js";

import express from "express";
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.delete("/:id", deteleUserById);
router.patch("/:id", updateUser);

router.post("/medical-record/:id", createMedicalRecord);
router.post("/doctor/:id", setDoctorDetails);
router.get("/medical-record/:id", getMedicalRecords);
router.get("/doctor/:id", getDoctorDetails);
router.patch("/doctor/:id", updateDoctorDetails);
router.delete("/doctor/:id", deleteDoctorDetails);
router.patch("/medical-record/:id", updateMedicalRecord);
router.delete("/medical-record/:id", deleteMedicalRecord);

export default router;
