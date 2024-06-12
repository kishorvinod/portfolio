import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="section-container education-section">
      <h2>EDUCATIONAL QUALIFICATIONS</h2>
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Branch / Subjects</th>
            <th>University / Board</th>
            <th>Name of Institution</th>
            <th>Year of Passing</th>
            <th>CGPA / Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Master Of Computer Applications</td>
            <td>Computer Applications</td>
            <td>APJ Abdul Kalam Technological University</td>
            <td>St. Joseph's College of Engineering and Technology, Palai</td>
            <td>2024</td>
            <td>8.55</td>
          </tr>
          <tr>
            <td>Bachelor Of Computer Applications</td>
            <td>Computer Applications</td>
            <td>Mahatma Gandhi University</td>
            <td>St. George's College Aruvithura</td>
            <td>2021</td>
            <td>8.28</td>
          </tr>
          <tr>
            <td>Higher Secondary Education (12th)</td>
            <td>Computer Science</td>
            <td>Central Board of Secondary Education</td>
            <td>St. Joseph's Central School & Junior College Mundakayam</td>
            <td>2018</td>
            <td>72%</td>
          </tr>
          <tr>
            <td>Secondary School Education (10th)</td>
            <td></td>
            <td>Central Board of Secondary Education</td>
            <td>St. Joseph's Central School & Junior College Mundakayam</td>
            <td>2016</td>
            <td>9.8</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Education;
