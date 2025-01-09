// import { createBrowserRouter } from "react-router";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import Home from "../pages/Home";
// import NotFound from "../components/NotFound";
// import ProductDetails from "../pages/ProductDetails";
// import PreAuth from "../layouts/PreAuth";
// import PostAuth from "../layouts/PostAuth";
// import Login from "../pages/Login";
// import Signup from "../pages/Signup";
// // import App from "../App";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <PreAuth />,
//     children: [
//       { path: "login", element: <Login /> },
//       { path: "signup", element: <Signup /> },
//     ],
//   },
//   {
//     path: "/app",
//     element: <PostAuth />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/about", element: <About /> },
//       { path: "/contact", element: <Contact /> },
//       { path: "/product/:id?", element: <ProductDetails /> },
//     ],
//   },
//   { path: "*", element: <NotFound /> },
// ]);
// export default router;
import { createBrowserRouter } from "react-router";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "../components/NotFound";
import ProductDetails from "../pages/ProductDetails";
import PreAuth from "../layouts/PreAuth";
import PostAuth from "../layouts/PostAuth";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PreAuth />,
  },
  { path: "/login", element: <Login /> },

  {
    path: "/app",
    element: <PostAuth />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "product/:id?", element: <ProductDetails /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
