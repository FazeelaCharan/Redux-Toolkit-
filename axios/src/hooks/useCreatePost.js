import { useState } from "react";
import createPost from "../services/create-post.service";

function useCreatePost() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCreatePost = async (postData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await createPost(postData);
      return response; 
    } catch (err) {
      setError(err.message || "An error occurred");
      throw err; 
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    handleCreatePost,
  };
}

export default useCreatePost;
