import React from 'react';

function ProjectCard({ title, description, image }) {
  return (
    <div className="bg-white shadow-lg rounded overflow-hidden">
      <img src={image} alt={title} className="w-full" />
      <div className="p-4">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
