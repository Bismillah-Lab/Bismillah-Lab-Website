import React from "react";
import Process from "./../db/WorkProcess.json";

const WorkProcess = () => {
  return (
    <div className="bg-black">
      <div className="container py-20 mx-auto text-white px-28">
        <h1 className="text-6xl text-white">{Process[0].title}</h1>
        <h2 className="py-8 text-3xl secondary-text-color">
          {Process[0].description}
        </h2>
        <div className="py-8">
          {Process[0].process.map((p) => (
            <div className="py-4">
              <div className="flex flex-row justify-between py-6 text-4xl border-b-2 border-gray-700 new-white-text-color">
                <div>
                  <span className="pr-8">{p.serial}.</span>{" "}
                  <span>{p.title}</span>
                </div>
                <div>
                  <i className="ri-arrow-down-s-line"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
