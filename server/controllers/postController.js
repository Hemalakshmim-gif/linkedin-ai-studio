import { buildLinkedInPrompt } from "../prompts/linkedinPrompt.js";
import { generateLinkedInPost } from "../services/geminiService.js";

import {
  savePost,
  getAllPosts,
  deletePost,
} from "../models/postModel.js";

/* ===========================================
   Generate LinkedIn Post
=========================================== */

export const generatePost = async (req, res) => {
  try {

    const {
      title,
      description,
      techStack,
      tone,
    } = req.body;

    if (!title || !description || !techStack) {

      return res.status(400).json({
        success: false,
        message:
          "Project Title, Description and Tech Stack are required.",
      });

    }

    const prompt = buildLinkedInPrompt(req.body);

    const generatedPost =
      await generateLinkedInPost(prompt);

    const postId = await savePost({

      userId: req.user.id,

      ...req.body,

      generatedPost,

    });

    return res.status(200).json({

      success: true,

      data: {

        id: postId,

        post: generatedPost,

        tone,

        generatedAt: new Date(),

      },

    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({

      success: false,

      message: "Failed to generate post.",

    });

  }

};

/* ===========================================
   Get Logged-in User Posts
=========================================== */

export const getPosts = async (req, res) => {

  try {

    const posts = await getAllPosts(
      req.user.id
    );

    return res.status(200).json({

      success: true,

      posts,

    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({

      success: false,

      message: "Failed to fetch posts.",

    });

  }

};

/* ===========================================
   Delete Logged-in User Post
=========================================== */

export const removePost = async (req, res) => {

  try {

    await deletePost(
      req.params.id,
      req.user.id
    );

    return res.status(200).json({

      success: true,

      message: "Deleted Successfully.",

    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({

      success: false,

      message: "Delete Failed.",

    });

  }

};