import Users from "../models/user.js";
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
    // Check for existing user with the same email
    const existingUser = await Users.findOne({ email: bodyData.email });
    if (existingUser) {
      res.status(409).json({ error: "Email already exists" });
      return;
    }

    // Hash the password using a secure algorithm (e.g., bcrypt)
    const saltRounds = 10; // Adjust salt rounds as needed
    const hashedPassword = await bcrypt.hash(bodyData.password, saltRounds);

    // Update bodyData with the hashed password
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
