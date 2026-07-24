import express from "express";
import cors from "cors";

import postRoutes from "./routes/postRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 LinkedIn AI Studio Backend Running",
  });
});

app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);

export default app;