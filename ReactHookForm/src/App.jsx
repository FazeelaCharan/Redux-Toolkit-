import React from "react";
import Form from "./components/Form";

const App = () => {
  const handleSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div>
      <h1>React Hook Form with Yup Validation</h1>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
