import "../styles/LinkedInPreview.css";
import {
  Heart,
  MessageCircle,
  Repeat2,
  Send,
  Copy,
  Check,
  MoreHorizontal,
  Globe,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

function LinkedInPreview({ generatedPost, loading }) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCopy = async () => {
    if (!generatedPost) return;

    await navigator.clipboard.writeText(generatedPost);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const wordCount = generatedPost
    ? generatedPost.trim().split(/\s+/).length
    : 0;

  const readingTime = Math.max(
    1,
    Math.ceil(wordCount / 180)
  );

  const previewText =
    generatedPost && !expanded
      ? generatedPost.slice(0, 650)
      : generatedPost;

  const renderContent = () => {
    if (loading) {
      return (
        <div className="loading-wrapper">

          <Sparkles
            className="loading-icon"
            size={55}
          />

          <h2>AI is crafting your post...</h2>

          <div className="loading-bar">

            <div className="loading-progress"></div>

          </div>

          <p>
            Creating a professional LinkedIn post...
          </p>

        </div>
      );
    }

    if (!generatedPost) {
      return (
        <div className="empty-preview">

          <div className="empty-icon">

            ✨

          </div>

          <h2>
            Generate Your LinkedIn Post
          </h2>

          <p>
            Turn your project into a beautiful,
            professional LinkedIn post with AI.
          </p>

          <div className="empty-features">

            <div className="feature">

              ✅ Professional Writing

            </div>

            <div className="feature">

              🤖 AI Powered

            </div>

            <div className="feature">

              📋 One Click Copy

            </div>

          </div>

          <span className="waiting-text">

            Waiting for your project...

          </span>

        </div>
      );
    }

    return (
      <>
        {previewText
          .split("\n")
          .map((line, index) => (
            <p
              key={index}
              className="post-line"
            >
              {line}
            </p>
          ))}

        {generatedPost.length > 650 && (
          <button
            className="show-more-btn"
            onClick={() =>
              setExpanded(!expanded)
            }
          >
            {expanded ? (
              <>
                Show Less
                <ChevronUp size={16} />
              </>
            ) : (
              <>
                Show More
                <ChevronDown size={16} />
              </>
            )}
          </button>
        )}
      </>
    );
  };
    return (
    <motion.section
      className="preview-section"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="preview-card">

        {/* Empty State */}

        {!generatedPost && !loading ? (
          renderContent()
        ) : (
          <>
            {/* Header */}

            <div className="preview-header">

              <div className="profile">

                <div className="avatar">

                  H

                  <span className="online-dot"></span>

                </div>

                <div className="profile-info">

                  <h3>Hema</h3>

                  <p>Computer Science Engineering Student</p>

                  <span>
                    Sri Venkateshwara College of Engineering
                  </span>

                  <div className="profile-meta">

                    <span>Just now</span>

                    <Globe size={14} />

                  </div>

                </div>

              </div>

              <button className="more-btn">

                <MoreHorizontal size={20} />

              </button>

            </div>

            {/* Content */}

            <div className="preview-content">

              {renderContent()}

            </div>

            {/* Stats */}

            {!loading && generatedPost && (

              <div className="engagement-info">

                <span>❤️ 128 Reactions</span>

                <span>14 Comments</span>

              </div>

            )}

            {/* Actions */}

            {!loading && generatedPost && (

              <div className="preview-actions">

                <button>

                  <Heart size={18} />

                  Like

                </button>

                <button>

                  <MessageCircle size={18} />

                  Comment

                </button>

                <button>

                  <Repeat2 size={18} />

                  Repost

                </button>

                <button>

                  <Send size={18} />

                  Send

                </button>

              </div>

            )}

            {/* AI Insights */}

            {!loading && generatedPost && (

              <div className="ai-insights">

                <h4>🤖 AI Insights</h4>

                <div className="insight-grid">

                  <div className="insight-card">

                    <span>Words</span>

                    <strong>{wordCount}</strong>

                  </div>

                  <div className="insight-card">

                    <span>Reading</span>

                    <strong>{readingTime} min</strong>

                  </div>

                  <div className="insight-card">

                    <span>Readability</span>

                    <strong>★★★★★</strong>

                  </div>

                  <div className="insight-card">

                    <span>Professional</span>

                    <strong>★★★★★</strong>

                  </div>

                </div>

              </div>

            )}

            {/* Copy Button */}

            {!loading && generatedPost && (

              <motion.button
                className="copy-btn"
                onClick={handleCopy}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
              >

                {copied ? (
                  <>
                    <Check size={18} />

                    Copied Successfully
                  </>
                ) : (
                  <>
                    <Copy size={18} />

                    Copy LinkedIn Post
                  </>
                )}

              </motion.button>

            )}

          </>
        )}

      </div>
    </motion.section>
  );
}

export default LinkedInPreview;