import React from 'react';

const PersonalDetails: React.FC = () => {
  return (
    <section id="personal-details" className="section-container personal-details-section">
      <h2>PERSONAL DETAILS</h2>
      <table className="personal-details-table">
        <tbody>
          <tr>
            <td><strong>Address</strong></td>
            <td>Thadathil House, Kalaketty P O, 686508, Thidanadu, Kottayam, Kerala, India</td>
          </tr>
          <tr>
            <td><strong>Age and DOB</strong></td>
            <td>24, 25-04-2000</td>
          </tr>
          <tr>
            <td><strong>Gender</strong></td>
            <td>Male</td>
          </tr>
          <tr>
            <td><strong>Marital Status</strong></td>
            <td>Single</td>
          </tr>
          <tr>
            <td><strong>Passport No</strong></td>
            <td>V051754</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default PersonalDetails;
