import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="section-container portfolio-section">
      <h2>PROJECTS</h2>
      <table className="project-table">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hearsay – Unmasking the silence</td>
            <td>AI Project developed for deaf and mute communication with normal people.</td>
          </tr>
          <tr>
            <td>TASK MANAGEMENT SYSTEM</td>
            <td>Java-based web application used to distribute projects and tasks among different employees in an IT firm.</td>
          </tr>
          <tr>
            <td>IDENTITY AND ACCESS MANAGEMENT</td>
            <td>
              Java-based web application meant to be used by a college for managing different users' identification and authorization. This project has a login system which identifies different users based on registered details and provides their interface as per identified roles, greatly improving the identification and accessing of users by automating the majority of the work.
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Portfolio;
