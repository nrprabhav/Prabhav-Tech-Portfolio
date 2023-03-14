import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import ProjectGallery from './components/ProjectGallery';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router basename='/prabhav-tech-portfolio'>
      <div>
        <Header />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="portfolio" element={<ProjectGallery />} />
          <Route path="contact" element={<Contact />} />
          {/* Define a route that will have descendant routes */}
          <Route path="resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
