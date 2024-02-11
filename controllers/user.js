import Users from "../models/user.js";
import MedicalRecordModel from "../models/MedicalRecord.js";
import DoctorDetailsModel from "../models/DoctorDetails.js";
import bcrypt from "bcrypt";

export const getAllUsers = async (req, res) => {
  try {
    const userData = await Users.find();
    res.status(200).json(userData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const createUser = async (req, res) => {
  const bodyData = req.body;

  try {
    const existingUser = await Users.findOne({ email: bodyData.email });
    if (existingUser) {
      res.status(409).json({ error: "Email already exists" });
      return;
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(bodyData.password, saltRounds);

    bodyData.password = hashedPassword;

    const newUser = Users(bodyData);
    const message = await newUser.save();
    res.status(201).json(message);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const userData = await Users.findById(id);
    res.status(200).json(userData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const deteleUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const userData = await Users.findByIdAndDelete(id);
    res.status(200).json(userData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const bodyData = req.body;

  if (bodyData.password) {
    const saltRounds = 10;
    bodyData.password = await bcrypt.hash(bodyData.password, saltRounds);
  }

  const update = { ...bodyData };
  const userData = await Users.findByIdAndUpdate(id, update, { new: true });
  res.status(200).json(userData);
  try {
    const userData = await Users.findByIdAndUpdate(id, bodyData);
    res.status(200).json(userData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const createMedicalRecord = async (req, res) => {
  const { id } = req.params;
  const bodyData = req.body;
  try {
    const user = await Users.findById(id);
    if (user.type !== "patient") {
      return res
        .status(403)
        .json({ error: "Access is allowed only for patients" });
    }
    const medicalRecordData = await MedicalRecordModel.create(bodyData);
    res.status(201).json(medicalRecordData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getMedicalRecords = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Users.findById(id);
    if (user.type !== "patient") {
      return res
        .status(403)
        .json({ error: "Access is allowed only for patients" });
    }
    const medicalRecordData = await MedicalRecordModel.find({ userId: id });
    res.status(200).json(medicalRecordData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const setDoctorDetails = async (req, res) => {
  const { id } = req.params;
  const bodyData = req.body;
  try {
    const user = await Users.findById(id);
    if (user.type !== "patient") {
      return res
        .status(403)
        .json({ error: "Access is allowed only for patients" });
    }
    const doctorDetailsData = await DoctorDetailsModel.create(bodyData);
    res.status(201).json(doctorDetailsData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getDoctorDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Users.findById(id);
    if (user.type !== "doctor") {
      return res
        .status(403)
        .json({ error: "Access is allowed only for doctors" });
    }
    const doctorDetailsData = await DoctorDetailsModel.findById(id);
    res.status(200).json(doctorDetailsData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
