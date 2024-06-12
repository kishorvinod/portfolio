import React from 'react';

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className ="section-container certificates-section">
      <h2>CERTIFICATES</h2>
      <table className="certificates-table">
        <thead>
          <tr>
            <th>Certification</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data Science for Engineers</td>
            <td>IIT Madras</td>
          </tr>
          <tr>
            <td>Introduction to Internet of Things</td>
            <td>IIT Kharagpur</td>
          </tr>
          <tr>
            <td>Research Paper</td>
            <td>
              Topic: Sign Language Interpreter with text and animation<br />
              Event: National Conference on Advancements in Computer Applications - 2024<br />
              Venue: Fisat College
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Certificates;
