import useUserStore from "../store/userStore";

const UserProfile = () => {
  const { user, setUser, clearUser } = useUserStore();
  console.log(user);

  return (
    <div>
      <h1>User Profile</h1>
      {user ? (
        <>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <button onClick={clearUser}>Logout</button>
        </>
      ) : (
        <button onClick={() => setUser({ name: "fazeela", age: 23 })}>
          Login
        </button>
      )}
    </div>
  );
};

export default UserProfile;
