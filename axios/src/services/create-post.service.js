import axiosInstance from "../config/axios";

const createPost = async (postData) => {
  try {
    const response = await axiosInstance.post("/posts", postData);
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

export default createPost;
