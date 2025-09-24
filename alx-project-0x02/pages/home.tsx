import React, { useState } from "react";
import Card from "@/components/common/Card";
import { CardProps } from "@/interfaces/index";
import PostModal from "@/components/common/PostModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<CardProps[]>([
    {
      title: "ALX Intranet",
      content: "Access the ALX intranet for resources and information.",
      link: "https://alx-intranet.hbtn.io/",
    },
  ]);

  const handleAddPost = (post: CardProps) => {
    setPosts([...posts, post]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">This is the home page</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Add New Post
      </button>

      {posts.map((post, index) => (
        <Card key={index} {...post} />
      ))}

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddPost={handleAddPost}
      />
    </div>
  );
};

export default Home;
