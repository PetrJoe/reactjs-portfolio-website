import React from 'react';

export const About = () => {
  return (
    <div className="bg-gray-900 dark:bg-gray-900 mt-10" id="about">
      <div className="relative py-16">
        <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
          <div className="blur-[106px] h-56 bg-gradient-to-br from-teal-500 to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="relative mx-auto max-w-[58rem] text-center">
            <h3 className="text-white font-bold text-3xl mb-6">About Me</h3>
            <p className="text-white text-lg">
              Hi, I'm Akanmu AKinkunmi Joseph, a Python/Django developer with 4+ years of experience.
              Passionate about solving complex problems, I craft web solutions that make life easier.
              I excel in collaborative environments, constantly learning and sharing knowledge.
              My goal is to develop software that not only meets but exceeds expectations.
              Let's work together to create something truly impactful!
            </p>
            <div className="mt-8">
              <a
                href="https://res.cloudinary.com/dun267qn1/image/upload/v1707295811/AkanmuAKinkunmiJosephCoverLetter.pdf"
                download="AkanmuAKinkunmiJoseph.pdf"
                className="bg-gray-400 text-blue ml-2 px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-600"
              >
                Download Cover Letter
              </a>
               <a
                href="https://res.cloudinary.com/dun267qn1/image/upload/v1707295896/AkinkunmiJosephAKANMUCV.pdf.pdf"
                download="AkinkunmiJosephAKANMUCV.pdf"
                className="bg-gray-400 text-blue ml-2 px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-600"
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
