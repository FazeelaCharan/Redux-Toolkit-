import { createBrowserRouter } from "react-router";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "../components/NotFound";
import ProductDetails from "../pages/ProductDetails";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/product/:id?", element: <ProductDetails /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
export default router;
