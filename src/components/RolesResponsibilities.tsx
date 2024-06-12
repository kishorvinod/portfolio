import React from 'react';

const RolesResponsibilities: React.FC = () => {
  return (
    <section id="roles-responsibilities" className="section-container roles-section">
      <h2>ROLES & RESPONSIBILITIES</h2>
      <table className="roles-table">
        <thead>
          <tr>
            <th>Role</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>College Placement Coordinator</td>
            <td>MCA 2022-24 batch</td>
          </tr>
          <tr>
            <td>Class Representative</td>
            <td>Semester 2 of MCA</td>
          </tr>
          <tr>
            <td>MCA Department Representative</td>
            <td>2023-24 year College Students Council</td>
          </tr>
          <tr>
            <td>Career Ambassador</td>
            <td>Kerala Knowledge Economy Mission from MCA 2022-24 Batch</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default RolesResponsibilities;
