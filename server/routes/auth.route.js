import express from "express";
import {
  login,
  logout,
  signup,
  verifyCode,
  forgetPassword,
  resetPassword,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);
router.post("/verify-code", verifyCode);
router.post("/forget-password", forgetPassword);
router.post("/reset-password/:token", resetPassword);
export default router;