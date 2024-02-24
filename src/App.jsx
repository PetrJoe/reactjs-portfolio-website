import { useState } from 'react';
import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Technology } from './Pages/Technology';
import { Project } from './Pages/Project';
import { Contact } from './Pages/Contact';
import GitHubStatsCard from './Pages/GitHubStatsCard';
import './index.css'


function App() {

  return (
    <div className="bg-gray-800 text-white">
      <Navbar />
      <Home />
      <About />
      <Technology />
      <Project />
      <GitHubStatsCard />
      {/*<Contact />*/}
      <Footer />
    </div>
  )
}

export default App