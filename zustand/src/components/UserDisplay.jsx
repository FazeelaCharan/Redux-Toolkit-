import React from "react";
import useUserStore from "../store/userStore";

const UserDisplay = () => {
  const user = useUserStore((state) => state.user);
  const clearUser = useUserStore((state) => state.clearUser);

  return (
    <div className="user-display">
      <h2>User Information</h2>
      {user.name && (
        <div>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Age:</strong> {user.age}
          </p>
          <button onClick={clearUser}>Clear User</button>
        </div>
      )}
      {!user.name && <p>No user information saved</p>}
    </div>
  );
};

export default UserDisplay;
