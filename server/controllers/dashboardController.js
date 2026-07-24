import pool from "../config/db.js";

export const getDashboardStats = async (req, res) => {
  try {

    const [posts] = await pool.execute(
      "SELECT * FROM posts"
    );

    const totalPosts = posts.length;

    const totalWords = posts.reduce((sum, post) => {

      return (
        sum +
        post.generatedPost
          .trim()
          .split(/\s+/).length
      );

    }, 0);

    const averageWords =
      totalPosts === 0
        ? 0
        : Math.round(totalWords / totalPosts);

    const professionalPosts =
      posts.filter(
        p => p.tone === "Professional"
      ).length;

    const friendlyPosts =
      posts.filter(
        p => p.tone === "Friendly"
      ).length;

    const technicalPosts =
      posts.filter(
        p => p.tone === "Technical"
      ).length;

    const storytellingPosts =
      posts.filter(
        p => p.tone === "Storytelling"
      ).length;

    res.json({

      success:true,

      stats:{

        totalPosts,

        averageWords,

        professionalPosts,

        friendlyPosts,

        technicalPosts,

        storytellingPosts,

      },

    });

  } catch(error){

    console.error(error);

    res.status(500).json({

      success:false,

      message:"Dashboard Error",

    });

  }
};