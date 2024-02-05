import { getAllUsers, createUser } from "../controllers/user.js";

import express from "express";
const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);

export default router;
