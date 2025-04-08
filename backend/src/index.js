import express from "express";
import "dotenv/config";
import bookRoutes from "./routes/bookRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { connectDB } from "./lib/db.js";

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 8004;

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Fixed the log statement
  connectDB();
});
