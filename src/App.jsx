import { useState } from 'react';
import { Footer } from './Components/Footer';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Technology } from './Pages/Technology';
import { Project } from './Pages/Project';
import GitHubStatsCard from './Pages/GitHubStatsCard';
import './index.css'


function App() {

  return (
    <div className="dark:bg-gray-900">
      <Home />
      <About />
      <Technology />
      <Project />
      <GitHubStatsCard />
      <Footer />
    </div>
  )
}

export default App