import React from "react";
import Counter from "./Components/Counter";

const App = () => {
  return (
    <>
      <div
        style={{
          height: "100vh", // Full viewport height
          display: "flex", // Flexbox for centering
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        <Counter />
      </div>
    </>
  );
};

export default App;
