import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import employeeRoutes from "./routes/employeeRoutes.js";

dotenv.config();

// Server
const PORT = process.env.PORT || 5008;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log("DB Error:", err));

// Routes
//app.use("/employees", employeeRoutes);



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
