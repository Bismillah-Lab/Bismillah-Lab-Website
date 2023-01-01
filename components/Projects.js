import Image from "next/image";
import React from "react";
import Project from "./../db/projects.json";

const Projects = () => {
  return (
    <div className="container mx-auto py-28 px-28">
      <h1 className="text-6xl">{Project[0].title}</h1>
      <h2 className="py-3 text-3xl secondary-text-color">
        {Project[0].description}
      </h2>
      <div className="py-12">
        {Project[0].projects.map((project) => (
          <div key={project.id} className="grid grid-cols-2 py-8">
            <div>
              <h1 className="text-4xl">{project.title}</h1>
              <h2 className="py-4 text-2xl secondary-text-color">
                {project.category}
              </h2>
              <div className="my-4">
                <span className="link-btn-button">Live Link</span>
              </div>
            </div>
            <div>
              <Image src="/favicon.svg" height={100} width={100} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
