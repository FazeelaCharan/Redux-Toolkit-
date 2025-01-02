import React from "react";
// import UserProfile from "./components/UserProfile";
// import ThemeSwitcher from "./components/ThemeSwitcher";
import UserForm from "./components/UserForm";
import UserDisplay from "./components/UserDisplay";
import "./App.css";

const App = () => {
  return (
    <>
      {/* <UserProfile></UserProfile> */}
      {/* <ThemeSwitcher></ThemeSwitcher> */}
      <div className="app">
        <h1>User Information Manager</h1>
        <div className="container">
          <UserForm />
          <UserDisplay />
        </div>
      </div>
    </>
  );
};

export default App;
