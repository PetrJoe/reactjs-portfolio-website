import React from 'react';

const GitHubStatsCard = () => {
  return (
    <div className="flex justify-center items-center bg-gray-800 p-4 rounded-lg shadow-lg mx-auto max-w-sm">
      <img 
        src="https://github-readme-stats.vercel.app/api?username=petrjoe&show_icons=true&theme=radical&hide_border=true" 
        alt="GitHub Stats" 
        className="max-w-full h-auto" 
      />
    </div>
  );
};

export default GitHubStatsCard;
