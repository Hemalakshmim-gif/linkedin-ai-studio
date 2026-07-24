import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";

import HistoryCard from "../components/HistoryCard";
import PostModal from "../components/PostModal";
import { toast } from "react-toastify";
import {
  getAllPosts,
  deletePost,
} from "../services/historyService";

import "../styles/History.css";

function History() {

  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Modal States
  const [selectedPost, setSelectedPost] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // ==========================
  // Load Posts
  // ==========================

  useEffect(() => {

    const loadPosts = async () => {

      try {

        const response = await getAllPosts();

        setPosts(response.data.posts || []);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

    loadPosts();

  }, []);

  // ==========================
  // Search
  // ==========================

  const filteredPosts = useMemo(() => {

    if (!search.trim()) return posts;

    const keyword = search.toLowerCase();

    return posts.filter((post) => {

      return (

        post.title.toLowerCase().includes(keyword) ||

        post.tone.toLowerCase().includes(keyword) ||

        post.generatedPost.toLowerCase().includes(keyword)

      );

    });

  }, [posts, search]);

  // ==========================
  // Copy
  // ==========================

  const handleCopy = async (text) => {

    try {

      await navigator.clipboard.writeText(text);

      toast.success("Copied Successfully!");

    } catch (error) {

      console.error(error);

    }

  };

  // ==========================
  // View
  // ==========================

  const handleView = (post) => {

    setSelectedPost(post);

    setModalOpen(true);

  };

  // ==========================
  // Delete
  // ==========================

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this generated post?"
    );

    if (!confirmDelete) return;

    try {

      await deletePost(id);

      setPosts((prev) =>
        prev.filter((post) => post.id !== id)
      );

      toast.success("Post deleted successfully!");

    } catch (error) {

      console.error(error);

      toast.error("Failed to delete post.");

    }

  };

  // ==========================
  // Loading
  // ==========================

  if (loading) {

    return (

      <div className="history-page">

        <h2>Loading Posts...</h2>

      </div>

    );

  }

  return (

    <div className="history-page">

      {/* Modal */}

      <PostModal
        isOpen={modalOpen}
        post={selectedPost}
        onClose={() => setModalOpen(false)}
      />

      {/* Header */}

      <div className="history-header">

        <div>

          <h1>📚 Content History</h1>

          <p>

            View, manage and reuse your AI generated LinkedIn posts.

          </p>

        </div>

        <div className="history-count">

          <strong>{posts.length}</strong>

          <span>Posts</span>

        </div>

      </div>

      {/* Search */}

      <div className="history-search">

        <Search size={18} />

        <input
          type="text"
          placeholder="Search by title, tone or content..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* Cards */}

      {filteredPosts.length === 0 ? (

        <div className="empty-history">

          <h2>No Posts Found</h2>

          <p>

            Generate a LinkedIn post to see it here.

          </p>

        </div>

      ) : (

        <div className="history-grid">

          {filteredPosts.map((post) => (

            <HistoryCard
              key={post.id}
              post={post}
              onCopy={handleCopy}
              onDelete={handleDelete}
              onView={handleView}
            />

          ))}

        </div>

      )}

    </div>

  );

}

export default History;