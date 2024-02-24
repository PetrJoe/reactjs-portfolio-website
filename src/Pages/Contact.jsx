import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

export const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-3 sm:px-5">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="border-b lg:border-b-0 lg:border-r">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Get In Touch</h2>
            <p className="mb-4 text-gray-600">Feel free to reach out for collaborations or just a friendly hello 👋</p>
            <div>
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-gray-500 mr-2" />
                <a href="mailto:email@example.com" className="text-blue-500 hover:underline">email@example.com</a>
              </div>
              <div className="flex items-center mb-4">
                <FaLinkedinIn className="text-gray-500 mr-2" />
                <a href="https://linkedin.com/in/yourprofile" className="text-blue-500 hover:underline">LinkedIn/yourprofile</a>
              </div>
              <div className="flex items-center mb-4">
                <FaGithub className="text-gray-500 mr-2" />
                <a href="https://github.com/yourusername" className="text-blue-500 hover:underline">GitHub/yourusername</a>
              </div>
              <div className="flex items-center mb-4">
                <FaTwitter className="text-gray-500 mr-2" />
                <a href="https://twitter.com/yourusername" className="text-blue-500 hover:underline">Twitter/@yourusername</a>
              </div>
            </div>
          </div>
          <div className="mt-6 lg:mt-0">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">About Me</h2>
            <p className="text-gray-600 mb-4">I'm a software developer passionate about building beautiful and functional web applications. With a focus on JavaScript, React, and TailwindCSS, I aim to create seamless user experiences.</p>
            <a href="/resume.pdf" download="YourName_Resume.pdf" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Download Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
