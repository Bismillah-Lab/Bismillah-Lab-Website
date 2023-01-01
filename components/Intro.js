import React from "react";

const Intro = () => {
  return (
    <div className="container py-20 mx-auto px-28">
      <ul className="text-4xl list-disc list-inside sub-heading">
        <li>
          <span>Our Speciality</span>
        </li>
      </ul>
      <h1 className="py-8 text-5xl text-color">
        We work with our clients like a business partner—not just another
        vendor. We’re motivated by our dedication to success, and we take every
        project to provide the best sustainable solution for your business.
      </h1>
      <div className="flex flex-row py-6">
        <div>
          <h1 className="pr-8 text-color">
            <span className="text-5xl">3+</span> <br />
            <span className="text-4xl secondary-text-color">Years</span>
          </h1>
        </div>
        <div>
          <h1 className="pr-8 text-color">
            <span className="text-5xl">50+</span> <br />
            <span className="text-4xl secondary-text-color">Clients</span>
          </h1>
        </div>
        <div>
          <h1 className="pr-8 text-color">
            <span className="text-5xl">24+</span> <br />
            <span className="text-4xl secondary-text-color">Countries</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Intro;
