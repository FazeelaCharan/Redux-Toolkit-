import React, { useState } from "react";
import useCreatePost from "../hooks/useCreatePost";

function PostForm() {
  const [formData, setFormData] = useState({ title: "", body: "" });
  const { isLoading, error, handleCreatePost } = useCreatePost();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await handleCreatePost(formData);
      alert("Post created successfully!");
      console.log("Created post:", response);
      setFormData({ title: "", body: "" }); // Reset form
    } catch (err) {
      console.error("Post creation failed:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="body">body:</label>
        <textarea
          id="body"
          name="body"
          value={formData.body}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Submit"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default PostForm;
