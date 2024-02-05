import { getAllUsers, createUser, getUserById, deteleUserById, updateUser } from "../controllers/user.js";

import express from "express";
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.delete("/:id", deteleUserById);
router.patch("/:id", updateUser);

export default router;
