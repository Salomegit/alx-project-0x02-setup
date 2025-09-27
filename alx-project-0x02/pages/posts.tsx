import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      // Map data to match PostProps
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const formattedPosts: PostProps[] = data.map((post: any) => ({
        title: post.title,
        content: post.body, // rename "body" → "content"
        userId: post.userId, // ✅ correct key from API
      }));

      setPosts(formattedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      {posts.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          content={post.content}
          userId={post.userId}
        />
      ))}
    </div>
  );
};

export default Posts;
