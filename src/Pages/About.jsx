import React from 'react';

export const About = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 mt-20">
      <div className="relative py-16">
        <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
          <div className="blur-[106px] h-56 bg-gradient-to-br from-teal-500 to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="relative mx-auto max-w-[58rem] text-center">
            <h3 className="text-white font-bold text-3xl mb-6">About Me</h3>
            <p className="text-white text-lg">
              Hello! I am Joseph, a passionate developer with experience in [your field]. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu urna euismod, fermentum purus eu, hendrerit ex.
            </p>
            <div className="mt-8">
              <a
                href="/path/to/your/resume.pdf" // Replace with the actual path to your resume PDF
                download="your_resume.pdf"
                className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-600"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
