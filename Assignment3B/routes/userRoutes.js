import express from "express";
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser
} from "../controllers/userController.js";

const router = express.Router();

// CRUD APIs
router.post("/users", createUser);        // CREATE
router.get("/users", getUsers);           // READ
router.put("/users/:id", updateUser);     // UPDATE
router.delete("/users/:id", deleteUser);  // DELETE

export default router;