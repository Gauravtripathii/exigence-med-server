import { getAllUsers, createUser, getUserById, deteleUserById, updateUser, getMedicalRecords, getDoctorDetails } from "../controllers/user.js";

import express from "express";
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.delete("/:id", deteleUserById);
router.patch("/:id", updateUser);

router.get("/medical-record/:id", getMedicalRecords);
router.get("/doctor/:id", getDoctorDetails);

export default router;
