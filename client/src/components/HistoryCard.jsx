import { motion } from "framer-motion";
import {
  Copy,
  Trash2,
  Eye,
  Calendar,
  Clock,
} from "lucide-react";

function HistoryCard({
  post,
  onCopy,
  onDelete,
  onView,
}) {

  const wordCount = post.generatedPost
    ? post.generatedPost.trim().split(/\s+/).length
    : 0;

  const readingTime = Math.max(
    1,
    Math.ceil(wordCount / 180)
  );

  return (
    <motion.div
      className="history-card"
      whileHover={{
        y: -6,
      }}
    >

      <div className="history-top">

        <div>

          <h2>{post.title}</h2>

          <span
            className={`tone-badge ${post.tone.toLowerCase()}`}
          >
            {post.tone}
          </span>

        </div>

        <div className="history-date">

          <Calendar size={16} />

          {new Date(post.createdAt).toLocaleDateString()}

        </div>

      </div>

      <p className="history-description">

        {post.description}

      </p>

      <div className="history-tech">

        {post.techStack}

      </div>

      <div className="history-meta">

        <span>

          <Clock size={15}/>

          {readingTime} min

        </span>

        <span>

          {wordCount} words

        </span>

      </div>

      <div className="history-actions">

        <button onClick={() => onView(post)}>

          <Eye size={18}/>

          View

        </button>

        <button onClick={() => onCopy(post.generatedPost)}>

          <Copy size={18}/>

          Copy

        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(post.id)}
        >

          <Trash2 size={18}/>

          Delete

        </button>

      </div>

    </motion.div>
  );
}

export default HistoryCard;