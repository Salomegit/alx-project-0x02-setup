import React, { useState } from "react";
import { CardProps } from "@/interfaces/index"; // import your CardProps

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPost: (post: CardProps) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onAddPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");

  if (!isOpen) return null; // Hide when closed

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && content && link) {
      onAddPost({ title, content, link });
      setTitle("");
      setContent("");
      setLink("");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border rounded w-full p-2"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block">Content:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border rounded w-full p-2"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block">Link:</label>
            <input
              type="url"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="border rounded w-full p-2"
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1 bg-blue-500 text-white rounded"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
