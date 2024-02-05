import { getAllUsers, createUser, getUserById } from "../controllers/user.js";

import express from "express";
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);

export default router;
