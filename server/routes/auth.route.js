import express from "express";
import {
  login,
  logout,
  signup,
  verifyCode,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);
router.post("/verify-code", verifyCode);

export default router;