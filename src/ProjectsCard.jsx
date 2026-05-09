import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsCard = ({ project }) => {
  const { title, description, tech, github, live, image } = project;

  return (
    <div className="bg-surface border-2  border-border rounded-2xl p-6 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-text-main">{title}</h3>
        <div className="flex items-center gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-main hover:text-primary transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-main hover:text-primary transition-colors"
          >
            <FaExternalLinkAlt size={22} />
          </a>
        </div>
      </div>
      <img src={project.image} alt={title} className="w-full h-48 object-contain rounded-lg mb-4 " />
      <p className="text-text-muted">{description}</p>
       <h2 className="text-lg font-semibold text-text-main">Technologies Used:</h2> 
      <div className="flex flex-wrap gap-2">
        {tech.map((techName, index) => (
          <span key={index} className="bg-surface-variant text-text-main px-3 py-1 rounded-full text-sm">
            {techName}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;