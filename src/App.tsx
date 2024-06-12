import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import PersonalDetails from './components/PersonalDetails';
import RolesResponsibilities from './components/RolesResponsibilities';
import Certificates from './components/Certificates';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="section-container about-section">
          <About />
        </div>
        <div className="section-container portfolio-section">
          <Portfolio />
        </div>
        <div className="section-container education-section">
          <Education />
        </div>
        <div className="section-container skills-section">
          <Skills />
        </div>
        <div className="section-container personal-details-section">
          <PersonalDetails />
        </div>
        <div className="section-container roles-section">
          <RolesResponsibilities />
        </div>
        <div className="section-container certificates-section">
          <Certificates />
        </div>
        <div className="section-container contact-section">
          <Contact />
        </div>
      </main>
      <Footer />
      
    </div>
  );
};

export default App;
