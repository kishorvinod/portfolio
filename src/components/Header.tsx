import React, { useState } from 'react';
import profilePhoto from '../assets/photo.jpg';

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header>
        <div className="header-left">
          <img src={profilePhoto} alt="Kishor Vinod" className="profile-photo" onClick={openModal} />
          <div>
            <h1>KISHOR VINOD</h1>
            <p>SOFTWARE ENGINEER</p>
            <p>FULL STACK DEVELOPER</p>
          </div>
        </div>
        <nav className="header-right">
          <ul>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#contact">CONTACT ME</a></li>
            <li>
              <a href="#social-media">LINKEDIN & GITHUB</a>
              <ul>
                <li>
                  <a href="https://github.com/kishorvinod" target="_blank" rel="noopener noreferrer">GitHub</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/kishor-vinod-1a7004280/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li>
              </ul>
            </li>
            <li><a href="#education">ACADEMICS</a></li>
            <li><a href="#personal-details">PERSONAL DETAILS</a></li>
            <li><a href="#roles-responsibilities">ROLES & RESPONSIBILITIES</a></li>
            <li><a href="#certificates">CERTIFICATES</a></li>
          </ul>
        </nav>
      </header>
      
      {isModalOpen && (
        <div className="modal open">
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" src={profilePhoto} alt="Kishor Vinod" />
        </div>
      )}
    </>
  );
};

export default Header;
