import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Portfolio() {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of Project One.',
      image: '/assets/images/project1.jpg',
    },
    {
      title: 'Project Two',
      description: 'A brief description of Project Two.',
      image: '/assets/images/project1.jpg',
    },
    {
      title: 'Project Three',
      description: 'A brief description of Project Three.',
      image: '/assets/images/project1.jpg',
    },
  ];

  return (
    <section className="pt-20 py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              title={project.title} 
              description={project.description} 
              image={project.image} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
