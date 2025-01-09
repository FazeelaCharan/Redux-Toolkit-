import React from "react";
import { useEffect } from "react";
import usePosts from "../hooks/usePosts";
const GetPosts = () => {
  const { posts, getAllPosts } = usePosts();
  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <>
      <div>GetPosts</div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default GetPosts;
