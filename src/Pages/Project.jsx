import React from 'react';

const projectsData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    title: 'Single Origin Blend',
    description: 'Our most popular blend, featuring beans from a single farm in Ethiopia. Notes of chocolate, berries, and citrus.',
  },
  {
    id: 2,
    image: 'https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7',
    title: 'Dark Roast Blend',
    description: 'A bold and flavorful blend of beans from Brazil, Colombia, and Indonesia. Notes of caramel, nuts, and tobacco.',
  },
  {
    id: 3,
    image: 'https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7',
    title: 'Another Dark Roast Blend',
    description: 'A bold and flavorful blend of beans from Brazil, Colombia, and Indonesia. Notes of caramel, nuts, and tobacco.',
  },
];

export const Project = () => {
  return (
    <section className="py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h3 className="font-bold text-2xl leading-[1.1] sm:text-2xl md:text-4xl p-6">Projects</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
          {projectsData.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-700 text-base">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
