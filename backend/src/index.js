import express from "express";
import cors from "cors";
import "dotenv/config";

import job from "./lib/cron.js";
import bookRoutes from "./routes/bookRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { connectDB } from "./lib/db.js";

const app = express();

job.start();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8004;

app.get("/", (req, res) => {
  return res.status(200).json({
    hi: new Date().toLocaleDateString(),
  });
});
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Fixed the log statement
  connectDB();
});
