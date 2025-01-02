import React, { useState } from "react";
import useUserStore from "../store/userStore";

const UserForm = () => {
  const setUser = useUserStore((state) => state.setUser);
  const currentUser = useUserStore((state) => state.user);
  const [formData, setFormData] = useState(currentUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save User</button>
    </form>
  );
};

export default UserForm;
