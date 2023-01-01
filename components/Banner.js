import React from "react";

const Banner = () => {
  return (
    <div className="container pt-4 pb-20 mx-auto px-28">
      <h1 className="heading-text">
        We crafting digital <br /> products & experiences <br /> to be brands.
      </h1>
      <div className="py-6">
        <span className="pr-4 text-2xl underline tag-line">Design</span>
        <span className="pr-4 text-2xl underline tag-line">Development</span>
        <span className="pr-4 text-2xl underline tag-line">Maintenance</span>
      </div>
      <div className="py-4">
        <span className="flex flex-row text-5xl font-medium text-orange-400 ">
          <i className="ri-arrow-right-line"></i>
          <span className="">See our works</span>
        </span>
      </div>
    </div>
  );
};

export default Banner;
