import Users from "../models/user";

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
  const newUser = Users(bodyData);

  try {
    const message = await newUser.save();
    res.status(201).json(message);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
