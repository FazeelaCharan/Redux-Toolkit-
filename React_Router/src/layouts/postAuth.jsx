import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PostAuth = () => {
  return (
    <>
      <div>
        <Header />
        <main className="h-full">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default PostAuth;
