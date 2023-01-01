import React from "react";
import services from "./../db/services.json";

const Services = () => {
  return (
    <div className="container py-24 mx-auto px-28">
      {services.map((service) => (
        <div className="grid grid-cols-2">
          <div>
            <span className="text-2xl secondary-text-color">
              {service.serial}
            </span>
            <h1 className="py-2 text-5xl text-color">{service.title}</h1>
          </div>
          <div>
            <h1 className="py-2 text-3xl text-color">{service.description}</h1>
            <div className="grid grid-cols-2">
              {service.details.map((detail) => (
                <div className="py-12">
                  <h1 className="py-3 text-4xl font-bold text-color">
                    {detail.title}
                  </h1>
                  <p className="text-1xl secondary-text-color">
                    {detail.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
