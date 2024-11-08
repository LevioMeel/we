import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "../backend/routes/auth.route.js";
import userRoutes from "../backend/routes/user.route.js";
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

const corsOptions = {
  origin: "http://localhost:5173", // Allow only requests from this origin
  methods: "GET,POST,PUT,DELETE", // Allow only these methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow only these headers
  credentials: true,
};
app.options("*", cors(corsOptions));

app.use(cors(corsOptions));

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log("Server is running on PORT: " + PORT);
  connectDB();
});
