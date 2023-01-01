import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="container py-16 mx-auto px-28">
      <div className="flex flex-row justify-between">
        <div>
          <Image src="/favicon.svg" height="48" width="48" />
        </div>
        <div>
          <span className="px-5 nav-text">Home</span>
          <span className="px-5 nav-text">Services</span>
          <span className="px-5 nav-text">Testimonial</span>
          <span className="px-5 nav-text">Design Blogs</span>
          <span className="px-5 py-4 nav-text nav-button">
            Schedule for call
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
