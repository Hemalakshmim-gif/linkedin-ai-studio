import dotenv from "dotenv";
import app from "./app.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();

const PORT = process.env.PORT || 5000;
app.use(
  "/api/dashboard",
  dashboardRoutes
);
app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  console.log(`🚀 Server running on https://linkedin-ai-studio-db.onrender.com`);
});