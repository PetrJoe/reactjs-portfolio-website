import { useState } from 'react';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Technology } from './Pages/Technology';
import { Project } from './Pages/Project';

import './index.css'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Technology />
      <Project />
      <Footer />
    </>
  )
}

export default App