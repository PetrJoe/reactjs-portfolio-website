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



// import React from 'react';

// export const Technology = () => {
//   return (
//     <>
//       <section className="container mx-auto px-4 space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-20">
//         <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
//             <h3 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Technology Used</h3>
//             <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
//               The product can personalize user experiences by understanding individual preferences and tailoring
//               recommendations or content based on user behavior and historical data.
//             </p>
//         </div>

//         <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">

//            <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
//               <div className="flex flex-col md:flex-row h-[180px] md:h-auto justify-between rounded-md p-6">
//                 <div className="flex-1 md:ml-4">
//                   <h3 className="font-bold text-lg md:text-xl">Python</h3>
//                   <p className="text-sm text-muted-foreground">
//                     App dir, Routing, Layouts, Loading UI, and API routes.
//                   </p>
//                 </div>
//               </div>
//             </div>


//             <div
//                 className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
//                 <div className="flex h-[180px] flex-col justify-between rounded-md p-6">

//                     <div className="space-y-2">
//                         <h3 className="font-bold">React 18</h3>
//                         <p className="text-sm">Server and Client Components. Use hook.</p>
//                     </div>
//                 </div>
//             </div>

//             <div
//                 className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
//                 <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
//                     <div className="space-y-2">
//                         <h3 className="font-bold">Database</h3>
//                         <p className="text-sm text-muted-foreground">ORM using Prisma and deployed on PlanetScale.</p>
//                     </div>
//                 </div>
//             </div>

//             <div
//                 className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
//                 <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
//                     <div className="space-y-2">
//                         <h3 className="font-bold">Components</h3>
//                         <p className="text-sm text-muted-foreground">UI components built using Radix UI and styled with Tailwind
//                             CSS.</p>
//                     </div>
//                 </div>
//             </div>

//             <div
//                 className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
//                 <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
//                     <div className="space-y-2">
//                         <h3 className="font-bold">Authentication</h3>
//                         <p className="text-sm text-muted-foreground">Authentication using NextAuth.js and middlewares.</p>
//                     </div>
//                 </div>
//             </div>

//             <div
//                 className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
//                 <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
//                     <div className="space-y-2">
//                         <h3 className="font-bold">Subscriptions</h3>
//                         <p className="text-sm text-muted-foreground">Free and paid subscriptions using Stripe.</p>
//                     </div>
//                 </div>
//             </div>

//         </div>
//       </section>
//     </>
//   );
// };

// export default Technology;