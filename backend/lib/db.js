import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URL = process.env.URL;

export const connectDB = () => {
  mongoose
    .connect(URL, {
      config: { autoIndex: true },
    })
    .then(console.log("Database Connected!"))
    .catch((err) => console.log(err));
};
