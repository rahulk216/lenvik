import React, { useState } from "react";
import img1 from "../assets/hero-images/bg1.jpg";
import SectionHeader from "./SectionHeader";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="border">
      <img src={project.images[0]} alt="" />
      <div className="p-5">
        <h3 className="font-bold">{project.title}</h3>
        <p className="my-2">{project.description.slice(0, 100)}...</p>
        <div className="flex justify-between">
          <Link to={`/project/${project.id}`}>Learn More</Link>
          <p className="italic text-[12px]">{project.publishedAt}</p>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      images: [img1, img1, img1],
      title: "Project Title 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Aperiam assumenda consectetur magnam quo sint cum corrupti distinctioearum error quod",
      publishedAt: "12 May 2025",
    },
    {
      id: 2,
      images: [img1, img1],
      title: "Project Title 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Aperiam assumenda consectetur magnam quo sint cum corrupti distinctioearum error quod",
      publishedAt: "12 May 2025",
    },
    {
      id: 3,
      images: [img1, img1, img1],
      title: "Project Title 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Aperiam assumenda consectetur magnam quo sint cum corrupti distinctioearum error quod",
      publishedAt: "12 May 2025",
    },
    {
      id: 4,
      images: [img1, img1, img1],
      title: "Project Title 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Aperiam assumenda consectetur magnam quo sint cum corrupti distinctioearum error quod",
      publishedAt: "12 May 2025",
    },
  ]);

  return (
    <div className="my-10 px-10">
      <SectionHeader text="PROJECTS" color="blue1" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, voluptatem
        delectus adipisci dignissimos recusandae, eaque ex earum magni pariatur
        reprehenderit porro? Quae, ducimus? Voluptates labore architecto
        repudiandae ullam tempore sit!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {projects.map((project, index) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
