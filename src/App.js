import React  from 'react';

import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Main from "./Pages/Main/Main";

function App() {
  return (
      <div className="pages-container">
                <Main />
                <Projects />
                <About />
                <Contact />
      </div>
  );
}

export default App;
