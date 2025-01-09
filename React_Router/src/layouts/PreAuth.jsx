import React from "react";
import { Outlet, useNavigate } from "react-router";

const PreAuth = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/login"); // Navigate to the About page
  };
  return (
    <>
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary" onClick={handleNavigation}>
                Get Started
              </button>
            </div>
          </div>
        </div>
        {/* Renders nested routes (e.g., Login, Signup) */}
      </div>
      {/* <Outlet /> */}
    </>
  );
};

export default PreAuth;
