import React from "react";
import capabilities from "./../db/capabilities.json";

const Capabilities = () => {
  return (
    <div>
      <div className="bg-black">
        <div className="container py-20 mx-auto text-white px-28">
          <h1 className="text-white text-7xl">{capabilities[0].title}</h1>
          <h2 className="py-8 text-3xl secondary-text-color">
            {capabilities[0].description}
          </h2>
          <div className="grid grid-cols-2">
            <div></div>
            <div className="grid grid-cols-2 gap-4">
              {capabilities[0].details.map((detail) => (
                <div className="py-4">
                  <h1 className="text-4xl text-white">{detail.title}</h1>
                  <p className="py-4 text-1xl secondary-text-color">
                    {detail.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
