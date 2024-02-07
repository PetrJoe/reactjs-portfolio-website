import React from 'react';

export const Technology = () => {
  const technologiesUsed = [
    {
      id: 1,
      name: 'React.js',
      description: 'A JavaScript library for building user interfaces.',
      logo: 'https://www.cdnlogo.com/logos/r/63/react.svg',
    },
    {
      id: 2,
      name: 'Tailwind CSS',
      description: 'A utility-first CSS framework for rapidly building custom designs.',
      logo: 'https://www.cdnlogo.com/logos/t/34/tailwind-css.svg',
    },
    {
      id: 3,
      name: 'Django',
      description: 'A high-level Python web framework that encourages rapid development and clean, pragmatic design.',
      logo: 'https://www.cdnlogo.com/logos/d/3/django.svg',
    },
    {
      id: 4,
      name: 'Python',
      description: 'A versatile and powerful programming language used for web development, data science, and more.',
      logo: 'https://www.cdnlogo.com/logos/p/81/python.svg',
    },
    {
      id: 5,
      name: 'Github',
      description: 'A distributed version control system for tracking changes in source code during software development.',
      logo: 'https://www.cdnlogo.com/logos/g/31/github.svg',
    },
    {
      id: 6,
      name: 'AWS (Amazon Web Services)',
      description: 'A comprehensive, evolving cloud computing platform provided by Amazon.',
      logo: 'https://www.cdnlogo.com/logos/a/88/amazon-web-services.svg',
    },
    // Add more technologies as needed
  ];
  return (
    <section className="px-10 py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologiesUsed.map((tech) => (
            <div
              key={tech.id}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
            >
              <img
                src={tech.logo}
                alt={`${tech.name} Logo`}
                className="w-16 h-auto mb-4"
              />
              <h3 className="text-lg font-bold mb-2">{tech.name}</h3>
              <p className="text-sm text-gray-700">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
