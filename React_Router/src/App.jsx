// import { Outlet } from "react-router";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// const App = () => (
//   <div>
//     <Header />
//     <main>
//       <Outlet />
//     </main>
//     <Footer />
//   </div>
// );

// export default App;
import React from "react";
import { RouterProvider } from "react-router";
import router from "./routes/router";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
