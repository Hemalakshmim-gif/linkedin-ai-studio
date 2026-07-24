import express from "express";

import {
  generatePost,
  getPosts,
  removePost,
} from "../controllers/postController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/generate",
  protect,
  generatePost
);

router.get(
  "/",
  protect,
  getPosts
);

router.delete(
  "/:id",
  protect,
  removePost
);

export default router;