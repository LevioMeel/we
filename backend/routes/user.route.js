import express from "express";

import { getUser } from "../controller/user.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/get/", getUser);

export default router;
