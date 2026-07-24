import "../styles/PostModal.css";
import { toast } from "react-toastify";
import {
  Copy,
  X,
  Globe,
  Heart,
  MessageCircle,
  Repeat2,
  Send,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

function PostModal({
  isOpen,
  onClose,
  post,
}) {

  if (!isOpen || !post) return null;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(post.generatedPost);

    toast.success("Copied Successfully!");
  };

  return (

    <AnimatePresence>

      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >

        <motion.div
          className="linkedin-modal"
          initial={{
            scale: .9,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          exit={{
            scale: .9,
            opacity: 0,
          }}
        >

          {/* Header */}

          <div className="linkedin-header">

            <div className="linkedin-profile">

              <div className="linkedin-avatar">

                H

              </div>

              <div>

                <h3>Hema</h3>

                <p>

                  Computer Science Engineering Student

                </p>

                <div className="linkedin-meta">

                  <span>Just now</span>

                  <Globe size={14} />

                </div>

              </div>

            </div>

            <button
              className="close-btn"
              onClick={onClose}
            >

              <X size={22} />

            </button>

          </div>

          {/* Content */}

          <div className="linkedin-content">

            {post.generatedPost
              .split("\n")
              .map((line, index) => (

                <p key={index}>

                  {line}

                </p>

              ))}

          </div>

          {/* Stats */}

          <div className="linkedin-stats">

            <span>

              ❤️ 128 Reactions

            </span>

            <span>

              14 Comments

            </span>

          </div>

          {/* Actions */}

          <div className="linkedin-actions">

            <button>

              <Heart size={18}/>

              Like

            </button>

            <button>

              <MessageCircle size={18}/>

              Comment

            </button>

            <button>

              <Repeat2 size={18}/>

              Repost

            </button>

            <button>

              <Send size={18}/>

              Send

            </button>

          </div>

          {/* Footer */}

          <div className="modal-footer">

            <button
              onClick={handleCopy}
            >

              <Copy size={18}/>

              Copy Post

            </button>

          </div>

        </motion.div>

      </motion.div>

    </AnimatePresence>

  );

}

export default PostModal;