import React  from 'react';

import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Main from "./Pages/Main/Main";

import './Pages.css'

function App() {
  return (
      <div className="pages-container">
                <Navbar />
                <Main />
                <Projects />
                <About />
                <Contact />
      </div>
  );
}

export default App;
